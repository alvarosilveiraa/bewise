import { app } from "@/app";
import { exceptionMiddleware } from "@/middlewares/exception";
import { rootRoutes } from "@/routes/root";
import { userRoutes } from "@/routes/user";

export const setupRoutes = () => {
  rootRoutes();
  userRoutes();
  app.use(exceptionMiddleware);
};
