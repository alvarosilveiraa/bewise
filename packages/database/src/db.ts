import { Kysely } from "kysely";
import { dialect } from "./dialect";

type Database = {
  user: Record<string, unknown>;
};

export const db = new Kysely<Database>({ dialect });
