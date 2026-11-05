from fastapi import FastAPI
from routers import profile

app = FastAPI(
    title="CareerPath API",
    description="Backend API for CareerPath",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "CareerPath API is running!"
    }


app.include_router(profile.router)