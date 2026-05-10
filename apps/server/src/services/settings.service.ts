import { insertAcademicSession } from "@school/db/services/settings";
import type { AcademicSessionType } from "@school/validators";

export const addAcademicSessionService = async(body: AcademicSessionType) => {
    

    await insertAcademicSession(body)
}