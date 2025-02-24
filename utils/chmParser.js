const unzipper = require("unzipper");
const fs = require("fs");
const path = require("path");

/**
 * Extracts content from a CHM file.
 * @param {string} chmFilePath - Path to the CHM file.
 * @param {string} outputDir - Directory where extracted files will be stored.
 * @returns {Promise<string>} - Extracted text content.
 */
const extractChmContent = async (chmFilePath, outputDir) => {
    return new Promise((resolve, reject) => {
        fs.createReadStream(chmFilePath)
            .pipe(unzipper.Extract({ path: outputDir }))
            .on("close", async () => {
                try {
                    // Read extracted files and combine text
                    const extractedFiles = fs.readdirSync(outputDir);
                    let content = "";

                    for (const file of extractedFiles) {
                        const filePath = path.join(outputDir, file);
                        if (file.endsWith(".htm") || file.endsWith(".html") || file.endsWith(".txt")) {
                            content += fs.readFileSync(filePath, "utf-8") + "\n";
                        }
                    }

                    resolve(content);
                } catch (error) {
                    reject(error);
                }
            })
            .on("error", (err) => reject(err));
    });
};

module.exports = extractChmContent;
