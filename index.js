const Discord = require('discord.js');
const client = new Discord.Client();

const BOT_TOKEN = 'Your_Bot_Token';
const HUB_SOCIETY_GUILD_ID = 'Your_Server_ID';
const PREMIUM_ROLE_ID = 'Premium_Role_ID';
const ADVERTISING_GUILD_ID = 'Adversiting_Server_ID';
const ADVERTISING_CHANNEL_ID = 'Adversiting_Server_Channel_ID';

client.on('message', async (message) => {
    const command = '.premium';

    if (message.guild && message.guild.id === ADVERTISING_GUILD_ID && message.channel.id === ADVERTISING_CHANNEL_ID) {
        if (message.content.toLowerCase() === command) {
            const member = message.member;
            const hubSocietyGuild = client.guilds.cache.get(HUB_SOCIETY_GUILD_ID);
            const premiumRole = hubSocietyGuild.roles.cache.get(PREMIUM_ROLE_ID);

            if (hubSocietyGuild && premiumRole) {
                try {
                    const hubSocietyMember = await hubSocietyGuild.members.fetch(member.id);
                    await hubSocietyMember.roles.add(premiumRole);

                    const successMessage = `You have been granted the Premium role in HubSociety!`;

                    await message.reply(successMessage);

                    const dmSuccessMessage = `Congratulations! You have been granted the Premium role!`; 
                    await hubSocietyMember.send(dmSuccessMessage);
                } catch (error) {
                    console.error('Error:', error);

                    const errorMessage = `An error occurred. Please try again later.`;
                    await message.reply(errorMessage);
                }
            } else {
                console.error('Server ID or Premium role not found.');

                const errorMessage = `An error occurred. Please try again later.`;
                await message.reply(errorMessage);
            }
        }
    }
});

client.on('guildMemberRemove', async (member) => {
    const advertisingGuildId = ADVERTISING_GUILD_ID;
    const hubSocietyGuild = client.guilds.cache.get(HUB_SOCIETY_GUILD_ID);
    const premiumRole = hubSocietyGuild.roles.cache.get(PREMIUM_ROLE_ID);

    if (member.guild.id === advertisingGuildId && premiumRole) {
        if (hubSocietyGuild.members.cache.has(member.id)) {
            const hubSocietyMember = hubSocietyGuild.members.cache.get(member.id);
            try {
                await hubSocietyMember.roles.remove(premiumRole);

                const dmSuccessMessage = `Your Premium role Has been removed because you left the promotional server..`;
                await hubSocietyMember.send(dmSuccessMessage);
            } catch (error) {
                console.error('Error:', error);

                const errorMessage = `An error occurred. Please try again later.`;
                await hubSocietyMember.send(errorMessage);
            }
        }
    }
});

client.login(BOT_TOKEN);
