import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const aliveTable = pgTable("alive", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
});
