import { channel, CONNECTION_STRING, QUEUE } from "./rabbitmq.js";

const mode = process.argv[2] as "even" | "odd";

(async () => {
  await channel.assertQueue(QUEUE, { durable: false });

  let number = mode === "even" ? 0 : 1;

  setInterval(() => {
    const message = {
      number,
      timestamp: new Date(),
      type: mode,
    };

    channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(message)));
    console.log(`Sent ${mode} number: ${number}`);

    number += 2;
  }, 1000);
})();
