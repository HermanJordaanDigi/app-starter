"use client";

import { useState, useCallback } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { cn } from "@/lib/utils";

interface InteractiveMapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom?: number;
  onMapChange?: (center: { lat: number; lng: number }, zoom: number) => void;
  className?: string;
}

export function InteractiveMap({
  apiKey,
  center,
  zoom = 18,
  onMapChange,
  className,
}: InteractiveMapProps) {
  const [mapTypeId] = useState<"satellite" | "roadmap">("satellite");

  const handleCameraChange = useCallback(
    (ev: { detail: { center: { lat: number; lng: number }; zoom: number } }) => {
      const newCenter = {
        lat: ev.detail.center.lat,
        lng: ev.detail.center.lng,
      };
      const newZoom = ev.detail.zoom;

      if (onMapChange) {
        onMapChange(newCenter, newZoom);
      }
    },
    [onMapChange]
  );

  return (
    <div className={cn("relative w-full h-[500px] rounded-lg overflow-hidden", className)}>
      {!apiKey ? (
        <div className="flex items-center justify-center h-full bg-muted">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium">Google Maps API Key Required</p>
            <p className="text-xs text-muted-foreground">
              Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env file
            </p>
          </div>
        </div>
      ) : (
        <APIProvider apiKey={apiKey}>
          <Map
            defaultCenter={center}
            defaultZoom={zoom}
            mapId="site-plan-map"
            mapTypeId={mapTypeId}
            disableDefaultUI={true}
            onCameraChanged={handleCameraChange}
            gestureHandling="greedy"
          >
            <AdvancedMarker position={center} />
          </Map>
        </APIProvider>
      )}
    </div>
  );
}
