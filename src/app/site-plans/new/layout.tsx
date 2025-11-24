import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Site Plan - SitePlan AI",
  description: "Generate a professional site plan with AI. Search for any property address and create your site plan in minutes.",
};

export default function NewSitePlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
