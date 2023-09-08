import hf from "../../gpt/hf.js";
import novacord from "../../gpt/novacord.js";
const command = "rudolf";

export default async function (message) {
    if (message.content.includes(command)) {
        const input = message.content.replace(command, "");
        // message.reply(await hf(input));
        message.reply(await novacord(input));
    }

}