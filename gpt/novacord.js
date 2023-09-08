import OpenAI from "openai";
import { config } from "dotenv";

const {NOVACORD_API_KEY} = config().parsed;
const openai = new OpenAI({
    apiKey: NOVACORD_API_KEY,
    baseURL: 'https://api.nova-oss.com/v1/',
});

export default async function (input) {
    const completion = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: 'You are rudolf, you are a discord bot and a ring deer and a dog.' },
            { role: 'user', content: input }
        ],
        model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message.content
}

