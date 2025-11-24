"use client";

import { MockSitePlan } from "@/lib/mock-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

interface SitePlanCardProps {
  plan: MockSitePlan;
  onDelete: (id: string) => void;
}

export function SitePlanCard({ plan, onDelete }: SitePlanCardProps) {
  const statusColors = {
    draft: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    archived: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/site-plans/${plan.id}`}>
        <div className="relative h-48 bg-muted">
          <Image
            src={plan.thumbnailUrl}
            alt={plan.address}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/site-plans/${plan.id}`}>
          <h3 className="font-semibold text-lg line-clamp-2 mb-2 hover:text-primary transition-colors">
            {plan.address}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mb-2">
          <Badge className={statusColors[plan.status]}>
            {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Created {formatDistanceToNow(plan.createdAt, { addSuffix: true })}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link href={`/site-plans/${plan.id}`} className="flex-1">
          <Button variant="default" size="sm" className="w-full">
            <Eye className="h-4 w-4 mr-2" />
            View
          </Button>
        </Link>
        <Button
          variant="destructive"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(plan.id);
          }}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
