"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4 border-b pb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about SitePlan AI, billing, and
          features.
        </p>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-3xl mx-auto space-y-12">
        <section className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">General Questions</h2>
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is SitePlan AI?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                SitePlan AI is an AI-powered platform that generates
                professional site plans from property addresses. Simply search
                for any property, adjust the map view, and let our AI create a
                detailed site plan in minutes. Perfect for real estate
                professionals, architects, developers, and property owners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How does the AI work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our AI analyzes satellite imagery, property boundaries, and
                topographic data to generate accurate site plans. The system
                identifies key features like buildings, driveways, vegetation,
                and property lines, then creates a professional, scaled drawing
                suitable for presentations and planning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I use SitePlan AI for commercial projects?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! All generated site plans can be used for commercial
                purposes, including client presentations, marketing materials,
                and project planning. Elite plan subscribers also get API
                access for integrating site plan generation into their own
                applications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What&apos;s the difference between demo mode and a real account?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Demo mode lets you explore all features with mock data, but
                nothing is saved permanently. When you sign in with a real
                account, your site plans, settings, and credit balance are
                saved to the cloud and accessible from any device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Account & Billing</h2>
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="billing-1">
              <AccordionTrigger>How do credits work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Each site plan generation uses 1 credit. You can purchase
                credits in packages: Basic (30 credits), Pro (100 credits), or
                Elite (200 credits). Credits never expire and remain in your
                account until used. You can buy more credits anytime from the{" "}
                <Link
                  href="/pricing"
                  className="font-medium text-primary hover:underline"
                >
                  pricing page
                </Link>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="billing-2">
              <AccordionTrigger>Do credits expire?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No! Credits never expire. Purchase them once and use them
                whenever you need them, whether that&apos;s tomorrow or next year.
                Your credit balance is always available in your account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="billing-3">
              <AccordionTrigger>Can I get a refund?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer refunds for unused credits within 30 days of purchase.
                If you&apos;ve used some credits, we&apos;ll refund the remaining unused
                portion. Contact our support team to request a refund. Note
                that refunds are processed within 5-7 business days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="billing-4">
              <AccordionTrigger>
                What if I run out of credits?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can purchase more credits anytime from your dashboard or the
                pricing page. Your existing site plans remain accessible even if
                you have zero credits - you just won&apos;t be able to generate new
                ones until you top up.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="billing-5">
              <AccordionTrigger>Can I upgrade my plan?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                SitePlan AI uses a credit system rather than subscription plans,
                so you can purchase any credit package at any time. If you need
                more advanced features like high-resolution exports or API
                access, simply purchase the Elite package when you need those
                capabilities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="billing-6">
              <AccordionTrigger>
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept all major credit cards (Visa, Mastercard, American
                Express, Discover), debit cards, and digital wallets including
                Apple Pay and Google Pay. All payments are processed securely
                through our payment provider.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="billing-7">
              <AccordionTrigger>Is there a free trial?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                New accounts start with 3 free credits to try the platform. This
                lets you generate sample site plans and experience the full
                workflow before purchasing additional credits. Demo mode is also
                available to explore features without creating an account.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Using the App</h2>
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="usage-1">
              <AccordionTrigger>
                Can I edit a site plan after it&apos;s generated?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Currently, site plans cannot be edited after generation.
                However, you can generate a new site plan from the same
                property with different map settings (zoom, rotation, view
                type). Each new generation uses 1 credit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usage-2">
              <AccordionTrigger>
                How accurate are the site plans?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our AI generates site plans from current satellite imagery with
                typical accuracy suitable for planning and presentation
                purposes. However, site plans should not be used for legal
                surveys, official filings, or construction without verification
                by a licensed surveyor.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usage-3">
              <AccordionTrigger>
                Can I generate plans for any location?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! SitePlan AI works for properties anywhere in the world
                where Google Maps has satellite imagery. This includes urban,
                suburban, and most rural areas. Remote locations with limited
                satellite coverage may have lower quality results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usage-4">
              <AccordionTrigger>
                What file formats can I download?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Site plans can be downloaded as PNG, JPG, or PDF files. Basic
                and Pro plans include standard resolution exports. Elite plan
                includes high-resolution (4K) exports suitable for large-format
                printing and detailed presentations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usage-5">
              <AccordionTrigger>
                How long does generation take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Typical generation time is 30-60 seconds depending on property
                complexity and current system load. You&apos;ll receive a
                notification when your site plan is ready. You can navigate away
                from the page and return later to view your completed plan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usage-6">
              <AccordionTrigger>
                Can I share site plans with others?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Download your site plan and share the file via email, cloud
                storage, or any method you prefer. Elite plan subscribers can
                also generate shareable links that allow view-only access
                without requiring the recipient to have an account.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Technical Issues</h2>
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="tech-1">
              <AccordionTrigger>
                The map isn&apos;t loading. What should I do?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                First, ensure you have a stable internet connection. If the
                issue persists, try refreshing the page or clearing your browser
                cache. The map requires JavaScript to be enabled. If you&apos;re
                using an ad blocker, try disabling it for SitePlan AI.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech-2">
              <AccordionTrigger>
                My site plan generation failed. Will I be charged?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No, credits are only deducted when a site plan is successfully
                generated. If generation fails due to a technical error, your
                credits remain unchanged. You can try generating again, or
                contact support if the problem persists.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech-3">
              <AccordionTrigger>
                Which browsers are supported?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                SitePlan AI works best on the latest versions of Chrome,
                Firefox, Safari, and Edge. We recommend keeping your browser
                updated for the best experience and security. Internet Explorer
                is not supported.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech-4">
              <AccordionTrigger>
                Can I use SitePlan AI on mobile devices?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! SitePlan AI is fully responsive and works on tablets and
                smartphones. However, for the best experience creating and
                editing site plans, we recommend using a desktop or laptop with
                a larger screen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech-5">
              <AccordionTrigger>How do I delete my account?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can delete your account from your profile page. Note that
                this permanently deletes all your site plans and any remaining
                credits (no refunds). This action cannot be undone. If you just
                want to stop using the service, you don&apos;t need to delete your
                account - simply stop generating site plans.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>

      {/* Help Section */}
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border bg-primary/5 p-6 text-center">
          <h2 className="mb-2 text-xl font-semibold">Still Need Help?</h2>
          <p className="text-muted-foreground">
            Can&apos;t find the answer you&apos;re looking for? Check out our{" "}
            <Link
              href="/docs"
              className="font-medium text-primary hover:underline"
            >
              documentation
            </Link>{" "}
            or contact our support team at support@siteplanai.com. We typically
            respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
