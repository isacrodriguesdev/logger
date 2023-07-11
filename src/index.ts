import { ConsoleLog } from "./loggers/console-log";
import { ILogger } from "./types";

export { ILogger };

export class Logger implements ILogger {
  private static observers: Map<string, ILogger.Observer> = new Map([["console", new ConsoleLog()]]);

  notify(types: string[], payload: ILogger.Payload): void {
    for (const type of types) {
      const logger = Logger.observers.get(type);
      if (logger) {
        logger.update(payload);
      }
    }
  }

  attach(type: string, observer: ILogger.Observer): void {
    if (!Logger.observers.has(type)) {
      Logger.observers.set(type, observer);
    }
  }
}