const { Client, Intents } = require('discord.js');
const axios = require('axios');

const DISCORD_BOT_TOKEN = 'YOUR_DISCORD_BOT_TOKEN';
const GITHUB_WEBHOOK_SECRET = 'YOUR_GITHUB_WEBHOOK_SECRET';
const GITHUB_REPOSITORY_URL = 'https://api.github.com/repos/YOUR_USERNAME/YOUR_REPOSITORY';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!webhook')) {
    const channel = message.mentions.channels.first();
    if (!channel) {
      return message.reply('Please mention a channel to receive webhook notifications.');
    }

    try {
      const response = await axios.post(
        `${GITHUB_REPOSITORY_URL}/hooks`,
        {
          name: 'discord',
          config: {
            url: `https://discord.com/api/webhooks/${channel.id}/${channel.token}`,
            secret: GITHUB_WEBHOOK_SECRET,
          },
          events: ['push', 'pull_request'],
          active: true,
        },
        {
          headers: {
            Authorization: `token YOUR_GITHUB_ACCESS_TOKEN`,
          },
        }
      );

      message.reply('Webhook successfully set up!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      message.reply('Failed to set up webhook. Please check your GitHub access token and secret.');
    }
  }
});

client.login(DISCORD_BOT_TOKEN);
