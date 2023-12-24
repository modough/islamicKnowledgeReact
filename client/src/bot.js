// import the required dependencies
import 'dotenv/config';
import OpenAI from 'openai';
import { INSTRUCTIONS, SECRET_KEY } from './key.js';

export const teachBot = async (req, res) => {
    const openai = new OpenAI({
        apiKey: SECRET_KEY,
    });
    try {
        const { question, threadId } = req.body;
        const assistant = await openai.beta.assistants.create({
            name: "Islamic Tutor",
            instructions: INSTRUCTIONS,
            tools: [{ type: "code_interpreter" }],
            model: "gpt-4-1106-preview",
        });
        const thread = threadId ? { id: threadId } : await openai.beta.threads.create();
        // Send the user question in the thread
        const message = await openai.beta.threads.messages.create(thread.id, {
            role: "user",
            content: question,
        });
        console.log(message)
        // Use runs to wait for the assistant response and then retrieve it
        const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: assistant.id
        });

        let runStatus = await openai.beta.threads.runs.retrieve(
            thread.id,
            run.id
        );

        // Wait until the run status is completed
        while (runStatus.status !== "completed") {
            await new Promise((resolve) => setTimeout(resolve, 100));
            runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
        }

        // Retrieve the last assistant message
        const messages = await openai.beta.threads.messages.list(thread.id);
        const data = messages.data;
        res.json({ data, threadId: thread.id });
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message);
    }
};

export const closeThread = async (req, res) => {
    try {
        res.json({ message: 'Thread closed' });
    } catch (error) {
        res.status(500).send(error.message);
    }
}