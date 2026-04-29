import { api, clearAccessToken, setAccessToken } from "@/api/api";
import { refresh } from "@/api/auth";
import { User } from "@/types/user";
import { createContext, useContext, useEffect, useState } from "react";

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  setAuth: (data: { user: User; accessToken: string }) => void;
  clear: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setloading] = useState<boolean>(true);

  const setAuth = (data: { user: User; accessToken: string }) => {
    setUser(data.user);
    setAccessToken(data.accessToken);
  };

  const clear = () => {
    setUser(null);
    clearAccessToken()
  };

  useEffect(() => {
    const init = async () => {
      try {
        console.log("Refreshing")
        const res = await refresh()
        setAuth({
          user: {
            id: res.user.id,
            name: res.user.name,
            email: res.user.email,
            role: res.user.role,
          },
          accessToken: res.newAccessToken
        });
        console.log("REFRESH RESPONSE:", res);
      } catch(err) {
        clear();
        console.log("refresh error:", err)
      } finally {
        setloading(false);
      }
    };
    init();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, setAuth, clear }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error("useAuth must be inside AuthProvider")
    return ctx
}
