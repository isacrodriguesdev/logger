import { ILoggerTarget, ILogger } from "../types";

export class ConsoleLog implements ILoggerTarget {
  notify(payload: ILogger.Payload): void {
    const stringifiedData = JSON.stringify(payload);

    switch (payload.level) {
      case "info":
        console.log("ℹ️", "\x1b[36m", stringifiedData);
        break;
      case "success":
        console.log("✅", "\x1b[92m", stringifiedData);
        break;
      case "warning":
        console.warn("⚠️", "\x1b[33m", stringifiedData);
        break;
      case "debug":
        console.debug("🛑", "\x1b[32m", stringifiedData);
        break;
      case "error":
        console.error("🚨", "\x1b[91m", stringifiedData);
        break;
      case "announcement":
        console.log("📡", "\x1b[38;5;208m", stringifiedData);
        break;
      case "critical":
        console.log("🔥", "\x1b[38;5;196m", stringifiedData);
        break;
      case "system":
        console.log("🖥️", "\x1b[38;5;45m", stringifiedData);
        break;
      case "security":
        console.log("🔒", "\x1b[38;5;172m", stringifiedData);
        break;
      case "database":
        console.log("🗃️", "\x1b[38;5;178m", stringifiedData);
        break;
      case "audit":
        console.log("📝", "\x1b[38;5;184m", stringifiedData);
        break;
      case "performance":
        console.log("📈", "\x1b[38;5;190m", stringifiedData);
        break;
      case "access":
        console.log("🔑", "\x1b[38;5;196m", stringifiedData);
        break;
      case "event":
        console.log("📣", "\x1b[38;5;202m", stringifiedData);
        break;
      case "request":
        console.log("📥", "\x1b[38;5;208m", stringifiedData);
        break;
      case "response":
        console.log("📤", "\x1b[38;5;214m", stringifiedData);
        break;
      case "validation":
        console.log("🔍", "\x1b[38;5;220m", stringifiedData);
        break;
      default:
        console.log(stringifiedData);
    }
  }
}
