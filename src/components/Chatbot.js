"use client";
import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { 
      sender: "Bot", 
      text: "Hello! I’m Lloyd’s portfolio assistant 🤖. I can answer questions about his skills, projects, and experiences." 
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "What projects has he worked on?",
    "What are his technical skills?",
    "When will he graduate?"
  ]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  async function sendMessage(messageText = input) {
    if (!messageText.trim() || isLoading) return;

    const userMessage = { sender: "You", text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowSuggestions(false); // Hide suggestions after first use

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();
      const botMessage = { sender: "Bot", text: data.reply };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "Bot", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    sendMessage(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const parseMarkdown = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italic
  };

  return (
    <div className="p-3 max-w-lg mx-auto border rounded-xl shadow-lg bg-light border-dark/20">
      <div className="h-64 overflow-y-auto border p-2 mb-2 rounded bg-light/50 border-dark/10 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-xs ${
                msg.sender === "You"
                  ? "bg-primary text-light"
                  : "bg-light/80 text-dark"
              }`}
            >
              <span dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.text) }} />
              
              {/* Sample Prompts - show only for first bot message */}
              {msg.sender === "Bot" && i === 0 && showSuggestions && (
                <div className="mt-3 pt-3 border-t border-dark/10">

                  <div className="flex flex-wrap gap-1">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-2 py-1 text-xs bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded transition-colors"
                        disabled={isLoading}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-xs px-3 py-2 rounded-lg bg-light/80 text-dark text-xs">
              Typing...
            </div>
          </div>
        )}
      </div>
      
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border p-1 rounded text-xs focus:outline-none focus:ring-2 focus:ring-primary bg-light text-dark border-dark/20 placeholder-dark/50"
          placeholder="Ask me about my projects..."
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          className="px-2 py-1 bg-primary text-light rounded hover:bg-primary/80 disabled:bg-dark/50 transition-colors flex items-center justify-center"
        >
          {isLoading ? (
            "..."
          ) : (
            <img
              src="/images/icons/send.png"
              alt="Send"
              className="w-4 h-4 brightness-0 invert"
            />
          )}
        </button>
      </div>
    </div>
  );
}
