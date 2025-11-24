import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile - SitePlan AI",
  description: "Manage your account settings, view usage statistics, and update your profile information.",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
