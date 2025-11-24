import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Plan Details - SitePlan AI",
  description: "View and manage your AI-generated site plan. Download, edit, or share your professional site plan.",
};

export default function SitePlanDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
