import os

from openai import OpenAI


def run_agent(prompt: str) -> str:
    """Execute an AI agent prompt using OpenAI Responses API-compatible chat completions."""
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY", "YOUR_API_KEY"))
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
    )
    return response.choices[0].message.content or ""
