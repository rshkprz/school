import AppSidebar from "@/components/sidebar/app-sidebar";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@school/ui/components/sidebar";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/(protected)")({
  component: ProtectedLayout,
  // beforeLoad: async () => {
  //   const session = await authClient.getSession();
  //   if (!session.data) {
  //     redirect({
  //       to: "/login",
  //       throw: true,
  //     });
  //   }
  //   return { session };
  // },
});

function ProtectedLayout() {
 
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset"/>
      <SidebarInset className=" p-1.5">
        <SidebarTrigger />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
