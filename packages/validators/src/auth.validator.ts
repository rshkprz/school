import z from "zod"
export const emailSchema = z.email("Invalid email address").trim().min(1);
export const loginSchema = z.object({
    email: emailSchema,
    password: z.string().trim().min(6),
})

export const refreshTokenSchema = z.object({
    id: z.string().min(1),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
