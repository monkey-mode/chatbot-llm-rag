import ChatWindow from "@/components/chat/ChatWindow";

export default function Home() {
  return (
    <main className="flex flex-col h-screen max-w-3xl mx-auto">
      <header className="shrink-0 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          Chatbot — LLM + RAG
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Retrieval-augmented responses with source citations
        </p>
      </header>
      <div className="flex-1 min-h-0">
        <ChatWindow />
      </div>
    </main>
  );
}
