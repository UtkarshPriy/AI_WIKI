const express = require("express");
const fileUpload = require("express-fileupload");
const extractChmContent = require("../utils/chmParser");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

router.post("/upload", async (req, res) => {
    try {
        if (!req.files || !req.files.file) {
            return res.status(400).json({ error: "No file uploaded." });
        }

        const file = req.files.file;
        const filePath = path.join(uploadDir, file.name);
        await file.mv(filePath);

        let extractedText = "";

        if (file.name.endsWith(".pdf")) {
            const pdfParse = require("pdf-parse");
            const pdfData = await pdfParse(fs.readFileSync(filePath));
            extractedText = pdfData.text;
        } else if (file.name.endsWith(".chm")) {
            const outputDir = path.join(uploadDir, "chm_extracted");
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
            }
            extractedText = await extractChmContent(filePath, outputDir);
        } else {
            return res.status(400).json({ error: "Unsupported file format." });
        }

        res.json({ message: "File processed successfully", content: extractedText });
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ error: "Error processing file." });
    }
});

module.exports = router;
