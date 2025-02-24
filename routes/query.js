// routes/query.js - Query AI Route
const express = require('express');
const router = express.Router();
const { getEmbedding, generateAnswer } = require('../config/openai');
const { searchInVectorDB } = require('../utils/faiss');

router.post('/', async (req, res) => {
    const { question } = req.body;
    const questionEmbedding = await getEmbedding(question);
    
    const relevantDocs = searchInVectorDB(questionEmbedding);
    const answer = await generateAnswer(relevantDocs);
    res.json({ answer, source: relevantDocs });
});

module.exports = router;
