import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getMockUser } from "@/lib/mock-data";

export async function getUserSession() {
  // Always use demo mode for now (isDemoMode = true by default)
  const isDemoMode = true;

  if (isDemoMode) {
    return {
      user: getMockUser(),
      isDemoMode: true,
    };
  }

  // In production mode, check actual auth
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return {
    user: session?.user || null,
    isDemoMode: false,
  };
}
