import type { ChatRequest, ChatResponse } from "@/types/chat";

// TODO: Replace with your RAG backend URL
const RAG_BACKEND_URL = process.env.RAG_BACKEND_URL ?? "http://localhost:8000";

/**
 * Sends a chat request to the RAG backend.
 * Replace this implementation with your actual RAG pipeline call.
 */
export async function queryRAG(request: ChatRequest): Promise<ChatResponse> {
  const res = await fetch(`${RAG_BACKEND_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    throw new Error(`RAG backend error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<ChatResponse>;
}
