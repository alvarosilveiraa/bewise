import { Exception } from "@bewise/common/Exception";

export const notFoundException = new Exception({
  status: 404,
  message: "Not found!",
});
