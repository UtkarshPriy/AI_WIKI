// config/openai.js - OpenAI API Helper
const axios = require('axios');
const openAiKey = process.env.OPENAI_API_KEY;

const getEmbedding = async (text) => {
    const response = await axios.post('https://api.openai.com/v1/embeddings', {
        input: text,
        model: "text-embedding-ada-002"
    }, { headers: { Authorization: `Bearer ${openAiKey}` } });
    return response.data.data[0].embedding;
};

const generateAnswer = async (context) => {
    const response = await axios.post('https://api.openai.com/v1/completions', {
        model: "gpt-4",
        prompt: `Based on the following document, answer the question:\n${context}`,
    }, { headers: { Authorization: `Bearer ${openAiKey}` } });
    return response.data.choices[0].text;
};

module.exports = { getEmbedding, generateAnswer };
