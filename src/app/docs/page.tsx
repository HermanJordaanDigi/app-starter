import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, HelpCircle, Rocket } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to the SitePlan AI documentation. Learn how to create
          professional site plans with our AI-powered platform.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/docs/getting-started" className="group">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="group-hover:text-primary">
                Getting Started
              </CardTitle>
              <CardDescription>
                Set up your account and create your first site plan in minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn the basics and get up and running quickly
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/docs/how-to-use" className="group">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="group-hover:text-primary">
                How to Use
              </CardTitle>
              <CardDescription>
                Detailed guide on all features and capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Master the tools and create professional site plans
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/docs/faq" className="group">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="group-hover:text-primary">FAQ</CardTitle>
              <CardDescription>
                Answers to frequently asked questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Find quick answers to common questions
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h2 className="mb-2 text-xl font-semibold">Need More Help?</h2>
        <p className="mb-4 text-muted-foreground">
          Can&apos;t find what you&apos;re looking for? Our support team is here to help.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Contact Support →
        </Link>
      </div>
    </div>
  );
}
