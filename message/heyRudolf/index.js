import hf from "../../gpt/hf.js";
import novacord from "../../gpt/novacord.js";

export default async function (message) {
    if (message.content.includes("hey rudolf")) {
        const input = message.content.replace("hey rudolf", "");
        // message.reply(await hf(input));
        message.reply(await novacord(input));
    }

}