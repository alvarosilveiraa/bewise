import { clerkClient } from "@clerk/express";
import { app } from "@/app";

export const usersRoutes = () => {
  app.get("/users", async (req, res) => {
    // const auth = getAuth(req);
    // if (!auth.has({ permission: "org:admin:testpermission" })) {
    //   return res.status(403).send("Unauthorized");
    // }
    const users = await clerkClient.users.getUserList();
    return res.json({ users });
  });
};
