from typing import List

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/users", tags=["users"])


class User(BaseModel):
    id: int
    username: str


fake_users: List[User] = []


@router.get("/", response_model=List[User])
def get_users():
    return fake_users
