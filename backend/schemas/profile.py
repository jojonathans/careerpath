from pydantic import BaseModel, ConfigDict


class ProfileResponse(BaseModel):
    id: int
    user_id: int
    first_name: str     | None = None
    last_name: str      | None = None
    phone: str          | None = None
    address: str        | None = None
    bio : str           | None = None
    link_fb : str       | None = None
    link_x : str        | None = None
    link_linkedin : str | None = None
    link_ig : str       | None = None
    link_github : str   | None = None


    model_config = ConfigDict(from_attributes=True)

class ProfileCreate(BaseModel):
    user_id: int
    first_name: str     | None = None
    last_name: str      | None = None
    phone: str          | None = None
    address: str        | None = None
    bio : str           | None = None
    link_fb : str       | None = None
    link_x : str        | None = None
    link_linkedin : str | None = None
    link_ig : str       | None = None
    link_github : str   | None = None

class ProfileUpdate(BaseModel):
    user_id: int
    first_name: str     | None = None
    last_name: str      | None = None
    phone: str          | None = None
    address: str        | None = None
    bio : str           | None = None
    link_fb : str       | None = None
    link_x : str        | None = None
    link_linkedin : str | None = None
    link_ig : str       | None = None
    link_github : str   | None = None

class ProfileMessageResponse(BaseModel):
    status : int
    message: str