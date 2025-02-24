// routes/upload.js - Upload PDF/CHM Route
const express = require('express');
const router = express.Router();
const { extractTextFromPDF } = require('../utils/pdfParser');
const { getEmbedding } = require('../config/openai');
const { getDB } = require('../config/db');
const { index } = require('../utils/faiss');

router.post('/', async (req, res) => {
    if (!req.files) return res.status(400).send("No file uploaded.");
    
    const file = req.files.document;
    const text = await extractTextFromPDF(file.data);
    
    const embedding = await getEmbedding(text);
    index.add(embedding);
    await getDB().collection('documents').insertOne({ text, embedding });
    res.send("Document processed and stored.");
});

module.exports = router;