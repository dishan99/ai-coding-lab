from datetime import datetime, timedelta, timezone
from pwdlib import PasswordHash
from sqlalchemy import select
from sqlalchemy.orm import Session

from models.user import User

password_hash = PasswordHash.recommended()

import jwt

from core.config import (
    ACCESS_TOKEN_EXPIRE_MINUTES,
    ALGORITHM,
    SECRET_KEY,
)


def create_access_token(user_id: int, role: str) -> str:
    expires_at = datetime.now(timezone.utc) + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    payload = {
        "sub": str(user_id),
        "role": role,
        "exp": expires_at,
    }

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM,
    )


def authenticate_user(
    db: Session,
    email: str,
    password: str,
) -> User | None:
    user = db.scalar(
        select(User).where(User.email == email)
    )

    if user is None:
        return None

    if not password_hash.verify(
        password,
        user.hashed_password,
    ):
        return None

    if not user.is_active:
        return None

    return user
