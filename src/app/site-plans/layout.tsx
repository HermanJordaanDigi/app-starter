import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Site Plans - SitePlan AI",
  description: "Browse, manage, and create professional AI-generated site plans for your properties.",
};

export default function SitePlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
