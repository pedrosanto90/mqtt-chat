'use client';

import { useState, useEffect } from "react";
import MqttPublisher from "@/lib/mqttPub";
import MqttSubscriber from "@/lib/mqttSub";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState<string | null>(null);
  const messages = MqttSubscriber('msg/mqtt/chat');

  useEffect(() => {
    const cookie = document.cookie;
    const cookieMap = Object.fromEntries(
      cookie.split("; ").map(c => c.split("="))
    );
    setUsername(cookieMap.username || null);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "" || !username) return;

    MqttPublisher(message, 'msg/mqtt/chat', username);
    setMessage("");
  };

  return (
    <div className="mr-2 flex flex-col flex-1 overflow-hidden">
      <div className="border-2 border-blue-500 rounded-xl flex-1 overflow-y-auto p-4 bg-white">
        <div className="mb-2">
          {messages.map((msg, idx) => (
            <div key={idx} className='text-black-500'>
              <strong>{msg.user}:</strong> {msg.msg}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-white flex">
        <form onSubmit={handleSubmit} className="flex w-full">
          <input
            type="text"
            placeholder="Say something..."
            className="w-full p-2 rounded border-blue-500 border-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 pl-10 pr-10 ml-10 rounded-xl text-white hover:bg-blue-600"
            disabled={!username}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
