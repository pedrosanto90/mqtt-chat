import mqtt from "mqtt";

export default function MqttPublisher(msg: string, topic: string) {
  // const topic = "msg/mqtt/chat";

  const client = mqtt.connect(
    "wss://499e3d6190964955aa2cc4710183ebe4.s1.eu.hivemq.cloud:8884/mqtt",
    {
      username: "hivemq.webclient.1746625747972",
      password: ".5,><981JLEIxAuvDtfw",
    },
  );

  client.on("connect", () => {
    client.publish(topic, msg, {}, (err) => {
      if (err) {
        console.error("Publish error:", err);
      }
      client.end(); // Close connection after publish
    });
  });

  client.on("error", (err) => {
    console.error("Connection error:", err);
    client.end();
  });
}
