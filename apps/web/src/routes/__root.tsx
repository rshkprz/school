import { Toaster } from "@school/ui/components/sonner";
import {
  Outlet,
  createRootRouteWithContext,
  redirect,
} from "@tanstack/react-router";
import {
  TanStackRouterDevtools,
} from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/theme-provider";

import "../index.css";
import { getMe } from "@/api/auth";
import { QueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { AuthContextType } from "@/context/auth-provider";
// import { useAuth } from "@/hooks/use-auth";


export interface RouterAppContext {
  // queryClient: QueryClient
  auth: AuthContextType
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  
  head: () => ({
    meta: [
      {
        title: "School",
      },
      {
        name: "description",
        content: "school is a web application",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
});

function RootComponent() {
  
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        storageKey="vite-ui-theme"
      >
        <Outlet />
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-right" />
      </ThemeProvider>
    </>
  );
}
