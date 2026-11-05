
from sqlalchemy import text
from database import engine

try:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        print("Database berhasil terhubung!")
        print("Hasil:", result.fetchone())

except Exception as e:
    print("Koneksi database gagal!")
    print(e)
