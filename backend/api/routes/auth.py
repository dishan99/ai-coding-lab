
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database.dependencies import get_db
from schemas.user import TokenResponse, UserLogin
from services.auth_service import (
    authenticate_user,
    create_access_token,
)

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)


@router.post("/login", response_model=TokenResponse)
def login(
    credentials: UserLogin,
    db: Session = Depends(get_db),
):
    user = authenticate_user(
        db,
        str(credentials.email),
        credentials.password,
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token = create_access_token(
        user_id=user.id,
        role=user.role,
    )

    return TokenResponse(access_token=token)
