import {config} from "dotenv";
const { DISCORD_BOT_TOKEN, DISCORD_CLIENT_ID } = config().parsed;
import { Client, GatewayIntentBits, } from 'discord.js';
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    console.log('messageCreate');
    // Ignore messages from bots
    if (message.author.bot) return;
    if(message.channel.name !== 'bot-test') {
        console.log(message.channel.name);
        return;
    }
    console.log(message);
    // Check if the message has text content
    if (message.content) {
        console.log(message.content);
        message.reply(message.content);
    }
    // Check if the message has attachments
    else if (message.attachments.size > 0) {
        message.reply('You sent an attachment.');
    }
    // Check if the message has embeds
    else if (message.embeds.length > 0) {
        message.reply('You sent an embed.');
    }
    else {
        message.reply('Your message did not contain any recognizable content.');
    }
});

client.on('interactionCreate', async interaction => {
    // console.log(interaction);
    // console.log(interaction.options);

    if (!interaction.isChatInputCommand()){
        // interaction.reply("This is not a command");
        return;
    }

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(DISCORD_BOT_TOKEN);