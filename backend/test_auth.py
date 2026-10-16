import jwt

from core.config import ALGORITHM, SECRET_KEY
from services.auth_service import create_access_token

token = create_access_token(
    user_id=1,
    role="student",
)

payload = jwt.decode(
    token,
    SECRET_KEY,
    algorithms=[ALGORITHM],
)

assert payload["sub"] == "1"
assert payload["role"] == "student"
assert "exp" in payload

print("JWT creation and verification successful!")