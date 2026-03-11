import type { Message } from "@/types/chat";

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words ${
          isUser
            ? "bg-blue-600 text-white rounded-br-sm"
            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-sm"
        }`}
      >
        {message.content}
      </div>

      {message.sources && message.sources.length > 0 && (
        <div className="max-w-[75%] flex flex-col gap-1.5 mt-1">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Sources</p>
          {message.sources.map((source) => (
            <div
              key={source.id}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-xs text-gray-700 dark:text-gray-300"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-medium truncate">{source.title}</span>
                {source.score !== undefined && (
                  <span className="shrink-0 text-gray-400">
                    {(source.score * 100).toFixed(0)}%
                  </span>
                )}
              </div>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-2">{source.content}</p>
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-blue-500 hover:underline truncate max-w-full"
                >
                  {source.url}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      <time className="text-[11px] text-gray-400 dark:text-gray-500">
        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </time>
    </div>
  );
}
