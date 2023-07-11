# Logger

Logger is a logging library for handling log messages and notifying logger targets.

## Features

- Logging messages to multiple targets
- Customizable logger targets
- Flexible payload structure

## Installation

`npm install @isacrodriguesdev/logger`

## Usage

1. Import the necessary classes and interfaces from the `@isacrodriguesdev/logger` package:

```typescript
import { Logger, ILogger } from "@isacrodriguesdev/logger";
```

2. Create a class that implements the `ILogger.Observer` interface to define a logger target. For example, here's an implementation using Kafka as the target:

```typescript
class KafkaLog implements ILogger.Observer {
  private kafka: any; // Import the correct Kafka library here

  constructor() {
    // Initialize the connection to Kafka
    this.kafka = /* Initialize the connection to Kafka */;
  }

  update(data: ILogger.Payload): void {
    // Send the log message to the Kafka queue
    this.kafka.sendMessage(data);
  }
}
```

3. Create an instance of the `Logger` class and register your logger targets:

```typescript
// Create an instance of the Logger class
const logger = new Logger();

// Create instances of the logger targets you want to use
const consoleLog = new ConsoleLog(); // Example using ConsoleLog
const kafkaLog = new KafkaLog(); // Example using KafkaLog

// Attach the logger observers in the Logger instance
logger.attach("console", consoleLog);
logger.attach("kafka", kafkaLog);
```

4. Use the `notify` method to send log messages to the registered logger targets:

```typescript
// Create an example log payload
const payload = {
  level: "event",
  message: "New event created",
  additionalInfo: {
    event: "Birthday Party",
    date: "2023-07-20",
    location: "City Park",
  },
  timestamp: Date.now(),
};

// Notify the logger to send the payload to the registered logger targets
logger.notify(["console", "kafka"], payload);
```

## Note

The `ConsoleLog` target is included by default and does not need to be explicitly registered. You can simply call `logger.notify(["console"]`, payload) to log messages to the console.

## Screenshots

![App Screenshot](/example/console-log.png)

## API

### Logger Class

#### `constructor()`

Creates a new instance of the Logger class.

#### `notify(types: string[], payload: ILogger.Payload): void`

Notifies the specified logger targets with the log data.

- `types`: An array of target types to notify.
- `payload`: The log data object with the following properties:
  - `level`: The log level, e.g., `'error'`, `'info'`, `'debug'`.
  - `message`: The log message.
  - `additionalInfo` (optional): Additional information to include in the log.

#### `attach(type: string, observer: ILogger.Observer): void`

Registers a logger target with the specified type.

- `type`: The type name for the logger target.
- `observer`: An instance of a logger target implementation.

### ILogger Interface

```typescript
export declare abstract class ILogger {
  public abstract notify(types: string[], payload: ILogger.Payload): void;
  public abstract attach(type: string, observer: ILogger.Observer): void;
}
```
