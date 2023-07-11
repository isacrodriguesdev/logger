export declare abstract class ILogger {
  public abstract notify(targets: string[], data: ILogger.Payload): void;
  public abstract notify<T>(targets: T[], data: ILogger.Payload): void;
  public abstract register(type: string, logger: ILoggerTarget): void;
}

export declare namespace ILogger {
  export type Payload = {
    level:
      | "error"
      | "warning"
      | "info"
      | "debug"
      | "success"
      | "announcement"
      | "critical"
      | "system"
      | "security"
      | "database"
      | "audit"
      | "performance"
      | "access"
      | "event"
      | "request"
      | "response"
      | "validation";
    message: string;
    additionalInfo?: any;
    timestamp?: number;
  };
}

export declare abstract class ILoggerTarget {
  public abstract notify(data: ILogger.Payload): void;
}
