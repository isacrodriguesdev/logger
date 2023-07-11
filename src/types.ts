export declare abstract class ILogger {
  public abstract notify(types: string[], data: ILogger.Payload): void;
  public abstract attach(type: string, observer: ILogger.Observer): void;
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

  export abstract class Observer {
    public abstract update(payload: ILogger.Payload): void;
  }
}
