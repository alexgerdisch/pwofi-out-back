import * as dotenv from 'dotenv';

import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

const systemPrompt = "You are an enterprise grade neural network focused on effective communication.";
const firstPrompt = "Write a brief and friendly follow-up message to colleagues, thanking them for attending the meeting that covered improving build times";

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        { "role": "system", "content": systemPrompt },
        { "role": "user", "content": firstPrompt }
    ]
})

console.log(completion.data.choices[0].message);
