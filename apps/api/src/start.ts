import { setupApp } from "@/setup/app";
import { setupIO } from "@/setup/io";
import { setupRoutes } from "@/setup/routes";
import { setupServer } from "@/setup/server";

(async () => {
  setupApp();
  setupRoutes();
  await setupIO();
  setupServer();
})();
