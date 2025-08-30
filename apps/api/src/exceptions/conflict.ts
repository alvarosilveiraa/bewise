import { Exception } from "@bewise/common/Exception";

export const conflictException = new Exception({
  status: 409,
  message: "Conflict!",
});
