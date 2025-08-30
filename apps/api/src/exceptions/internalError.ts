import { Exception } from "@bewise/common/Exception";

export const internalErrorException = new Exception({
  status: 500,
  message: "Internal error!",
});
