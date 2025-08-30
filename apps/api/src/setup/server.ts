import { IS_DEV } from "@/constants/IS_DEV";
import { PORT } from "@/constants/PORT";
import { server } from "@/server";

export const setupServer = () => {
  server.listen(PORT, () => {
    if (IS_DEV) console.log(`Server is running at: http://localhost:${PORT}`);
    else console.log(`Server is running at port: ${PORT}`);
  });
};
