"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDemoMode } from "@/contexts/demo-mode-context";
import { updateUserCredits } from "@/lib/mock-data";
import { toast } from "sonner";
import type { PricingTier } from "@/lib/mock-data";

interface BuyCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier: PricingTier | null;
  onSuccess?: () => void;
}

export function BuyCreditsModal({
  isOpen,
  onClose,
  selectedTier,
  onSuccess,
}: BuyCreditsModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { isDemoMode } = useDemoMode();

  const handlePurchase = async () => {
    if (!selectedTier) return;

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (isDemoMode) {
      // Add credits to mock user balance
      updateUserCredits(selectedTier.credits);

      toast.success("Credits purchased successfully!", {
        description: `${selectedTier.credits} credits have been added to your account.`,
      });

      onSuccess?.();
      onClose();
    } else {
      toast.info("Real payments coming soon", {
        description: "Payment integration will be available in a future update.",
      });
    }

    setIsProcessing(false);
  };

  if (!selectedTier) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Purchase</DialogTitle>
          <DialogDescription>
            You are about to purchase the {selectedTier.name} plan
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-semibold">{selectedTier.name} Plan</div>
              <div className="text-sm text-muted-foreground">
                {selectedTier.credits} credits
              </div>
            </div>
            <div className="text-2xl font-bold">${selectedTier.price}</div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>
              This is a one-time purchase. Credits will be added to your account
              immediately after payment is processed.
            </p>
          </div>

          {isDemoMode && (
            <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Demo Mode: This is a simulated purchase. Credits will be added
                to your in-memory balance.
              </p>
            </div>
          )}
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handlePurchase}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Purchase ${selectedTier.price}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
