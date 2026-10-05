from pydantic import BaseModel


class APIInfo(BaseModel):
    name: str
    version: str
    status: str