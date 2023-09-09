import {config} from "dotenv";
const { TEST_USERNAME_0, TEST_USERNAME_1 } = config().parsed;
const TEST_CHANNEL_NAME = 'bot-test';
const ONLY_TEST_CHANNEL = false;
import remindMe from "./remindMe/remindMe.js";
import heyRudolf from "./heyRudolf/index.js";
import tessaract from "./tesseract/index.js";

async function onMessageCreate(message) {
    console.log('messageCreate');
    // Ignore messages from bots
    if (message.author.bot) return;
    // Ignore messages from other channels
    if (message.channel.name !== TEST_CHANNEL_NAME && ONLY_TEST_CHANNEL) {
        console.log(message.channel.name);
        return;
    }
    // Check if the message has text content
    if (message.content) {

        await remindMe(message);
        await heyRudolf(message);

        const username = message.author.username;










    }
    // Check if the message has attachments
    if (message.attachments.size > 0) {
        message.reply('You sent an attachment.');
        await tessaract(message);
    }
    // Check if the message has embeds
    else if (message.embeds.length > 0) {
        message.reply('You sent an embed.');
    }


}

export default onMessageCreate;