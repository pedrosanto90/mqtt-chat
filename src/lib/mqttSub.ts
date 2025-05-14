"use client";

import mqtt from "mqtt";
import { useEffect, useState } from "react";

export default function MqttSubscriber(topic: string) {
  const [messages, setMessages] = useState<string[]>([]);

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
        setMessages((prev) => [...prev, message.toString()]);
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
