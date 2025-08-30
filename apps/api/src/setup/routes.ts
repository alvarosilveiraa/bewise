import { app } from "@/app";
import { exceptionMiddleware } from "@/middlewares/exception";
import { rootRoutes } from "@/routes/root";

export const setupRoutes = () => {
  rootRoutes();
  app.use(exceptionMiddleware);
};
