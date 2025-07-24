from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import sqlite3
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

# ✅ FIXED: create OpenAI client with correct env variable name
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI()

# ✅ Keep CORS config as-is
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://glorious-memory-4q66655669r3qr59-4200.app.github.dev"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.post("/upload")
async def upload_excel(file: UploadFile = File(...)):
    df = pd.read_excel(file.file)
    conn = sqlite3.connect("data.db")
    df.to_sql("records", conn, if_exists="replace", index=False)
    conn.close()
    return {"message": "Upload successful"}

@app.get("/records")
async def get_records():
    conn = sqlite3.connect("data.db")
    df = pd.read_sql_query("SELECT * FROM records", conn)
    conn.close()
    return df.to_dict(orient="records")

@app.post("/ai-summary")
async def ai_summary():
    try:
        conn = sqlite3.connect("data.db")
        df = pd.read_sql_query("SELECT * FROM records", conn)
        conn.close()

        if df.empty:
            return {"summary": "No data available.", "source": "none"}

        text = "\n".join(f"{row['timestamp']} - {row['metric']} = {row['value']}" for _, row in df.iterrows())

        # Try calling OpenAI
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Summarize this telemetry data for an engineering report."},
                {"role": "user", "content": text}
            ]
        )

        return {"summary": response.choices[0].message.content, "source": "openai"}

    except Exception as e:
        # If OpenAI fails (e.g. quota limit), fallback to dummy summary
        try:
            conn = sqlite3.connect("data.db")
            df = pd.read_sql_query("SELECT * FROM records", conn)
            conn.close()

            fallback_summary = f"Simulated summary: {len(df)} data points analyzed. Metrics include: " \
                               + ", ".join(df['metric'].unique()) + "."
            return {"summary": fallback_summary, "source": "fallback"}
        except Exception as fallback_error:
            return {"error": f"Both OpenAI and fallback failed: {str(fallback_error)}"}


