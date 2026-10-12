
from pwdlib import PasswordHash
from sqlalchemy import select
from sqlalchemy.orm import Session

from models.user import User
from schemas.user import UserCreate

password_hash = PasswordHash.recommended()


def create_user(db: Session, user_data: UserCreate) -> User:
    existing_user = db.scalar(
        select(User).where(User.email == str(user_data.email))
    )

    if existing_user:
        raise ValueError("An account with this email already exists")

    user = User(
        full_name=user_data.full_name,
        email=str(user_data.email),
        hashed_password=password_hash.hash(user_data.password),
        role="student",
    )

    try:
        db.add(user)
        db.commit()
        db.refresh(user)
        return user
    except Exception:
        db.rollback()
        raise
