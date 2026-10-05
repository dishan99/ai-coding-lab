from schemas.info import APIInfo


def get_api_info() -> APIInfo:
    return APIInfo(
        name="AI Coding Lab",
        version="0.1.0",
        status="development",
    )