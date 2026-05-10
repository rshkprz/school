import z from "zod";

export const academicSessionSchema = z.object({
  name: z.string().min(1),
  type: z.enum(["year", "semester", "term"]),
  startDate: z.string(),
  endDate: z.string(),
  isCurrent: z.boolean(),
});

export type AcademicSessionType = z.infer<typeof academicSessionSchema> 