import { boolean, date, index, integer, pgEnum, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";
import { employees } from "./actors";

export const sessionTypeEnum = pgEnum("session_type", [
  "year",
  "semester",
  "term",
]);

export const academicSessions = pgTable(
  "academic_sessions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull().unique(),
    type: sessionTypeEnum("type").notNull(),
    startDate: date("start_date").notNull(),
    endDate: date("end_date").notNull(),
    isCurrent: boolean("is_current").default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [
      index("current_session_idx").on(t.isCurrent)
  ]
);

export const grades = pgTable("grades", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(),
  sortOrder: integer("sort_order").notNull(),
});

export const sections = pgTable(
  "sections",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    gradeId: uuid("grade_id")
      .notNull()
      .references(() => grades.id),
    sectionName: text("section_name").notNull(),
    academicSessionId: uuid("academic_session_id")
      .notNull()
      .references(() => academicSessions.id),
    capacity: integer("capacity").default(40),
    classTeacherId: uuid("class_teacher_id").references(
      () => employees.id
    ),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (t) => [
     uniqueIndex("class_section_unique").on(
      t.gradeId,
      t.sectionName,
      t.academicSessionId
    ),
  ]
);

export const subjects = pgTable("subjects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  code: text("code").unique(),
  isElective: boolean("is_elective").default(false) ,
  description: text("description"),
});