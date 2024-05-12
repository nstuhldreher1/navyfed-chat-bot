from flask import Flask
from flask import request
from openai import OpenAI
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()


app = Flask(__name__)
CORS(app)

EMBEDDING_MODEL = "text-embedding-ada-002"
GPT_MODEL = "gpt-3.5-turbo"

client = OpenAI(api_key= os.environ.get("OPENAI_API_KEY"))


@app.route("/test")
def test():
    return {"test": "Hello World"}

@app.post("/query")
def query():
    query = request.get_json()['question']
    
    
    response = client.chat.completions.create(
        messages=[
            {'role': 'system', 'content': 'You answer questions about Navy Federal Credit Union.'},
            {'role': 'user', 'content': query},
        ],
        model=GPT_MODEL,
        temperature=0,
    )
    
    return {"response": response.choices[0].message.content} 

if __name__ == "__main__":
    app.run(debug= True)