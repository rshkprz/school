import AppSidebar from "@/components/sidebar/app-sidebar";
import { createFileRoute, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@school/ui/components/sidebar";
import { useAuth } from "@/context/auth-provider";

export const Route = createFileRoute("/_protected")({
  component: ProtectedLayout,
})

function ProtectedLayout() { 
  const { user, loading } = useAuth();
  if (!user && !loading) throw redirect({to: "/login"}) 
 
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
