from typing import List

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/agents", tags=["agents"])


class Agent(BaseModel):
    id: int
    name: str
    description: str


fake_db: List[Agent] = []


@router.get("/", response_model=List[Agent])
def get_agents():
    return fake_db


@router.post("/", response_model=dict)
def create_agent(agent: Agent):
    fake_db.append(agent)
    return {"msg": "Agent added"}
