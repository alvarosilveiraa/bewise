import { app } from "@/app";
import { exceptionMiddleware } from "@/middlewares/exception";
import { migrationsRoutes } from "@/routes/migrations";
import { storageRoutes } from "@/routes/storage";
import { userRoutes } from "@/routes/user";
import { usersRoutes } from "@/routes/users";

export const setupRoutes = () => {
  migrationsRoutes();
  storageRoutes();
  userRoutes();
  usersRoutes();
  app.use(exceptionMiddleware);
};
