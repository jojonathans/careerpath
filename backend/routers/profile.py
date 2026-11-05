from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models.user_profile import UserProfile
from schemas.user_profile import UserProfileResponse

router = APIRouter(
    prefix="/users",
    tags=["Profile"]
)


@router.get("/{user_id}/profile", response_model=UserProfileResponse)
def get_user_profile(
    user_id: int,
    db: Session = Depends(get_db)
):
    profile = db.query(UserProfile).filter(
        UserProfile.user_id == user_id
    ).first()

    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Profile tidak ditemukan"
        )

    return profile