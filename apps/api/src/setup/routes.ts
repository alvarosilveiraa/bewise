import { app } from "@/app";
import { exceptionMiddleware } from "@/middlewares/exception";
import { rootRoutes } from "@/routes/root";
import { storageRoutes } from "@/routes/storage";
import { userRoutes } from "@/routes/user";

export const setupRoutes = () => {
  rootRoutes();
  storageRoutes();
  userRoutes();
  app.use(exceptionMiddleware);
};
