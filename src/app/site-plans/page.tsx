"use client";

import { useState } from "react";
import { useMockData } from "@/contexts/mock-data-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Grid3x3, List, Plus, Search, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SitePlanCard } from "@/components/site-plans/site-plan-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export default function SitePlansPage() {
  const { sitePlans, deleteSitePlan } = useMockData();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "draft" | "completed" | "archived">("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [planToDelete, setPlanToDelete] = useState<string | null>(null);

  // Filter site plans based on search and status
  const filteredPlans = sitePlans.filter((plan) => {
    const matchesSearch = plan.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || plan.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDeleteClick = (id: string) => {
    setPlanToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (planToDelete) {
      deleteSitePlan(planToDelete);
      toast.success("Site plan deleted successfully");
      setPlanToDelete(null);
    }
    setDeleteDialogOpen(false);
  };

  const statusColors = {
    draft: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    archived: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-3xl font-bold">My Site Plans</h1>
          <Link href="/site-plans/new">
            <Button size="lg">
              <Plus className="h-5 w-5 mr-2" />
              Create New Site Plan
            </Button>
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as typeof statusFilter)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>

            {/* View Toggle */}
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground mb-4">
        Showing {filteredPlans.length} of {sitePlans.length} site plans
      </p>

      {/* Content Area */}
      {filteredPlans.length === 0 ? (
        <div className="text-center py-12">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-muted p-6">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold">No site plans found</h3>
            <p className="text-muted-foreground max-w-md text-center">
              {searchQuery || statusFilter !== "all"
                ? "Try adjusting your search or filters"
                : "Get started by creating your first site plan"}
            </p>
            {!searchQuery && statusFilter === "all" && (
              <Link href="/site-plans/new">
                <Button size="lg" className="mt-4">
                  <Plus className="h-5 w-5 mr-2" />
                  Create Your First Site Plan
                </Button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlans.map((plan) => (
                <SitePlanCard key={plan.id} plan={plan} onDelete={handleDeleteClick} />
              ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Preview</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPlans.map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell>
                        <div className="relative w-20 h-14 rounded overflow-hidden">
                          <Image
                            src={plan.thumbnailUrl}
                            alt={plan.address}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        <Link
                          href={`/site-plans/${plan.id}`}
                          className="hover:text-primary transition-colors"
                        >
                          {plan.address}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {formatDistanceToNow(plan.createdAt, { addSuffix: true })}
                      </TableCell>
                      <TableCell>
                        <Badge className={statusColors[plan.status]}>
                          {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/site-plans/${plan.id}`}>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                          </Link>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteClick(plan.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the site plan
              from your gallery.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
