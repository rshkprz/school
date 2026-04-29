import type { AuthUser } from "./auth-user";
import "express"

declare global{
  namespace Express{
    interface Request{
      user?: AuthUser;
    }
  }
}