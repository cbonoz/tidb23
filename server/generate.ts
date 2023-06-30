import { query } from "./connection";

const { AI_MODEL, EXAMPLE_RESPONSE, OPEN_API_KEY } = require("./constants")
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");

const PROMPT = `Based on the above description, gender, last name, and character attributes, recommend a list of 5 top baby names 'name' ranked with a percentage match score 'match_score' and short explanation for reason 'reason' for each as a list of json objects. Don't include any other text or notes in your response.`

const axiosInstance = axios.create({
    baseURL: 'https://api.openai.com'
});

// Create baby name prompt
const createBabyNamePrompt = (gender: string, description: string, lastName: string, attributes: Array<string>) => {
    const attributeString = attributes.join(', ')
    const prompt = `Gender: ${gender}. Description: ${description}. Attributes: ${attributeString} Last name: ${lastName} ${PROMPT}`
    console.log('prompt', prompt)
    return prompt;
};

export const createCompletionPayload = (messages: Array<string>) => {
    return {
        "messages": messages.map(m => {
            return {
                "content": m,
                "role": "user"
            }
        }),
        "model": AI_MODEL,
    }
}

const createCompletion = (prompt: string) => {
    // return EXAMPLE_RESPONSE;
    const body = createCompletionPayload([prompt])
    return axiosInstance.post('/v1/chat/completions', body, {
        headers: {
            'Authorization': `Bearer ${OPEN_API_KEY}`,
            'Content-Type': 'application/json'
        }
    });
}

export const createBabyNames = async (gender: string, description: string, lastName: string, attributes: Array<string>) => {
    const prompt = createBabyNamePrompt(gender, description, lastName, attributes);
    const completion = await createCompletion(prompt);

    const choices = completion.data.choices;
    const content = choices[0]['message']['content'];

    // Save result to DB.
    await query(
        'insert into name_results(gender, description, last_name, attributes, content) values (?, ?, ?, ?, ?)',
        [gender, description, lastName, attributes, content]
    )

    return {'names': content};
};



