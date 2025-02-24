// utils/faiss.js - FAISS Vector Search
const faiss = require('faiss-node');
const index = new faiss.IndexFlatL2(512);

const searchInVectorDB = (embedding) => {
    return index.search(embedding, 5); // Returns top 5 relevant results
};

module.exports = { index, searchInVectorDB };