import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - SitePlan AI",
  description: "Simple, credit-based pricing for AI-powered site plan generation. Choose the plan that works for you - no subscriptions required.",
  keywords: ["site plan pricing", "AI pricing", "credit-based pricing", "site plan generator pricing"],
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
