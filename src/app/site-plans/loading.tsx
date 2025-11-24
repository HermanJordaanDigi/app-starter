import { Skeleton } from "@/components/ui/skeleton";

export default function SitePlansLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Skeleton className="h-9 w-48" />
          <Skeleton className="h-11 w-64" />
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Skeleton className="h-10 w-full sm:w-96" />
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <Skeleton className="h-10 w-full sm:w-[180px]" />
            <Skeleton className="h-10 w-20" />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <Skeleton className="mb-4 h-4 w-48" />

      {/* Grid View */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-3 rounded-lg border p-4">
            <Skeleton className="h-48 w-full rounded" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-20" />
              <div className="flex gap-2">
                <Skeleton className="h-9 w-20" />
                <Skeleton className="h-9 w-9" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
