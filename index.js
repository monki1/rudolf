import {config} from "dotenv";
const { DISCORD_BOT_TOKEN } = config().parsed;
import { Client, GatewayIntentBits, } from 'discord.js';
import onMessageCreate from "./message/onMessageCreate.js";
import onInteractionCreate from "./command/onInteractionCreate.js";
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

client.on('messageCreate', onMessageCreate);

client.on('interactionCreate', onInteractionCreate);

client.login(DISCORD_BOT_TOKEN);