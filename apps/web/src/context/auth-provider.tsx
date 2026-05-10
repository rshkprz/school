import { api, clearAccessToken, setAccessToken } from "@/api/api";
import { refresh } from "@/api/auth";
import { User } from "@/types/user";
import { createContext, useContext, useEffect, useState } from "react";

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  setAuth: (data: { user: User; accessToken: string }) => void;
  clear: () => void;
  loading: boolean;
  hasRole: (role: string) => boolean
};

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setloading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const hasRole = (role: string) => {
    return user?.role ===role ? true: false
  }

  const setAuth = (data: { user: User; accessToken: string }) => {
    setUser(data.user);
    setIsAuthenticated(true)
    setAccessToken(data.accessToken);
  };

  const clear = () => {
    setUser(null);
    setIsAuthenticated(false)
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
       ...
      </div>
    )
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, setAuth, clear, loading, hasRole }}
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
