from pydantic import BaseModel, ConfigDict


class UserProfileResponse(BaseModel):
    id: int
    user_id: int
    full_name: str | None = None
    phone: str | None = None
    address: str | None = None

    model_config = ConfigDict(from_attributes=True)