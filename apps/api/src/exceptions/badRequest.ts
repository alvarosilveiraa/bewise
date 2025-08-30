import { Exception } from "@bewise/common/Exception";

export const badRequestException = new Exception({
  status: 400,
  message: "Bad request!",
});
