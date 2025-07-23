from fastapi import APIRouter, UploadFile, File, HTTPException
import pandas as pd
from app.database import get_db, init_db
from app.models.data_model import DataRecord
from app.services.openai_summary import summarize_data

router = APIRouter()

init_db()

@router.post("/upload")
async def upload_excel(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        df = pd.read_excel(contents)
        db = get_db()
        for _, row in df.iterrows():
            record = DataRecord(timestamp=row["timestamp"], metric=row["metric"], value=row["value"])
            db.add(record)
        db.commit()
        return {"message": "Data uploaded successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/records")
def get_records():
    db = get_db()
    return db.query(DataRecord).all()

@router.post("/ai-summary")
def ai_summary():
    db = get_db()
    records = db.query(DataRecord).all()
    data_str = "\n".join([f"{r.timestamp} - {r.metric}: {r.value}" for r in records])
    return {"summary": summarize_data(data_str)}
