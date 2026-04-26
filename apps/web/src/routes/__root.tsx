import { Toaster } from "@school/ui/components/sonner";
import {
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import {
  TanStackRouterDevtools,
} from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/theme-provider";

import "../index.css";

export interface RouterAppContext {}

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
        <TanStackRouterDevtools position="bottom-left" />
      </ThemeProvider>
    </>
  );
}
