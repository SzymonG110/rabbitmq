import { connect } from "amqplib";

export const CONNECTION_STRING = "amqp://127.0.0.1:5672";

export const QUEUE = "test_queue";

const createClient = async () => {
  const connection = await connect(CONNECTION_STRING);
  return connection;
};

export const client = await createClient();

const createChannel = async () => {
  const channel = await client.createChannel();
  return channel;
};

export const channel = await createChannel();
