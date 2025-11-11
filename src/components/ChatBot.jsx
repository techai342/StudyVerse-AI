import React, { useState } from "react";
import { fetchAIResponse } from "../utils/api";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question) return;
    setLoading(true);
    const response = await fetchAIResponse(question);
    setAnswer(response);
    setLoading(false);
    setQuestion("");
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      <h3 className="font-bold text-lg">AI ChatBot</h3>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask me anything..."
        className="w-full p-2 border rounded"
      />

      <button
        onClick={handleAsk}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ask
      </button>

      {loading && <p className="text-gray-500">AI is thinking...</p>}

      {answer && (
        <div className="bg-gray-100 p-3 rounded mt-2">
          <strong>AI:</strong> {answer}
        </div>
      )}
    </div>
  );
}

export default ChatBot;
