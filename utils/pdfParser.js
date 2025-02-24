const pdfParse = require('pdf-parse');

/**
 * Extracts text from a given PDF file buffer.
 * @param {Buffer} pdfBuffer - The PDF file data.
 * @returns {Promise<string>} - Extracted text content.
 */
const extractTextFromPDF = async (pdfBuffer) => {
    try {
        const data = await pdfParse(pdfBuffer);
        return data.text;
    } catch (error) {
        console.error("Error extracting text from PDF:", error);
        throw new Error("Failed to extract text from PDF");
    }
};

module.exports = { extractTextFromPDF };
