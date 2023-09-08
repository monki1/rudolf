
import * as chrono from 'chrono-node';

function containsReminder(content, keywords = ['remind']) {
    const parts = content.split(' ');
    return parts.some(part => keywords.includes(part.toLowerCase()));
}

function calculateDelay(date) {
    const now = new Date();
    return date.getTime() - now.getTime();
}

async function sendReply(message, delay) {
    setTimeout(async () => {
        await message.reply('你记得哦');
    }, delay);
}

async function remindMeAt(message, date){
    console.log(date);
    const delay = calculateDelay(date);
    console.log(delay);
    if (delay > 0) {
        message.reply(`I will remind you at [${date.toDateString()}]`);
        await sendReply(message, delay);
    } else {
        await message.reply('The specified date is in the past.');
    }
}

async function remindMe(message) {
    if (containsReminder(message.content)) {
        console.log('contains reminder');
        try {
            const date = chrono.parseDate(message.content);
            console.log(date);
            await remindMeAt(message, date);

        } catch (error) {
            console.error(error);
            await message.reply(error.message);
        }
    }

}

export default remindMe;
