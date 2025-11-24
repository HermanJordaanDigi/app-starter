"use client";

import Link from "next/link";
import { MapPin, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    setIsSubscribing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thanks for subscribing! (Demo mode - no actual subscription)");
    setEmail("");
    setIsSubscribing(false);
  };

  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg">SitePlan AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered site plan generation for professionals and developers.
              Create professional site plans in minutes, not hours.
            </p>

            {/* Newsletter Signup */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <p className="text-sm font-medium">Stay updated</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="max-w-xs"
                  disabled={isSubscribing}
                />
                <Button type="submit" size="sm" disabled={isSubscribing}>
                  {isSubscribing ? "..." : "Subscribe"}
                </Button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
                onClick={(e) => {
                  e.preventDefault();
                  toast.info("Social links coming soon");
                }}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
                onClick={(e) => {
                  e.preventDefault();
                  toast.info("Social links coming soon");
                }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
                onClick={(e) => {
                  e.preventDefault();
                  toast.info("Social links coming soon");
                }}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@siteplanai.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/legal/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => toast.info("About page coming soon")}
                  className="hover:text-foreground transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => toast.info("Contact page coming soon")}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => toast.info("Blog coming soon")}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} SitePlan AI. All rights reserved.</p>
            <p className="text-xs">Made with Next.js and shadcn/ui</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
