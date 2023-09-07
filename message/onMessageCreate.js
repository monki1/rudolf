
const TEST_CHANNEL_NAME = 'bot-test';

function onMessageCreate(message){
    console.log('messageCreate');
    // Ignore messages from bots
    if (message.author.bot) return;
    if(message.channel.name !== TEST_CHANNEL_NAME) {
        console.log(message.channel.name);
        return;
    }


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
}

export default onMessageCreate;