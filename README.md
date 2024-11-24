# Discord GitHub Webhook Integration

This project integrates GitHub repository events with a Discord channel using a webhook. When changes occur in your repository (e.g., a new commit), a message will be sent to your Discord channel.

## Prerequisites

Before you start, make sure you have the following:

- A **Discord bot token**.
- A **GitHub access token** with the necessary permissions (`repo`).
- A **GitHub webhook secret** (you can generate a random string).
- Your **GitHub repository username** and **repository name**.

## Steps to Set Up

### 1. Create a Discord Bot

To create a Discord bot, follow these steps:

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Create a new application and navigate to the **Bot** tab.
3. Under the **Bot** tab, click **Add Bot**.
4. Copy the **bot token** and save it for later use.
5. Replace the placeholder `YOUR_DISCORD_BOT_TOKEN` in the script with this bot token.

### 2. Set Up a Webhook in GitHub

To receive GitHub events in Discord, you need to set up a webhook in your GitHub repository:

1. Go to your GitHub repository and navigate to **Settings** > **Webhooks**.
2. Click **Add webhook**.
3. In the **Payload URL** field, enter the following URL (replacing `${channel.id}` and `${channel.token}` with your actual Discord channel ID and token):
    https://discord.com/api/webhooks/${channel.id}/${channel.token}
5. Set the **Content type** to `application/json`.
6. Select the events you want to trigger the webhook (e.g., `"push"`, `"pull_request"`, etc.).
7. Click **Add webhook**.

Now, your repository is connected to your Discord channel. This webhook will send notifications to the Discord bot whenever one of the selected events occurs.

### 3. Install Dependencies

Install the required Node.js packages by running:

use you bash
npm install discord.js axios


### 4. Configure the Script
Now, open the script (e.g., your_script.js) and configure it with the necessary information:

YOUR_DISCORD_BOT_TOKEN: Replace this with your Discord bot token (from Step 1).
YOUR_GITHUB_WEBHOOK_SECRET: Replace this with the secret key for your webhook (Step 2).
YOUR_USERNAME/YOUR_REPOSITORY: Replace with your GitHub username and repository name.
YOUR_GITHUB_ACCESS_TOKEN: Replace with your GitHub personal access token.



Example:
const DISCORD_BOT_TOKEN = 'YOUR_DISCORD_BOT_TOKEN';
const GITHUB_WEBHOOK_SECRET = 'YOUR_GITHUB_WEBHOOK_SECRET';
const GITHUB_REPO = 'YOUR_USERNAME/YOUR_REPOSITORY';
const GITHUB_ACCESS_TOKEN = 'YOUR_GITHUB_ACCESS_TOKEN';

### 5. Run the Script
Once the webhook is set up and the script is configured, you can start the bot by running the script:

use you bash
node webhook.js

This will start the process, and the bot will listen for GitHub events and forward them to your Discord channel.

### 6. Test the Webhook
To test the integration, make a change in your GitHub repository (e.g., commit a new file, create a new pull request, etc.). If everything is set up correctly, you should receive a message in your Discord channel.


#### Troubleshooting
If you're encountering issues, check the following:

Discord Token or GitHub Token Issues: Ensure that both your Discord bot token and GitHub access token are correct.
Webhook Not Triggering: Make sure you've selected the right events (like "push" or "pull_request") when setting up the webhook in GitHub.
No Message in Discord: Double-check the format of the webhook URL in GitHub, especially the channel ID and token.
If you continue to face problems, feel free to open an issue in the repository for assistance.
