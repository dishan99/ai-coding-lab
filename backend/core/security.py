
from typing import Annotated

import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jwt.exceptions import InvalidTokenError
from sqlalchemy.orm import Session

from core.config import ALGORITHM, SECRET_KEY
from database.dependencies import get_db
from models.user import User

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/api/auth/login"
)


def get_current_user(
    token: Annotated[str, Depends(oauth2_scheme)],
    db: Annotated[Session, Depends(get_db)],
) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM],
        )

        subject = payload.get("sub")

        if not isinstance(subject, str) or not subject.isdigit():
            raise credentials_exception

        user_id = int(subject)

    except InvalidTokenError as error:
        raise credentials_exception from error

    user = db.get(User, user_id)

    if user is None or not user.is_active:
        raise credentials_exception

    return user
