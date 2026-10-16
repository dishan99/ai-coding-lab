
from typing import Annotated

from fastapi import APIRouter, Depends

from core.security import get_current_user
from models.user import User
from schemas.user import UserResponse

router = APIRouter(
    prefix="/api/users",
    tags=["Users"],
)


@router.get("/me", response_model=UserResponse)
def get_my_profile(
    current_user: Annotated[User, Depends(get_current_user)],
):
    return current_user
