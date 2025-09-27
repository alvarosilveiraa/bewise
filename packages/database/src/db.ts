import { RecordUnknown } from "@bewise/common/types/RecordUnknown";
import { Kysely } from "kysely";
import { dialect } from "./dialect";

type Database = {
  person: RecordUnknown;
};

export const db = new Kysely<Database>({ dialect });
