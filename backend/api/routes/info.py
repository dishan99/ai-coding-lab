from fastapi import APIRouter

from schemas.info import APIInfo
from services.info_service import get_api_info


router = APIRouter(
    prefix="/api/info",
    tags=["Info"],
)


@router.get("", response_model=APIInfo)
def api_info():
    return get_api_info()