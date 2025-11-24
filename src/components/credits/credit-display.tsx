"use client";

import { Coins } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useDemoMode } from "@/contexts/demo-mode-context";
import { getMockUser } from "@/lib/mock-data";

interface CreditDisplayProps {
  compact?: boolean;
}

export function CreditDisplay({ compact = false }: CreditDisplayProps) {
  const { isDemoMode } = useDemoMode();

  // Get user data
  const user = isDemoMode ? getMockUser() : null;

  if (!isDemoMode || !user) {
    return null;
  }

  if (compact) {
    return (
      <Link href="/pricing">
        <Button variant="ghost" size="sm" className="gap-2">
          <Coins className="h-4 w-4" />
          <span className="font-medium">{user.credits}</span>
        </Button>
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <Coins className="h-5 w-5 text-primary" />
        <div>
          <div className="text-sm font-medium">{user.credits} Credits</div>
          <Link
            href="/pricing"
            className="text-xs text-muted-foreground hover:underline"
          >
            Buy more
          </Link>
        </div>
      </div>
    </div>
  );
}
