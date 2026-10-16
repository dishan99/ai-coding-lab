import os

from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
SECRET_KEY = os.getenv("SECRET_KEY")

if not DATABASE_URL:
    raise RuntimeError(
        "DATABASE_URL environment variable is not configured"
    )

if not SECRET_KEY:
    raise RuntimeError(
        "SECRET_KEY environment variable is not configured"
    )

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30