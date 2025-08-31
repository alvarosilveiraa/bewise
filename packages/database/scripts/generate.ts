import { writeFileSync } from "fs";
import { join } from "path";

(async () => {
  const name = process.argv[2];
  if (!name) throw new Error("Name is required!");
  const filename = `${Date.now()}_${name}.ts`;
  const filepath = join(__dirname, "../migrations", filename);
  writeFileSync(
    filepath,
    `import { Kysely } from "kysely";

export const up = async (db: Kysely<unknown>) => {
  // TODO: ...
};

export const down = async (db: Kysely<unknown>) => {
  // TODO: ...
};
`,
  );
})();
