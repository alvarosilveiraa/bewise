import { Exception } from "@bewise/common/Exception";

export const unauthorizedException = new Exception({
  status: 401,
  message: "Unauthorized!",
});
