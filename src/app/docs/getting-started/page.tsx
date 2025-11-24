import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, CreditCard, MapPin } from "lucide-react";

export default function GettingStartedPage() {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4 border-b pb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Getting Started</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Welcome to SitePlan AI! This guide will help you create your first
          professional site plan in just a few minutes.
        </p>
      </div>

      {/* Demo Mode Alert */}
      <div className="max-w-3xl mx-auto">
        <Alert>
          <AlertDescription>
            Currently running in <Badge variant="secondary">Demo Mode</Badge> -
            All data is stored in-memory and will reset on page refresh. Sign in
            with Google to persist your data.
          </AlertDescription>
        </Alert>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Prerequisites</h2>
          <ul className="space-y-2 text-muted-foreground text-left max-w-2xl mx-auto">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <span>
                A modern web browser (Chrome, Firefox, Safari, or Edge)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <span>Google account for authentication (optional in demo)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <span>Property address or location you want to map</span>
            </li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Quick Start Guide</h2>
          <div className="space-y-6 text-left">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    1
                  </div>
                  <CardTitle>Sign Up or Use Demo Mode</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Create a free account by clicking &quot;Sign In&quot; in the top right
                  corner and authenticating with Google. Or continue using demo
                  mode to try the platform without signing up.
                </p>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium">Demo Mode</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    In demo mode, you start with 75 credits. Data is stored
                    in-memory and resets on page refresh.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    2
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    Purchase Credits
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Site plan generation uses credits. Visit the{" "}
                  <Link
                    href="/pricing"
                    className="font-medium text-primary hover:underline"
                  >
                    pricing page
                  </Link>{" "}
                  to purchase a credit package that fits your needs.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Basic: 30 credits for $5</li>
                  <li>• Pro: 100 credits for $10 (most popular)</li>
                  <li>• Elite: 200 credits for $29</li>
                </ul>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium">What are Credits?</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Each site plan generation uses 1 credit. Credits never
                    expire and can be used anytime.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    3
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    Create Your First Site Plan
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Navigate to your{" "}
                  <Link
                    href="/dashboard"
                    className="font-medium text-primary hover:underline"
                  >
                    dashboard
                  </Link>{" "}
                  and click &quot;Create New Site Plan&quot;. Enter a property address,
                  adjust the map view, and generate your site plan.
                </p>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Enter the property address in the search bar</li>
                  <li>2. Adjust zoom, rotation, and map type as needed</li>
                  <li>3. Click &quot;Capture & Generate Site Plan&quot;</li>
                  <li>4. Wait for AI to process (typically 30-60 seconds)</li>
                  <li>5. View and download your professional site plan</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Next Steps</h2>
          <div className="space-y-3 text-left">
            <Link
              href="/docs/how-to-use"
              className="block rounded-lg border p-4 transition-colors hover:bg-accent"
            >
              <h3 className="font-semibold">How to Use SitePlan AI</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Learn about all the features and how to get the most out of the
                platform
              </p>
            </Link>
            <Link
              href="/docs/faq"
              className="block rounded-lg border p-4 transition-colors hover:bg-accent"
            >
              <h3 className="font-semibold">Frequently Asked Questions</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Find answers to common questions about billing, features, and
                more
              </p>
            </Link>
          </div>
        </section>
      </div>

      {/* Help Section */}
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border bg-primary/5 p-6 text-center">
          <h2 className="mb-2 text-xl font-semibold">Need Help?</h2>
          <p className="text-muted-foreground">
            If you&apos;re having trouble getting started, check out our{" "}
            <Link
              href="/docs/faq"
              className="font-medium text-primary hover:underline"
            >
              FAQ page
            </Link>{" "}
            or contact our support team for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
