import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              SitePlan AI
            </h1>
            <h2 className="text-2xl font-semibold text-muted-foreground">
              Generate Professional Site Plans in Minutes
            </h2>
            <p className="text-xl text-muted-foreground">
              AI-powered property mapping and site plan generation for real estate professionals, architects, and developers.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>

          <div className="mt-16">
            <p className="text-sm text-muted-foreground">
              Welcome to SitePlan AI. This is a placeholder landing page that will be enhanced in Phase 4.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
