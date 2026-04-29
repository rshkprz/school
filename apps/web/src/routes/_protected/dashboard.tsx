import { useAuth } from "@/context/auth-provider";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user, loading } = useAuth();

    if (!user) return null;
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
        <h2 className="text-xl mb-2">Welcome back, {user?.name}!</h2>
        <p className="text-gray-600 dark:text-gray-400">Email: {user?.email}</p>
      </div>
    </div>
  );
}
