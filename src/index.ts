import { channel, CONNECTION_STRING, QUEUE } from "./rabbitmq.js";

console.log(`[CLIENT] Connecting to AMQP: ${CONNECTION_STRING}`);

(async () => {
  await channel.assertQueue(QUEUE, { durable: false });
  channel.consume(QUEUE, (msg) => {
    if (msg !== null) {
      const content = JSON.parse(msg.content.toString());
      console.log("Test event received");
      console.log(content);
      channel.ack(msg);
    }
  });
})();
