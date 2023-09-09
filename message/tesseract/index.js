import Tesseract from "tesseract.js";
import fetch from "node-fetch";

async function tesseract(message) {
    if (message.attachments.size > 0) {
        message.attachments.each(async (attachment) => {
            if (attachment.url) {
                try {
                    const response = await fetch(attachment.url);
                    const buffer = await response.buffer();

                    Tesseract.recognize(
                        buffer,
                        'eng',
                        {
                            logger: info => console.log(info),
                        }
                    ).then(({ data: { text } }) => {
                        message.reply(text);
                    }).catch(error => {
                        message.reply('Error recognizing text.');
                        console.error(error);
                    });
                } catch (error) {
                    message.reply('Error fetching image.');
                    console.error(error);
                }
            }
        });
    }
}

export default tesseract;
