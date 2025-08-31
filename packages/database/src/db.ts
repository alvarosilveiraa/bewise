import { Kysely } from "kysely";
import { dialect } from "./dialect";

type Database = {
  person: Record<string, unknown>;
};

export const db = new Kysely<Database>({ dialect });
