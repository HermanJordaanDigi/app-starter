/**
 * Mock Data System for SitePlan AI Demo Mode
 *
 * This file contains all mock data, TypeScript interfaces, and helper functions
 * for running the application in demo mode without backend persistence.
 */

// ==================== TypeScript Interfaces ====================

export interface MockUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  credits: number;
  plan: "Basic" | "Pro" | "Elite";
  createdAt: Date;
}

export interface MockSitePlan {
  id: string;
  userId: string;
  address: string;
  lat: number;
  lng: number;
  status: "draft" | "completed" | "archived";
  createdAt: Date;
  updatedAt: Date;
  thumbnailUrl: string;
  generatedImageUrl: string | null;
  notes?: string;
}

export interface PricingTier {
  name: "Basic" | "Pro" | "Elite";
  credits: number;
  price: number;
  features: string[];
  popular?: boolean;
}

// ==================== Mock User Data ====================

const mockUser: MockUser = {
  id: "demo-user-1",
  name: "Demo User",
  email: "demo@siteplanai.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DemoUser",
  credits: 75,
  plan: "Pro",
  createdAt: new Date("2024-01-15"),
};

// ==================== Mock Site Plans Data ====================

const mockSitePlans: MockSitePlan[] = [
  {
    id: "sp-001",
    userId: "demo-user-1",
    address: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    lat: 37.4224764,
    lng: -122.0842499,
    status: "completed",
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    thumbnailUrl: "https://placehold.co/400x300/2563eb/ffffff?text=Site+Plan+1",
    generatedImageUrl: "https://placehold.co/1200x900/2563eb/ffffff?text=Generated+Site+Plan+1",
    notes: "Googleplex headquarters site plan",
  },
  {
    id: "sp-002",
    userId: "demo-user-1",
    address: "350 Fifth Avenue, New York, NY 10118",
    lat: 40.748817,
    lng: -73.985428,
    status: "completed",
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-03-10"),
    thumbnailUrl: "https://placehold.co/400x300/059669/ffffff?text=Site+Plan+2",
    generatedImageUrl: "https://placehold.co/1200x900/059669/ffffff?text=Generated+Site+Plan+2",
    notes: "Empire State Building area",
  },
  {
    id: "sp-003",
    userId: "demo-user-1",
    address: "1 Apple Park Way, Cupertino, CA 95014",
    lat: 37.334606,
    lng: -122.009102,
    status: "completed",
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-05"),
    thumbnailUrl: "https://placehold.co/400x300/7c3aed/ffffff?text=Site+Plan+3",
    generatedImageUrl: "https://placehold.co/1200x900/7c3aed/ffffff?text=Generated+Site+Plan+3",
  },
  {
    id: "sp-004",
    userId: "demo-user-1",
    address: "1060 West Addison Street, Chicago, IL 60613",
    lat: 41.947855,
    lng: -87.655716,
    status: "draft",
    createdAt: new Date("2024-03-18"),
    updatedAt: new Date("2024-03-18"),
    thumbnailUrl: "https://placehold.co/400x300/dc2626/ffffff?text=Site+Plan+4",
    generatedImageUrl: null,
    notes: "Wrigley Field - work in progress",
  },
  {
    id: "sp-005",
    userId: "demo-user-1",
    address: "1 Microsoft Way, Redmond, WA 98052",
    lat: 47.639926,
    lng: -122.128357,
    status: "completed",
    createdAt: new Date("2024-02-28"),
    updatedAt: new Date("2024-02-28"),
    thumbnailUrl: "https://placehold.co/400x300/ea580c/ffffff?text=Site+Plan+5",
    generatedImageUrl: "https://placehold.co/1200x900/ea580c/ffffff?text=Generated+Site+Plan+5",
  },
  {
    id: "sp-006",
    userId: "demo-user-1",
    address: "4 Privet Drive, Little Whinging, Surrey",
    lat: 51.482750,
    lng: -0.634400,
    status: "archived",
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-02-15"),
    thumbnailUrl: "https://placehold.co/400x300/64748b/ffffff?text=Site+Plan+6",
    generatedImageUrl: "https://placehold.co/1200x900/64748b/ffffff?text=Generated+Site+Plan+6",
    notes: "Archived project",
  },
];

