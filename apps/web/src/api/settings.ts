import { AcademicSession } from "@/components/tables/academic-session-table-columns"
import { api } from "./api"

export const addAcademicSession = async(data:Omit<AcademicSession, "id">) => {
    const response = await api.post("/admin/academic-session", data)
    return response.data;
}