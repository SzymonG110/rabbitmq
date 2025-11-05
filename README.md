# RabbitMQ TypeScript Project

A simple RabbitMQ message queue implementation using TypeScript and Bun runtime.

## Description

This project demonstrates a basic RabbitMQ pub/sub pattern where:
- **Worker** processes send messages (even/odd numbers) to a queue
- **Client** consumes and processes messages from the queue

## Prerequisites

- [Bun](https://bun.sh) runtime
- RabbitMQ server running locally on `amqp://127.0.0.1:5672`

## Installation

Install dependencies:

```bash
bun install
```

## Usage

### 1. Start the Client (Consumer)

Run the client to consume messages from the queue:

```bash
bun run dev
```

This will connect to RabbitMQ and listen for messages on the `test_queue` queue.

### 2. Send Messages (Producer)

Start the worker processes that send messages:

```bash
bun run send
```

This will spawn two worker processes:
- One sending even numbers (0, 2, 4, 6...)
- One sending odd numbers (1, 3, 5, 7...)

Each message is sent every second with the following structure:
```json
{
  "number": 0,
  "timestamp": "2024-01-01T12:00:00.000Z",
  "type": "even"
}
```

## Project Structure

```
src/
  ├── index.ts      # Client/Consumer - receives messages from queue
  ├── send.ts       # Spawns worker processes
  ├── worker.ts     # Worker/Producer - sends messages to queue
  └── rabbitmq.ts   # RabbitMQ connection configuration
```

## Configuration

RabbitMQ connection settings can be modified in `src/rabbitmq.ts`:

```typescript
export const CONNECTION_STRING = "amqp://127.0.0.1:5672";
export const QUEUE = "test_queue";
```

## Scripts

- `bun run dev` - Start the client/consumer
- `bun run send` - Start worker processes to send messages

## Dependencies

- `amqplib` - RabbitMQ client library for Node.js/Bun
