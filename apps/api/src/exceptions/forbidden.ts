import { Exception } from "@bewise/common/Exception";

export const forbiddenException = new Exception({
  status: 403,
  message: "Forbidden!",
});
