from fastapi import FastAPI

app = FastAPI(title="SubscriptIQ API")

@app.get("/")
def read_root():
    return {"status": "online", "message": "Welcome to the SubscriptIQ API"}