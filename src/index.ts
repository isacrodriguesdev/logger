import { ConsoleLog } from "./loggers/console-log";
import { ILogger, ILoggerTarget } from "./types";

export { ConsoleLog, ILogger, ILoggerTarget };

export class Logger implements ILogger {
  private loggerTarget: Map<string, ILoggerTarget> = new Map([["console", new ConsoleLog()]]);

  notify(targets: string[], data: ILogger.Payload): void {
    for (const target of targets) {
      const logger = this.loggerTarget.get(target);
      if (logger) {
        logger.notify(data);
      }
    }
  }

  register(type: string, logger: ILoggerTarget): void {
    if (!this.loggerTarget.has(type)) {
      this.loggerTarget.set(type, logger);
    }
  }
}

export const logger = new Logger();

class KafkaLog implements ILoggerTarget {
  notify(data: ILogger.Payload): void {
    console.log("KafkaLog", data);
  }
}

logger.register("kafka", new KafkaLog());

logger.notify(["console", "kafka"], {
  level: "info",
  message: "Hello World",
});
