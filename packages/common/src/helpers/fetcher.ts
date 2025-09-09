import { Exception } from "../Exception";

class Fetcher<R = unknown> {
  private controller = new AbortController();

  constructor(
    private input: RequestInfo | URL,
    private init?: RequestInit,
    private timeout = 10000,
  ) {}

  private get timeoutID() {
    if (!this.timeout) return null;
    const timeoutID = setTimeout(() => this.controller.abort(), this.timeout);
    return timeoutID;
  }

  private get signal() {
    if (!this.timeoutID) return null;
    return this.controller.signal;
  }

  public async execute() {
    try {
      const response = await fetch(this.input, {
        signal: this.signal,
        ...this.init,
      }).then(res => this.onSuccess(res));
      return response;
    } catch (error) {
      throw this.onError(error);
    } finally {
      this.onFinally();
    }
  }

  private async onSuccess(res: Response) {
    try {
      const json = await res.json();
      if (!res.ok) throw json;
      return json as R;
    } catch (error) {
      if (!res.ok) throw error;
      return undefined as R;
    }
  }

  private onError(error: unknown) {
    if (this.timeoutID && error instanceof Error && error.name === "AbortError")
      return new Exception({
        status: 408,
        message: "Request Timeout",
        details: error.message,
      });
    return error;
  }

  private onFinally() {
    if (!this.timeoutID) return;
    clearTimeout(this.timeoutID);
  }
}

export const fetcher = <R = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit,
  timeout = 10000,
) => new Fetcher<R>(input, init, timeout).execute();
