"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type {
  MockUser,
  MockSitePlan,
  PricingTier,
} from "@/lib/mock-data";
import {
  getMockUser as getInitialUser,
  getMockSitePlans as getInitialSitePlans,
  getPricingTiers,
  addSitePlan as addSitePlanToStore,
  updateSitePlan as updateSitePlanInStore,
  deleteSitePlan as deleteSitePlanFromStore,
  updateUserCredits as updateUserCreditsInStore,
  getMockUserStats,
} from "@/lib/mock-data";

// ==================== Context Type Definition ====================

interface MockDataContextType {
  // State
  user: MockUser;
  sitePlans: MockSitePlan[];
  pricingTiers: PricingTier[];

  // Actions
  addSitePlan: (plan: Omit<MockSitePlan, "id" | "createdAt" | "updatedAt">) => MockSitePlan;
  updateSitePlan: (
    id: string,
    updates: Partial<Omit<MockSitePlan, "id" | "userId" | "createdAt">>
  ) => MockSitePlan | null;
  deleteSitePlan: (id: string) => boolean;
  updateUserCredits: (amount: number) => void;
  getSitePlan: (id: string) => MockSitePlan | undefined;
  getUserStats: () => ReturnType<typeof getMockUserStats>;
  refreshData: () => void;
}

// ==================== Context Creation ====================

const MockDataContext = createContext<MockDataContextType | undefined>(undefined);

// ==================== Provider Component ====================

export function MockDataProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MockUser>(getInitialUser());
  const [sitePlans, setSitePlans] = useState<MockSitePlan[]>(getInitialSitePlans());
  const [pricingTiers] = useState<PricingTier[]>(getPricingTiers());

  // Add a new site plan
  const addSitePlan = useCallback((
    plan: Omit<MockSitePlan, "id" | "createdAt" | "updatedAt">
  ) => {
    const newPlan = addSitePlanToStore(plan);
    setSitePlans(getInitialSitePlans());
    return newPlan;
  }, []);

  // Update an existing site plan
  const updateSitePlan = useCallback((
    id: string,
    updates: Partial<Omit<MockSitePlan, "id" | "userId" | "createdAt">>
  ) => {
    const updatedPlan = updateSitePlanInStore(id, updates);
    if (updatedPlan) {
      setSitePlans(getInitialSitePlans());
    }
    return updatedPlan;
  }, []);

  // Delete a site plan
  const deleteSitePlan = useCallback((id: string) => {
    const success = deleteSitePlanFromStore(id);
    if (success) {
      setSitePlans(getInitialSitePlans());
    }
    return success;
  }, []);

  // Update user credits
  const updateUserCredits = useCallback((amount: number) => {
    const updatedUser = updateUserCreditsInStore(amount);
    setUser(updatedUser);
  }, []);

  // Get a single site plan by ID
  const getSitePlan = useCallback((id: string) => {
    return sitePlans.find((plan) => plan.id === id);
  }, [sitePlans]);

  // Get user statistics
  const getUserStats = useCallback(() => {
    return getMockUserStats();
  }, []);

  // Refresh data from store
  const refreshData = useCallback(() => {
    setUser(getInitialUser());
    setSitePlans(getInitialSitePlans());
  }, []);

  const value: MockDataContextType = {
    user,
    sitePlans,
    pricingTiers,
    addSitePlan,
    updateSitePlan,
    deleteSitePlan,
    updateUserCredits,
    getSitePlan,
    getUserStats,
    refreshData,
  };

  return (
    <MockDataContext.Provider value={value}>
      {children}
    </MockDataContext.Provider>
  );
}

// ==================== Hook for Consuming Context ====================

export function useMockData() {
  const context = useContext(MockDataContext);

  if (context === undefined) {
    throw new Error("useMockData must be used within a MockDataProvider");
  }

  return context;
}

// ==================== Convenience Hooks ====================

/**
 * Hook to access user data only
 */
export function useMockUser() {
  const { user, updateUserCredits } = useMockData();
  return { user, updateUserCredits };
}

/**
 * Hook to access site plans only
 */
export function useMockSitePlans() {
  const {
    sitePlans,
    addSitePlan,
    updateSitePlan,
    deleteSitePlan,
    getSitePlan,
  } = useMockData();

  return {
    sitePlans,
    addSitePlan,
    updateSitePlan,
    deleteSitePlan,
    getSitePlan,
  };
}

/**
 * Hook to access pricing tiers only
 */
export function usePricingTiers() {
  const { pricingTiers } = useMockData();
  return pricingTiers;
}

/**
 * Hook to access user statistics
 */
export function useUserStats() {
  const { getUserStats } = useMockData();
  return getUserStats();
}
