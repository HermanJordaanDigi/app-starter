"use client";

import { useSession } from "@/lib/auth-client";
import { UserProfile } from "@/components/auth/user-profile";
import { Button } from "@/components/ui/button";
import { Lock, Coins, FileText, Crown, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useDemoMode } from "@/contexts/demo-mode-context";
import { useMockData } from "@/contexts/mock-data-context";
import { StatsCard } from "@/components/dashboard/stats-card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

export default function DashboardPage() {
  const { data: session, isPending } = useSession();
  const { isDemoMode } = useDemoMode();
  const { user: mockUser, sitePlans } = useMockData();

  // In demo mode, skip auth checks
  if (isDemoMode) {
    // Get 5 most recent site plans
    const recentPlans = sitePlans
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 5);

    const totalPlans = sitePlans.length;
    const creditsRemaining = mockUser.credits;
    const currentPlan = mockUser.plan;

    // Calculate progress percentage (assuming 100 is max)
    const creditProgress = (creditsRemaining / 100) * 100;

    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Credits Remaining"
            value={creditsRemaining}
            icon={Coins}
            subtitle="Available for use"
          >
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${Math.min(creditProgress, 100)}%` }}
              />
            </div>
          </StatsCard>

          <StatsCard
            title="Site Plans Created"
            value={totalPlans}
            icon={FileText}
            subtitle="Total plans generated"
          />

          <StatsCard
            title="Current Plan"
            value={currentPlan}
            icon={Crown}
            subtitle="Active subscription"
          >
            <Badge variant="secondary" className="mt-2">
              {currentPlan}
            </Badge>
          </StatsCard>
        </div>

        {/* Quick Actions Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="flex-1">
              <Link href="/site-plans/new">
                <Plus className="mr-2 h-5 w-5" />
                Create New Site Plan
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link href="/pricing">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy More Credits
              </Link>
            </Button>
          </div>
        </div>

        {/* Recent Site Plans Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Site Plans</h2>
            <Button asChild variant="link">
              <Link href="/site-plans">View All Site Plans →</Link>
            </Button>
          </div>

          {recentPlans.length === 0 ? (
            <div className="border border-border rounded-lg p-12 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No site plans yet</h3>
              <p className="text-muted-foreground mb-4">
                Create your first site plan to get started
              </p>
              <Button asChild>
                <Link href="/site-plans/new">Create Site Plan</Link>
              </Button>
            </div>
          ) : (
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Thumbnail</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Created Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentPlans.map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell>
                        <div className="w-16 h-16 bg-muted rounded overflow-hidden relative">
                          {plan.thumbnailUrl ? (
                            <Image
                              src={plan.thumbnailUrl}
                              alt={plan.address}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FileText className="h-6 w-6 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Link
                          href={`/site-plans/${plan.id}`}
                          className="hover:underline font-medium"
                        >
                          {plan.address}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {format(new Date(plan.createdAt), "MMM d, yyyy")}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            plan.status === "completed"
                              ? "default"
                              : plan.status === "draft"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {plan.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/site-plans/${plan.id}`}>View</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Lock className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">Protected Page</h1>
            <p className="text-muted-foreground mb-6">
              You need to sign in to access the dashboard
            </p>
          </div>
          <UserProfile />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p className="text-muted-foreground mb-4">
            Manage your account settings and preferences
          </p>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {session.user.name}
            </p>
            <p>
              <strong>Email:</strong> {session.user.email}
            </p>
          </div>
          <Button asChild className="mt-4">
            <Link href="/profile">View Profile</Link>
          </Button>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Site Plans</h2>
          <p className="text-muted-foreground mb-4">
            Create and manage your AI-generated site plans
          </p>
          <Button asChild>
            <Link href="/site-plans">View Site Plans</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
