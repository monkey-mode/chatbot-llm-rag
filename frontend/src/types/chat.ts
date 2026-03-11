export type Role = "user" | "assistant";

export interface Source {
  id: string;
  title: string;
  content: string;
  url?: string;
  score?: number;
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  sources?: Source[];
  timestamp: Date;
}

export interface ChatRequest {
  messages: Pick<Message, "role" | "content">[];
  query: string;
}

export interface ChatResponse {
  message: string;
  sources?: Source[];
}