// ==================== Pricing Tiers Data ====================

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    credits: 30,
    price: 5,
    features: [
      "30 site plans",
      "Basic support",
      "Standard export quality",
      "7-day history",
      "Email notifications",
    ],
  },
  {
    name: "Pro",
    credits: 100,
    price: 10,
    features: [
      "100 site plans",
      "Priority support",
      "HD export quality",
      "30-day history",
      "Advanced map features",
      "Custom annotations",
      "Batch processing",
    ],
    popular: true,
  },
  {
    name: "Elite",
    credits: 200,
    price: 29,
    features: [
      "200 site plans",
      "Premium 24/7 support",
      "4K export quality",
      "Unlimited history",
      "API access",
      "White-label options",
      "Team collaboration",
      "Priority processing",
      "Custom integrations",
    ],
  },
];

// ==================== In-Memory Store ====================

// Create mutable copies for in-memory modifications
let currentUser = { ...mockUser };
let currentSitePlans = [...mockSitePlans];

// ==================== Getter Functions ====================

/**
 * Get the current mock user
 */
export function getMockUser(): MockUser {
  return { ...currentUser };
}

/**
 * Get all mock site plans
 */
export function getMockSitePlans(): MockSitePlan[] {
  return currentSitePlans.map((plan) => ({ ...plan }));
}

/**
 * Get a single mock site plan by ID
 */
export function getMockSitePlan(id: string): MockSitePlan | null {
  const plan = currentSitePlans.find((plan) => plan.id === id);
  return plan ? { ...plan } : null;
}

/**
 * Get all pricing tiers
 */
export function getPricingTiers(): PricingTier[] {
  return pricingTiers.map((tier) => ({ ...tier }));
}

// ==================== In-Memory Store Utilities ====================

/**
 * Add a new site plan to the in-memory store
 */
export function addSitePlan(plan: Omit<MockSitePlan, "id" | "createdAt" | "updatedAt">): MockSitePlan {
  const newPlan: MockSitePlan = {
    ...plan,
    id: `sp-${Date.now()}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  currentSitePlans.unshift(newPlan); // Add to beginning (most recent first)
  return { ...newPlan };
}

/**
 * Update an existing site plan in the in-memory store
 */
export function updateSitePlan(
  id: string,
  updates: Partial<Omit<MockSitePlan, "id" | "userId" | "createdAt">>
): MockSitePlan | null {
  const index = currentSitePlans.findIndex((plan) => plan.id === id);

  if (index === -1) {
    return null;
  }

  currentSitePlans[index] = {
    ...currentSitePlans[index],
    ...updates,
    updatedAt: new Date(),
  };

  return { ...currentSitePlans[index] };
}

/**
 * Delete a site plan from the in-memory store
 */
export function deleteSitePlan(id: string): boolean {
  const index = currentSitePlans.findIndex((plan) => plan.id === id);

  if (index === -1) {
    return false;
  }

  currentSitePlans.splice(index, 1);
  return true;
}

/**
 * Update user credits in the in-memory store
 */
export function updateUserCredits(amount: number): MockUser {
  currentUser.credits = Math.max(0, currentUser.credits + amount);
  return { ...currentUser };
}

/**
 * Reset all mock data to initial state (useful for testing)
 */
export function resetMockData(): void {
  currentUser = { ...mockUser };
  currentSitePlans = [...mockSitePlans];
}

// ==================== Utility Functions ====================

/**
 * Get site plans filtered by status
 */
export function getMockSitePlansByStatus(
  status: MockSitePlan["status"]
): MockSitePlan[] {
  return currentSitePlans
    .filter((plan) => plan.status === status)
    .map((plan) => ({ ...plan }));
}

/**
 * Get recent site plans (limit results)
 */
export function getRecentMockSitePlans(limit: number = 5): MockSitePlan[] {
  return currentSitePlans
    .slice(0, limit)
    .map((plan) => ({ ...plan }));
}

/**
 * Search site plans by address
 */
export function searchMockSitePlans(query: string): MockSitePlan[] {
  const lowerQuery = query.toLowerCase();
  return currentSitePlans
    .filter((plan) => plan.address.toLowerCase().includes(lowerQuery))
    .map((plan) => ({ ...plan }));
}

/**
 * Get user statistics
 */
export function getMockUserStats() {
  return {
    totalPlans: currentSitePlans.length,
    completedPlans: currentSitePlans.filter((p) => p.status === "completed").length,
    draftPlans: currentSitePlans.filter((p) => p.status === "draft").length,
    archivedPlans: currentSitePlans.filter((p) => p.status === "archived").length,
    creditsRemaining: currentUser.credits,
    currentPlan: currentUser.plan,
  };
}
