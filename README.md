# AI Legal/Citizen Complaint Management System

An intelligent platform where citizens can submit complaints in multiple formats (text, voice, image) and track their resolution through automated AI classification, routing, and prioritization.

## 🎯 Key Features

1. **Multi-format Complaint Submission**
   - Text input
   - Voice complaints (speech-to-text)
   - Image/document evidence upload
   - Location tagging

2. **AI-Powered Classification**
   - Automatic complaint categorization
   - Priority detection (Emergency, High, Normal, Low)
   - Duplicate detection
   - Sentiment analysis

3. **Intelligent Routing**
   - Automatic department assignment
   - Location-based routing
   - Officer load balancing

4. **Real-time Tracking**
   - Complaint ID & status
   - Timeline: Submitted → Assigned → Under Review → Resolved
   - Citizen notifications

5. **Officer Dashboard**
   - Pending complaints queue
   - Priority-based filtering
   - Location-wise view
   - Performance metrics
   - SLA tracking

6. **Escalation System**
   - Auto-escalation if SLA breached
   - Hierarchical routing

7. **Multilingual Support**
   - English, Hindi, Telugu, Tamil, Kannada

## 🛠 Tech Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Tailwind CSS
- Google Maps API
- React Voice Recorder

### Backend
- Node.js + Express.js
- Python FastAPI (AI/NLP microservice)
- PostgreSQL
- Redis
- JWT + OTP authentication

### AI/ML
- Hugging Face Transformers
- spaCy for NLP
- OpenAI/Google Cloud NLP API

### DevOps
- Docker
- Docker Compose
- CI/CD pipeline ready

## 📁 Project Structure

```
AI-Legal-Complaint-Management/
├── frontend/                 # React application
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API calls
│   │   ├── redux/           # State management
│   │   └── App.jsx
│   ├── package.json
│   └── Dockerfile
├── backend/                  # Express API
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Route handlers
│   │   ├── models/          # Database models
│   │   ├── middleware/      # Custom middleware
│   │   └── server.js
│   ├── package.json
│   └── Dockerfile
├── ai-service/              # Python NLP service
│   ├── app.py
│   ├── models/              # ML models
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml       # Multi-container setup
├── .env.example
└── docs/                    # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- Python 3.8+
- Docker & Docker Compose
- PostgreSQL 12+

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/tejapuli122-boop/AI-Legal-Complaint-Management.git
cd AI-Legal-Complaint-Management
```

2. **Setup with Docker Compose**
```bash
docker-compose up -d
```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin Dashboard: http://localhost:3000/admin

## 📖 Documentation

- [Setup Guide](docs/SETUP.md)
- [API Documentation](docs/API.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Database Schema](docs/DATABASE.md)

## 👥 Team

Built for Smart India Hackathon 2024

## 📄 License

MIT License