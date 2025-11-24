import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - SitePlan AI",
  description: "View your site plans, credits, and account statistics. Manage your AI-powered site plan generation projects.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
