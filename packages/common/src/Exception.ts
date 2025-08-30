import { isObject } from "lodash";

export class Exception {
  public status: number;
  public message: string;
  public details?: unknown;

  constructor(error: unknown, status = 400) {
    this.status = status;
    if (isObject(error)) {
      const record = error as Record<string, unknown>;
      this.status = record.status ? Number(record.status) : status;
      this.message = record.message
        ? String(record.message)
        : "Unexpected error";
      this.details = record.details;
    } else this.message = String(error);
  }

  public setStatus(status: number) {
    this.status = status;
    return this;
  }

  public setMessage(message: string) {
    this.message = message;
    return this;
  }

  public setDetails(details: unknown) {
    if (details instanceof Exception) return details;
    this.details = details;
    return this;
  }
}
