
import type { AcademicSessionType } from "@school/validators";
import { db } from "..";
import { academicSessions } from "../schema/system";

export const insertAcademicSession = async (
 data: AcademicSessionType
) => {
  await db.insert(academicSessions).values(data);
};