"use client";

import { useEffect, useState } from "react";
import mqtt from "mqtt";

type Message = {
  user: string;
  msg: string;
  topic: string;
};

export default function MqttSubscriber(topic: string) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const client = mqtt.connect(
      "wss://499e3d6190964955aa2cc4710183ebe4.s1.eu.hivemq.cloud:8884/mqtt",
      {
        username: "hivemq.webclient.1746625747972",
        password: ".5,><981JLEIxAuvDtfw",
      },
    );

    client.on("connect", () => {
      client.subscribe(topic, (err) => {
        if (err) {
          console.error("Subscription error:", err);
        } else {
          console.log(`Subscribed to topic: ${topic}`);
        }
      });
    });

    client.on("message", (receivedTopic, message) => {
      if (receivedTopic === topic) {
        try {
          const parsedMessage: Message = JSON.parse(message.toString());
          setMessages((prev) => [...prev, parsedMessage]);
        } catch (error) {
          console.error("Erro ao parsear mensagem JSON:", error);
        }
      }
    });

    client.on("error", (err) => {
      console.error("MQTT error:", err);
    });

    return () => {
      client.end();
    };
  }, [topic]);

  return messages;
}
