from fastapi import FastAPI
from routers import profile
from fastapi.middleware.cors import CORSMiddleware

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

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(profile.router)