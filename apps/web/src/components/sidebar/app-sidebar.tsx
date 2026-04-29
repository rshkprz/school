import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconInnerShadowTop,
  IconListDetails,
  IconMoneybag,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@school/ui/components/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { ModeToggle } from "../mode-toggle";
import { Link, redirect } from "@tanstack/react-router";
import { useAuth } from "@/context/auth-provider";

const data = {
  
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Students",
      url: "/students",
      icon: IconListDetails,
    },
    {
      title: "Teachers",
      url: "/teachers",
      icon: IconChartBar,
    },
    {
      title: "Staff",
      url: "/staff",
      icon: IconFolder,
    },
    {
      title: "Exam",
      url: "/exam",
      icon: IconUsers,
    },
    {
      title: "Fees",
      url: "/fees",
      icon: IconMoneybag,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
  ],
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const {user, loading} = useAuth()
  if (loading) return null
  
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="flex justify-between">
          <Link to="/dashboard" className="flex items-center justify-center gap-2 px-1">
            <IconInnerShadowTop className="size-5!" />
            <span className="text-base font-semibold">Acme Inc.</span>
          </Link>
          <ModeToggle />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        {user && <NavUser user={user} />}
      </SidebarFooter>
    </Sidebar>
  );
}
