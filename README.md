# AI Confluence Search

AI Knowledge Search is a document-based AI-powered search engine that enables users to upload documents (PDFs/CHMs), extract their content, and query them using OpenAI's API for intelligent answers.

## Features
- Upload PDF and CHM files.
- Extract text and store embeddings.
- Query documents with AI-powered responses.
- Vector search using FAISS.
- JWT authentication for secure access.

## Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/UtkarshPriy/AI_WIKI.git
cd AI_WIKI
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and configure the following:
```env
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the Application
```sh
node server.js
```
Server will start on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user.
- `POST /auth/login` - Authenticate and get a JWT token.

### File Upload
- `POST /upload` - Upload and process a PDF or CHM file.

### Query AI
- `POST /query` - Query uploaded documents using AI.

## Deploy with Docker

### 1️⃣ Build the Docker Image
```sh
docker build -t ai-knowledge-search .
```

### 2️⃣ Run the Docker Container
```sh
docker run -p 3000:3000 --env-file .env ai-knowledge-search
```

## Project Structure
```
AI_WIKI/
│-- config/
│   ├── db.js         # MongoDB connection
│   ├── auth.js       # JWT authentication middleware
│   ├── openai.js     # OpenAI API helper
│-- routes/
│   ├── upload.js     # Handles file uploads
│   ├── query.js      # Handles AI queries
│   ├── auth.js       # Authentication routes
│-- utils/
│   ├── faiss.js      # FAISS vector search
│   ├── pdfParser.js  # PDF text extraction
│   ├── chmParser.js  # CHM file extraction using unzipper
│-- server.js         # Main Express server
│-- Dockerfile        # Docker setup
│-- package.json      # Node.js dependencies
│-- README.md         # Project documentation
```

## CHM Extraction
CHM files are extracted using the `unzipper` package. The extracted content is read from `.htm`, `.html`, and `.txt` files within the CHM archive to provide relevant text data.

## Contributing
Feel free to fork this repository and contribute via pull requests.

## License
This project is licensed under the MIT License.

## Contact
For any issues or questions, reach out via [GitHub](https://github.com/UtkarshPriy/AI_WIKI).

