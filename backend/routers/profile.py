from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from database import get_db
from schemas.profile import (
    ProfileResponse,
    ProfileCreate,
    ProfileMessageResponse,
    ProfileUpdate
)

router = APIRouter(
    prefix="/users",
    tags=["Profile"]
)

@router.get("/profile/{user_id}", response_model=ProfileResponse)
def get_user_profile(
    user_id: int,
    db: Session = Depends(get_db)
):
    # sql = text ("select * from user_profiles;")
    sql = text("""
        SELECT
            coalesce(a.id, "" ) as id ,  
            coalesce(a.user_id, "" ) as user_id ,  
            coalesce(a.first_name, "" ) as first_name ,  
            coalesce(a.last_name, "" ) as last_name ,  
            coalesce(a.phone, "" ) as phone ,  
            coalesce(a.address, "" ) as address ,  
            coalesce(a.bio, "" ) as bio ,  
            coalesce(b.link_fb, "" ) as link_fb ,  
            coalesce(b.link_x, "" ) as link_x ,  
            coalesce(b.link_linkedin, "" ) as link_linkedin ,  
            coalesce(b.link_ig, "" ) as link_ig ,  
            coalesce(b.link_github , "" ) as link_github           
            FROM user_profiles a 
        left join user_social_links b on b.user_id = a.user_id
        WHERE a.user_id = :user_id
        LIMIT 1
    """)

    result = db.execute(sql,{"user_id": user_id} )
    # result = db.execute(sql)

    profile = result.mappings().first()
    
    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Profile tidak ditemukan"
        )

    return profile

@router.post("/profile")
def create_profile(
    profile: ProfileCreate,
    db: Session = Depends(get_db)
):
    try:
        sql_profile = text("""
            INSERT INTO user_profiles (
                user_id,
                first_name,
                last_name,
                phone,
                address,
                bio
            )
            VALUES (
                :user_id,
                :first_name,
                :last_name,
                :phone,
                :address,
                :bio
            ) ; 
        """)
        sql_social_links = text(""" 
            INSERT INTO user_social_links (
                user_id,
                link_fb,
                link_x,
                link_linkedin,
                link_ig,
                link_github

            )
            VALUES (
                :user_id,
                :link_fb,
                :link_x,
                :link_linkedin,
                :link_ig,
                :link_github
            );
        """)

        # Ambil data dari schema
        data = profile.model_dump()

         # Insert ke tabel pertama
        result_profile = db.execute(
            sql_profile,
            {
                "user_id": data["user_id"],
                "first_name": data["first_name"],
                "last_name": data["last_name"],
                "phone": data["phone"],
                "address": data["address"],
                "bio": data["bio"]
            }
        )
        # Insert ke tabel kedua
        result_social = db.execute(
            sql_social_links,
            {
                "user_id": data["user_id"],
                "link_fb": data["link_fb"],
                "link_x": data["link_x"],
                "link_linkedin": data["link_linkedin"],
                "link_ig": data["link_ig"],
                "link_github": data["link_github"]
            }
        )

        # Simpan kedua transaksi
        db.commit()

        return {
            "detail": {
                "status": 201,
                "message": "Data berhasil disimpan",
                "data": {
                    "profile_rows": result_profile.rowcount,
                    "social_rows": result_social.rowcount
                }
            }
        }

    except Exception as e:
        db.rollback()

        # print("ERROR POST PROFILE:", repr(e))

        raise HTTPException(
            status_code=500, # ini yang muncul di return api nya , bukan message
            detail={
                "status": 500,
                "message": "Gagal menyimpan data",
                "error": str(e)
            }
        )

@router.post("/profile/{user_id}")
def create_profile(
    profile: ProfileCreate,
    db: Session = Depends(get_db)
):
    try:
        sql_profile = text("""
            INSERT INTO user_profiles (
                user_id,
                first_name,
                last_name,
                phone,
                address,
                bio
            )
            VALUES (
                :user_id,
                :first_name,
                :last_name,
                :phone,
                :address,
                :bio
            ) ; 
        """)
        sql_social_links = text(""" 
            INSERT INTO user_social_links (
                user_id,
                link_fb,
                link_x,
                link_linkedin,
                link_ig,
                link_github

            )
            VALUES (
                :user_id,
                :link_fb,
                :link_x,
                :link_linkedin,
                :link_ig,
                :link_github
            );
        """)

        # Ambil data dari schema
        data = profile.model_dump()

         # Insert ke tabel pertama
        result_profile = db.execute(
            sql_profile,
            {
                "user_id": data["user_id"],
                "first_name": data["first_name"],
                "last_name": data["last_name"],
                "phone": data["phone"],
                "address": data["address"],
                "bio": data["bio"]
            }
        )
        # Insert ke tabel kedua
        result_social = db.execute(
            sql_social_links,
            {
                "user_id": data["user_id"],
                "link_fb": data["link_fb"],
                "link_x": data["link_x"],
                "link_linkedin": data["link_linkedin"],
                "link_ig": data["link_ig"],
                "link_github": data["link_github"]
            }
        )

        # Simpan kedua transaksi
        db.commit()

        return {
            "detail": {
                "status": 201,
                "message": "Data berhasil disimpan",
                "data": {
                    "profile_rows": result_profile.rowcount,
                    "social_rows": result_social.rowcount
                }
            }
        }

    except Exception as e:
        db.rollback()

        # print("ERROR POST PROFILE:", repr(e))

        raise HTTPException(
            status_code=500, # ini yang muncul di return api nya , bukan message
            detail={
                "status": 500,
                "message": "Gagal menyimpan data",
                "error": str(e)
            }
        )