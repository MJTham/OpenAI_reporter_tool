import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def summarize_data(data: str) -> str:
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a data analyst for robotics diagnostics."},
            {"role": "user", "content": f"Summarize the following data:\n{data}"}
        ]
    )
    return response.choices[0].message["content"]
