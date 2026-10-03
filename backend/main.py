from fastapi import FastAPI

app = FastAPI(
    title="AI Coding Lab API",
    description="Backend API for the AI Coding Lab",
    version="0.1.0",
)


@app.get("/")
def root():
    return {
        "message": "AI Coding Lab API is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.get("/api/info")
def get_info():
    return {
        "name": "AI Coding Lab",
        "version": "0.1.0",
        "status": "development"
    }