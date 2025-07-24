# OpenAI_reporter_tool
# 🤖 OpenAI Report Tool

This is a full-stack AI-powered web app that shows how to turn raw telemetry data (like sensor values from robots or machines) into real-time dashboard reports and natural language summaries using OpenAI.

It is designed for companies that work with machines, robots, or SCADA systems — like ABB — where real-time monitoring and reporting are important.

---

## 🔧 Features

✅ Upload telemetry data via Excel  
✅ View and edit records in a dashboard  
✅ Summarize the data using GPT-3.5  
✅ Auto fallback to dummy summary if API quota is used  
✅ Built using modern microservices design (Angular + FastAPI)

---

## 💡 Use Case for PLC data

This tool shows how we can:
- Read and store telemetry data (from SCADA, PLC, or logs)
- Generate reports automatically for operators, engineers, or managers
- Use AI to give human-readable summaries
- Handle real-time updates and REST APIs

It can be extended with real-time streams like Kafka or MQTT if needed.

---

## 🖥️ Tech Stack

| Layer         | Technology        |
|---------------|-------------------|
| Frontend      | Angular 17        |
| Backend       | Python + FastAPI  |
| AI Model      | OpenAI GPT-3.5    |
| Database      | SQLite (demo)     |
| Architecture  | REST API + Microservices |
| Hosting       | GitHub Codespace  |

---

## 🚀 How It Works

1. Upload an Excel file with 3 columns: `timestamp`, `metric`, `value`
2. Data is saved into SQLite via FastAPI
3. Dashboard loads and displays records
4. Press **Generate Summary** to get AI-written explanation
5. If OpenAI API fails (e.g. quota), a fallback summary is shown

---

## 📁 Example Excel Format

| timestamp          | metric      | value |
|--------------------|-------------|-------|
| 2025-07-24 10:00   | temperature | 36.5  |
| 2025-07-24 10:01   | vibration   | 0.002 |

---

## 🧪 Demo & Development Notes

This app was built in a modular and testable way:

- Frontend and backend can run independently
- CORS is enabled for secure API access
- Can be extended with real-time streams and alerts

> Note: OpenAI GPT may return fallback response if free quota is reached.

---

## 📄 File Structure (Simplified)
OpenAI_report_tool/
├── frontend/ # Angular app
│ └── src/app/ # Components (Upload, Dashboard, GPT Summary)
├── backend/ # FastAPI app
│ └── app/main.py # API routes and logic
├── .env # OpenAI API key
└── README.md
