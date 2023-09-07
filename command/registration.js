import { REST, Routes } from 'discord.js';
import {config} from "dotenv";
const { DISCORD_BOT_TOKEN, DISCORD_CLIENT_ID } = config().parsed;
import { commands } from './commands.js';

const rest = new REST({ version: '10' }).setToken(DISCORD_BOT_TOKEN);

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}