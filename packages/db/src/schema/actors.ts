import {
  date,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "./auth";

export const genderEnum = pgEnum("gender", ["male", "female", "others"]);

export const students = pgTable("students", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .unique()
    .references(() => user.id, { onDelete: "cascade" }),
  admissionNumber: varchar("admission_number", { length: 50 })
    .notNull()
    .unique(),
  dateOfBirth: date("date_of_birth"),
  fatherName: text("father_name"),
  motherName: text("mother_name"),
  guardianPhone: varchar("guardian_phone", { length: 20 }),
  guardianEmail: text("guardian_email"),
  bloodGroup: varchar("blood_group", { length: 5 }),
  gender: genderEnum("gender"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const employees = pgTable("employees", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .unique()
    .references(() => user.id, { onDelete: "cascade" }),
  designation: text("designation"),
  qualification: text("qualification"),
  joinDate: date("join_date"),
  salary: numeric("salary", { precision: 12, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});
