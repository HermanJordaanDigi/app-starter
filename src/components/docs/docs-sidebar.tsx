"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookOpen, HelpCircle, Home, Rocket } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const navigation = [
  {
    title: "Documentation",
    items: [
      { title: "Overview", href: "/docs", icon: Home },
      { title: "Getting Started", href: "/docs/getting-started", icon: Rocket },
      { title: "How to Use", href: "/docs/how-to-use", icon: BookOpen },
      { title: "FAQ", href: "/docs/faq", icon: HelpCircle },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ScrollArea className="h-[calc(100vh-4rem)] py-6">
        <div className="px-4 space-y-8">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="mb-3 text-sm font-semibold text-foreground/70">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                        isActive
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
