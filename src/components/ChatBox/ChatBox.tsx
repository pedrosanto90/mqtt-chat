"use client";

import { useState } from "react";
import MqttPublisher from "@/lib/mqttPub";
import MqttSubscriber from "@/lib/mqttSub";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const messages = MqttSubscriber('msg/mqtt/chat')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;

    // Call the MQTT publisher
    MqttPublisher(message, 'msg/mqtt/chat');

    // Clear input after sending
    setMessage("");
  };

  return (
    <div className="mr-2 flex flex-col flex-1 overflow-hidden">
      {/* Message area */}
      <div className="border-2 border-blue-500 rounded-xl flex-1 overflow-y-auto p-4 bg-white">
        <div className="mb-2">
          {messages.map((msg, idx) => (
            <div key={idx} className='text-blue-500'>{msg}</div>
          ))}
        </div>
      </div>

      {/* Input */}
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
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
