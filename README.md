# Discord Premium Role Bot

This Discord bot assigns the "Premium" role to users who leave a promotional server and removes it when they depart, in a specified server.

## Setup

1. First, you need to create a Discord bot for this bot to work. Visit the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application.
2. Once your application is created, navigate to the "Bot" tab and click on "Add Bot" to create a bot user for your application. Copy the bot token.
3. Clone this repository to your local machine or download the source code.
4. Replace the placeholder values in the code (`BOT_TOKEN`, `HUB_SOCIETY_GUILD_ID`, `PREMIUM_ROLE_ID`, `ADVERTISING_GUILD_ID`, `ADVERTISING_CHANNEL_ID`) with your actual Discord bot token and server IDs.
5. Install the necessary dependencies by running `npm install`.
6. Run the bot using `node your_file_name.js`, where `your_file_name.js` is the name of the file where you've placed your bot code.

## Usage

- Once the bot is running and added to your server, users leaving the advertising server will automatically lose the "Premium" role in your specified server.
- Users in the advertising server can use the `.premium` command in the designated channel to gain the "Premium" role in your server.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
