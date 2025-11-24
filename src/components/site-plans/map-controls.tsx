"use client";

import { Button } from "@/components/ui/button";
import {
  Plus,
  Minus,
  RotateCw,
  RotateCcw,
  Maximize2,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onRotateLeft: () => void;
  onRotateRight: () => void;
  onResetView: () => void;
  onToggleMapType?: () => void;
  className?: string;
}

export function MapControls({
  onZoomIn,
  onZoomOut,
  onRotateLeft,
  onRotateRight,
  onResetView,
  onToggleMapType,
  className,
}: MapControlsProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {/* Zoom Controls */}
      <div className="flex flex-col gap-1 rounded-lg border bg-background p-1 shadow-sm">
        <Button
          size="icon"
          variant="ghost"
          onClick={onZoomIn}
          className="h-8 w-8"
          title="Zoom In"
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={onZoomOut}
          className="h-8 w-8"
          title="Zoom Out"
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>

      {/* Rotate Controls */}
      <div className="flex flex-col gap-1 rounded-lg border bg-background p-1 shadow-sm">
        <Button
          size="icon"
          variant="ghost"
          onClick={onRotateLeft}
          className="h-8 w-8"
          title="Rotate Left"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={onRotateRight}
          className="h-8 w-8"
          title="Rotate Right"
        >
          <RotateCw className="h-4 w-4" />
        </Button>
      </div>

      {/* Map Type Toggle */}
      {onToggleMapType && (
        <div className="flex flex-col gap-1 rounded-lg border bg-background p-1 shadow-sm">
          <Button
            size="icon"
            variant="ghost"
            onClick={onToggleMapType}
            className="h-8 w-8"
            title="Toggle Map Type"
          >
            <Layers className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Reset View */}
      <div className="flex flex-col gap-1 rounded-lg border bg-background p-1 shadow-sm">
        <Button
          size="icon"
          variant="ghost"
          onClick={onResetView}
          className="h-8 w-8"
          title="Reset View"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
