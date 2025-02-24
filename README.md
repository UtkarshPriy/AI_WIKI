# AI Knowledge Search

## 📌 Overview
AI Knowledge Search is a document-based AI-powered search system that allows users to upload PDFs and CHM files, extract their content, and perform intelligent searches using OpenAI embeddings and FAISS vector search.

## 🚀 Features
- **Upload and Process Documents**: Supports PDF and CHM file formats.
- **AI-Powered Search**: Uses OpenAI embeddings to find relevant document content.
- **Vector Search with FAISS**: Efficient retrieval of similar document segments.
- **JWT Authentication**: Secure access to API routes.
- **Docker Support**: Easily deployable with Docker.
- **MongoDB Integration**: Stores document embeddings and metadata.

## 📂 Folder Structure
```
AI_WIKI/
│── config/
│   ├── db.js         # MongoDB connection
│   ├── auth.js       # JWT authentication middleware
│   ├── openai.js     # OpenAI API helper
│── routes/
│   ├── upload.js     # Upload and process documents
│   ├── query.js      # AI-powered search query endpoint
│── utils/
│   ├── faiss.js      # FAISS vector search
│   ├── pdfParser.js  # PDF text extraction
│── server.js         # Main Express server
│── Dockerfile        # Docker configuration
│── package.json      # Project dependencies
│── .env              # Environment variables
```

## ⚙️ Installation & Setup
### Prerequisites
- Node.js (v18+)
- MongoDB
- Docker (optional for containerized deployment)

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
Create a `.env` file in the root directory and add:
```
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
OPENAI_API_KEY=<your-openai-api-key>
```

### 4️⃣ Start the Server
```sh
npm start
```
The server runs on `http://localhost:3000`

## 🐳 Deploy with Docker
### 1️⃣ Build the Docker Image
```sh
docker build -t ai-knowledge-search .
```
### 2️⃣ Run the Docker Container
```sh
docker run -p 3000:3000 --env-file .env ai-knowledge-search
```

## 📡 API Endpoints
### 🔹 Upload a Document
**POST** `/upload`
```sh
curl -X POST -F "document=@sample.pdf" http://localhost:3000/upload
```

### 🔹 Query AI Search
**POST** `/query`
```sh
curl -X POST -H "Content-Type: application/json" -d '{"question":"What is the summary?"}' http://localhost:3000/query
```

## 🛠 Future Enhancements
- Support for additional document formats
- Enhanced AI summarization and ranking
- Web-based UI for document management

## 📜 License
This project is licensed under the MIT License.

### 📬 Contact
For any queries or contributions, feel free to open an issue in the repository:
[GitHub: AI_WIKI](https://github.com/UtkarshPriy/AI_WIKI)

