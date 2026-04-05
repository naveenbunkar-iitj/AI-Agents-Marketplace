# AI Agents Marketplace

A starter monorepo for an AI Agents Marketplace with:

- **Frontend**: Next.js (`frontend/`)
- **Backend**: FastAPI (`backend/`)
- **AI Engine**: OpenAI-powered agent runner (`ai-engine/`)

## Project Structure

```text
ai-agents-marketplace/
├── frontend/
├── backend/
├── ai-engine/
├── README.md
└── docker-compose.yml
```

## Backend Quickstart

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

API root: `http://localhost:8000/`

## Frontend Quickstart

```bash
cd frontend
npm install
npm run dev
```

App URL: `http://localhost:3000/`

## AI Engine

Set an API key and run `run_agent(prompt)` from `ai-engine/agent_runner.py`:

```bash
export OPENAI_API_KEY="your_key_here"
```

## Docker Compose

```bash
docker compose up
```
