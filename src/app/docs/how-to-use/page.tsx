import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Download,
  MapPin,
  Search,
  Maximize2,
  RotateCw,
  Trash2,
  Grid3x3,
  Filter,
} from "lucide-react";

export default function HowToUsePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">How to Use</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Complete guide to creating and managing professional site plans with
          SitePlan AI.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Search className="h-6 w-6 text-primary" />
            Finding a Property
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Address Search</h3>
                <p className="text-muted-foreground">
                  Use the address search bar to find any property. As you type,
                  autocomplete suggestions will appear powered by Google Places.
                </p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 space-y-2">
                <p className="text-sm font-medium">Tips for Better Results:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Include street number, name, city, and state</li>
                  <li>• Use official address formats</li>
                  <li>• For rural properties, use GPS coordinates</li>
                  <li>• Click on the suggestion to auto-fill the complete address</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Maximize2 className="h-6 w-6 text-primary" />
            Using the Map Controls
          </h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Zoom Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  Use the + and - buttons to zoom in and out. You can also use
                  your mouse wheel or trackpad gestures for precise control.
                </p>
                <div className="rounded-lg bg-muted/50 p-3 text-sm">
                  <span className="font-medium">Best Practices:</span> Zoom in
                  enough to see property boundaries clearly, but not so close
                  that you lose surrounding context.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <RotateCw className="h-5 w-5" />
                  Rotation Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  Rotate the map to align the property with your preferred
                  orientation. This is especially useful for properties on
                  diagonal streets.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Click rotation buttons to rotate in 45° increments</li>
                  <li>• Use the reset button to return to north-up view</li>
                  <li>• Align the property parallel to the frame for best results</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Map Type Toggle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Switch between different map views:</p>
                <ul className="space-y-1">
                  <li>
                    • <span className="font-medium">Satellite:</span> Aerial
                    imagery showing actual buildings and vegetation
                  </li>
                  <li>
                    • <span className="font-medium">Terrain:</span> Topographic
                    view showing elevation and land features
                  </li>
                  <li>
                    • <span className="font-medium">Roadmap:</span> Street view
                    with property boundaries
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            Capturing Your View
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">
                  Preparing for Site Plan Generation
                </h3>
                <p className="text-muted-foreground">
                  Before generating your site plan, ensure the property is
                  centered and clearly visible in the map frame.
                </p>
              </div>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white font-semibold">
                    1
                  </span>
                  <div>
                    <p className="font-medium">Center the Property</p>
                    <p className="text-sm text-muted-foreground">
                      Drag the map so the property is in the center of the view
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white font-semibold">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Adjust Zoom Level</p>
                    <p className="text-sm text-muted-foreground">
                      Zoom to show the entire property plus some surrounding
                      context
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white font-semibold">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Set Orientation</p>
                    <p className="text-sm text-muted-foreground">
                      Rotate if needed to align property boundaries
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white font-semibold">
                    4
                  </span>
                  <div>
                    <p className="font-medium">Click Generate</p>
                    <p className="text-sm text-muted-foreground">
                      Click &quot;Capture & Generate Site Plan&quot; and wait for AI
                      processing
                    </p>
                  </div>
                </li>
              </ol>
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                <p className="text-sm font-medium text-primary">
                  Generation Time
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Site plan generation typically takes 30-60 seconds. You&apos;ll
                  receive a notification when it&apos;s complete.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Grid3x3 className="h-6 w-6 text-primary" />
            Viewing Your Site Plans
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Site Plans Gallery</h3>
                <p className="text-muted-foreground">
                  Access all your site plans from the{" "}
                  <Link
                    href="/site-plans"
                    className="font-medium text-primary hover:underline"
                  >
                    Gallery page
                  </Link>
                  . Site plans are organized by creation date with the most
                  recent first.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filtering and Search
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <span className="font-medium">Search:</span> Type an
                    address to filter your site plans
                  </li>
                  <li>
                    • <span className="font-medium">Status Filter:</span> Show
                    only drafts, completed, or archived plans
                  </li>
                  <li>
                    • <span className="font-medium">View Toggle:</span> Switch
                    between grid and list views
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Download className="h-6 w-6 text-primary" />
            Downloading Site Plans
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Export Options</h3>
                <p className="text-muted-foreground">
                  Click the Download button on any site plan detail page to
                  export your professional site plan.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Available Formats:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• PNG (Standard quality for presentations)</li>
                  <li>• JPG (Optimized file size)</li>
                  <li>• PDF (Print-ready format)</li>
                  <li>• High-resolution exports (Pro and Elite plans)</li>
                </ul>
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm font-medium">Pro Tip</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Download site plans immediately after generation. You can
                  always re-download from your gallery later.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Trash2 className="h-6 w-6 text-primary" />
            Managing Your Gallery
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Organizing Site Plans</h3>
                <p className="text-muted-foreground">
                  Keep your gallery organized by managing the status of your
                  site plans.
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Status Options:</p>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>
                      • <span className="font-medium">Draft:</span> Work in
                      progress, not yet finalized
                    </li>
                    <li>
                      • <span className="font-medium">Completed:</span> Final
                      version, ready to use
                    </li>
                    <li>
                      • <span className="font-medium">Archived:</span> Old
                      projects you want to keep but hide from main view
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Deleting Site Plans:</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Click the delete button on any site plan. You&apos;ll be asked
                    to confirm before permanent deletion. Note: Deleted plans
                    cannot be recovered, but credits are not refunded.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="rounded-lg border bg-primary/5 p-6">
          <h2 className="mb-2 text-xl font-semibold">Still Have Questions?</h2>
          <p className="text-muted-foreground">
            Check out our{" "}
            <Link
              href="/docs/faq"
              className="font-medium text-primary hover:underline"
            >
              FAQ page
            </Link>{" "}
            for answers to common questions, or contact our support team for
            personalized assistance.
          </p>
        </section>
      </div>
    </div>
  );
}
