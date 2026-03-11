import { NextRequest, NextResponse } from "next/server";
import type { ChatRequest, ChatResponse } from "@/types/chat";
import { queryRAG } from "@/lib/rag";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatRequest;

    if (!body.query?.trim()) {
      return NextResponse.json({ error: "query is required" }, { status: 400 });
    }

    // TODO: Swap queryRAG for your actual RAG backend when ready.
    // For local dev without a backend, comment out queryRAG and return a mock response.
    const data: ChatResponse = await queryRAG(body);

    return NextResponse.json(data);
  } catch (err) {
    console.error("[/api/chat]", err);
    return NextResponse.json(
      { error: "Failed to get response from RAG backend." },
      { status: 500 }
    );
  }
}
