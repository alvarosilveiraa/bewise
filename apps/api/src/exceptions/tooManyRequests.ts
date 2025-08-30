import { Exception } from "@bewise/common/Exception";

export const tooManyRequestsException = new Exception({
  status: 429,
  message: "Too many requests!",
});
