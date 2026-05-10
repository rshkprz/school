import { addAcademicSessionService } from "@/services/settings.service";
import { asyncHandler } from "@/utils/asynchandler";
import { academicSessionSchema } from "@school/validators";

export const addAcademicSession = asyncHandler(
    async(req: Request, res:Response) => {
        const body = academicSessionSchema.parse(req.body)
        const result = await addAcademicSessionService(body)

    }
)