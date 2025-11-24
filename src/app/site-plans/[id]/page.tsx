"use client";

import { useParams, useRouter } from "next/navigation";
import { useMockData } from "@/contexts/mock-data-context";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import {
  ArrowLeft,
  Download,
  Edit,
  Trash2,
  MapPin,
  Calendar,
  Clock,
  Coins,
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

export default function SitePlanDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { sitePlans, deleteSitePlan } = useMockData();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const sitePlan = sitePlans.find((plan) => plan.id === params.id);

  if (!sitePlan) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Site Plan Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The site plan you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button onClick={() => router.push("/site-plans")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    deleteSitePlan(sitePlan.id);
    toast.success("Site plan deleted successfully");
    router.push("/site-plans");
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    toast.loading("Preparing download...");

    // Simulate download delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.dismiss();
    toast.success("Site plan downloaded successfully");
    setIsDownloading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "draft":
        return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "archived":
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
      default:
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/dashboard" className="hover:text-foreground">
            Dashboard
          </Link>
          <span>/</span>
          <Link href="/site-plans" className="hover:text-foreground">
            Site Plans
          </Link>
          <span>/</span>
          <span className="text-foreground">{sitePlan.address}</span>
        </nav>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{sitePlan.address}</h1>
              <Badge className={getStatusColor(sitePlan.status)}>
                {sitePlan.status.charAt(0).toUpperCase() + sitePlan.status.slice(1)}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>
                {sitePlan.lat.toFixed(6)}, {sitePlan.lng.toFixed(6)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() => toast.info("Edit functionality coming soon")}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="outline"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              <Download className="mr-2 h-4 w-4" />
              {isDownloading ? "Downloading..." : "Download"}
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(true)}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Display Section */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Property Location</h2>
              <div className="h-[400px] rounded-lg overflow-hidden border">
                {GOOGLE_MAPS_API_KEY ? (
                  <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
                    <Map
                      defaultCenter={{ lat: sitePlan.lat, lng: sitePlan.lng }}
                      defaultZoom={18}
                      mapTypeId="satellite"
                      gestureHandling="cooperative"
                      disableDefaultUI={false}
                      mapId="site-plan-detail-map"
                    >
                      <Marker
                        position={{ lat: sitePlan.lat, lng: sitePlan.lng }}
                      />
                    </Map>
                  </APIProvider>
                ) : (
                  <div className="flex items-center justify-center h-full bg-muted">
                    <p className="text-muted-foreground">
                      Google Maps API key not configured
                    </p>
                  </div>
                )}
              </div>
            </Card>

            {/* Generated Image Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Generated Site Plan</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    toast.info("Regenerate functionality coming soon")
                  }
                >
                  Regenerate
                </Button>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted">
                {sitePlan.generatedImageUrl ? (
                  <Image
                    src={sitePlan.generatedImageUrl}
                    alt={`Site plan for ${sitePlan.address}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">
                        No generated site plan yet
                      </p>
                      <Button
                        size="sm"
                        onClick={() =>
                          toast.info("Generate functionality coming soon")
                        }
                      >
                        Generate Now
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Details Panel - Right Side */}
          <div className="space-y-6">
            {/* Metadata Card */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Created</p>
                    <p className="font-medium">
                      {format(new Date(sitePlan.createdAt), "PPP")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Last Modified
                    </p>
                    <p className="font-medium">
                      {format(new Date(sitePlan.updatedAt), "PPP")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Coins className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Credits Used</p>
                    <p className="font-medium">1 credit</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 mt-0.5">
                    <div
                      className={`h-full w-full rounded-full ${
                        sitePlan.status === "completed"
                          ? "bg-green-500"
                          : sitePlan.status === "draft"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-medium capitalize">{sitePlan.status}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions Card */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={handleDownload}
                  disabled={isDownloading}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Site Plan
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => toast.info("Share functionality coming soon")}
                >
                  Share
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => toast.info("Export functionality coming soon")}
                >
                  Export as PDF
                </Button>
              </div>
            </Card>

            {/* Back Button */}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push("/site-plans")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the site plan for{" "}
              <span className="font-semibold">{sitePlan.address}</span>. This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
