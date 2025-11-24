# SitePlan AI - Implementation Plan

## Overview

This implementation plan outlines the step-by-step process to transform the existing boilerplate into SitePlan AI. The plan is divided into phases, with each phase containing actionable tasks with checkboxes for progress tracking.

**Target:** UI-only implementation with mock data and demo mode
**Estimated Time:** 18-20 hours
**Approach:** Iterative development with lint/typecheck after each phase

---

## Phase 1: Project Setup & Cleanup (2-3 hours) ✅

### 1.1 Remove Boilerplate Components & Pages

- [x] Delete `src/app/chat/page.tsx` (AI chat interface)
- [x] Delete `src/app/api/chat/route.ts` (chat API endpoint)
- [x] Delete `src/app/api/diagnostics/route.ts` (diagnostics endpoint)
- [x] Delete `src/components/setup-checklist.tsx`
- [x] Delete `src/components/starter-prompt-modal.tsx`
- [x] Delete `src/components/ui/github-stars.tsx`
- [x] Delete `src/hooks/use-diagnostics.ts`

### 1.2 Install Additional UI Components

- [x] Run `npx shadcn@latest add input`
- [x] Run `npx shadcn@latest add label`
- [x] Run `npx shadcn@latest add textarea`
- [x] Run `npx shadcn@latest add select`
- [x] Run `npx shadcn@latest add table`
- [x] Run `npx shadcn@latest add tabs`
- [x] Run `npx shadcn@latest add alert`
- [x] Run `npx shadcn@latest add toast`
- [x] Run `npx shadcn@latest add form`
- [x] Run `npx shadcn@latest add scroll-area`
- [x] Run `npx shadcn@latest add slider`
- [x] Run `npx shadcn@latest add sonner` (for better toast notifications)

### 1.3 Rebrand Core Components

- [x] Update `src/components/site-header.tsx`:
  - [x] Change "Starter Kit" to "SitePlan AI"
  - [x] Replace Bot icon with MapPin icon from lucide-react
  - [x] Update navigation links (Home, Pricing, Docs, Dashboard)
- [x] Update `src/components/site-footer.tsx`:
  - [x] Remove GitHub stars component
  - [x] Add Product, Legal, and Company link sections
  - [x] Add placeholder social media icons
- [x] Update `src/app/layout.tsx`:
  - [x] Change metadata title to "SitePlan AI - AI-Powered Site Plan Generator"
  - [x] Update description for SEO
  - [x] Add Open Graph tags

### 1.4 Verify Setup

- [x] Run `npm run lint` - ensure no errors
- [x] Run `npm run typecheck` - ensure no errors
- [x] Commit changes: "Phase 1: Project cleanup and rebranding"

---

## Phase 2: Mock Data System (1-2 hours) ✅

### 2.1 Create Mock Data Infrastructure

- [x] Create `src/lib/mock-data.ts`
- [x] Define TypeScript interfaces:
  - [x] `MockUser` interface (id, name, email, avatar, credits, plan, createdAt)
  - [x] `MockSitePlan` interface (id, userId, address, lat, lng, status, createdAt, updatedAt, thumbnailUrl, generatedImageUrl)
  - [x] `PricingTier` interface (name, credits, price, features)
- [x] Create mock user data (single user for demo):
  ```typescript
  name: "Demo User"
  email: "demo@siteplanai.com"
  credits: 75
  plan: "Pro"
  avatar: placeholder avatar URL
  ```
- [x] Create mock site plans array (5-6 example plans):
  - [x] Mix of statuses (draft, completed, archived)
  - [x] Real-looking addresses
  - [x] Varied creation dates
  - [x] Placeholder thumbnail and generated image URLs
- [x] Create pricing tiers data (Basic, Pro, Elite)

### 2.2 Create Mock Data Helpers

- [x] Create `getMockUser()` function
- [x] Create `getMockSitePlans()` function
- [x] Create `getMockSitePlan(id)` function
- [x] Create `getPricingTiers()` function
- [x] Create in-memory store utilities:
  - [x] `addSitePlan(plan)` - add to array
  - [x] `updateSitePlan(id, updates)` - update existing
  - [x] `deleteSitePlan(id)` - remove from array
  - [x] `updateUserCredits(amount)` - adjust credit balance

### 2.3 Create Mock Data Context (Optional)

- [x] Create `src/contexts/mock-data-context.tsx` (if using Context API)
- [x] Or create `src/store/mock-data-store.ts` (if using Zustand)
- [x] Implement provider/store with:
  - [x] User state
  - [x] Site plans state
  - [x] Actions (add, update, delete, updateCredits)
- [x] Wrap app with provider in `src/app/layout.tsx`

### 2.4 Verify Mock Data

- [x] Ensure all mock data has proper TypeScript types
- [x] Test that helper functions return expected data
- [x] Run `npm run typecheck` - ensure no errors
- [x] Commit changes: "Phase 2: Mock data system"

---

## Phase 3: Demo Mode & Authentication Bypass (1 hour) ✅

### 3.1 Create Demo Mode Banner

- [x] Create `src/components/demo-mode-banner.tsx`
- [x] Add styling: fixed position at top, bright color (amber/yellow)
- [x] Add text: "🎭 Demo Mode Active - Using mock data (no persistence)"
- [x] Add close button (optional)
- [x] Make responsive

### 3.2 Implement Demo Mode State

- [x] Create `src/contexts/demo-mode-context.tsx`
- [x] Add `isDemoMode` state (default: true)
- [x] Add `toggleDemoMode()` function
- [x] Add provider to `src/app/layout.tsx`

### 3.3 Update Layout to Show Banner

- [x] Conditionally render `<DemoModeBanner />` in layout when demo mode is active
- [x] Ensure banner doesn't break layout/scroll

### 3.4 Update Auth Flow for Demo Mode

- [x] Update protected pages to check demo mode first
- [x] If demo mode: use mock user, skip auth checks
- [x] If not demo mode: use existing Better Auth flow
- [x] Update `src/components/auth/user-profile.tsx` to show mock user in demo mode

### 3.5 Verify Demo Mode

- [x] Test that demo mode shows banner
- [x] Test that app works without authentication
- [x] Test that mock user displays in header
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 3: Demo mode implementation"

---

## Phase 4: Landing Page (2-3 hours) ✅

### 4.1 Clear Existing Home Page

- [x] Open `src/app/page.tsx`
- [x] Remove all boilerplate content
- [x] Keep imports and basic structure

### 4.2 Create Hero Section

- [x] Add hero container with gradient background
- [x] Add main headline: "Generate Professional Site Plans in Minutes"
- [x] Add subheadline: "AI-powered property mapping and site plan generation"
- [x] Add two CTA buttons:
  - [x] "Get Started Free" (links to /dashboard or /site-plans/new)
  - [x] "View Pricing" (links to /pricing)
- [x] Add hero image/mockup (right side on desktop, below on mobile)
- [x] Make section responsive

### 4.3 Create Features Section

- [x] Add section title: "Why Choose SitePlan AI?"
- [x] Create 4 feature cards:
  - [x] 🗺️ Interactive Mapping - "Locate any property with Google Maps integration"
  - [x] 🤖 AI-Powered Generation - "Advanced AI creates accurate site plans"
  - [x] 📐 Professional Quality - "Export-ready plans for presentations"
  - [x] 💾 Save & Export - "Store unlimited plans in your gallery"
- [x] Use grid layout (2x2 on desktop, 1 column on mobile)
- [x] Add icons from lucide-react
- [x] Style cards with shadcn/ui Card component

### 4.4 Create "How It Works" Section

- [x] Add section title: "Create Your Site Plan in 3 Simple Steps"
- [x] Create 3 step cards:
  - [x] Step 1: "Enter Address" - "Search for any property address"
  - [x] Step 2: "Capture View" - "Adjust the map and capture your desired view"
  - [x] Step 3: "Get Site Plan" - "AI generates your professional site plan"
- [x] Add step numbers (1, 2, 3)
- [x] Add screenshot/illustration placeholders
- [x] Make responsive (vertical stack on mobile)

### 4.5 Create Pricing Preview Section

- [x] Add section title: "Simple, Credit-Based Pricing"
- [x] Create `src/components/pricing-card.tsx` component
- [x] Display 3 pricing cards:
  - [x] Basic: 30 credits, $5, "Perfect for individuals"
  - [x] Pro: 100 credits, $10, "Best for professionals" (add "Popular" badge)
  - [x] Elite: 200 credits, $29, "For power users"
- [x] Add "Get Started" buttons (link to /pricing or demo signup)
- [x] Highlight Pro tier as recommended
- [x] Make responsive (stack on mobile)

### 4.6 Create Final CTA Section

- [x] Add compelling final message
- [x] Add "Start Creating Site Plans" button
- [x] Add secondary text about free demo/credits
- [x] Style with gradient background

### 4.7 Polish Landing Page

- [x] Add smooth scroll animations (optional)
- [x] Ensure spacing and typography are consistent
- [x] Test dark mode appearance
- [x] Ensure all sections are responsive
- [x] Add proper semantic HTML (h1, h2, section tags)

### 4.8 Verify Landing Page

- [x] Test on desktop (1920px, 1440px, 1024px)
- [x] Test on tablet (768px)
- [x] Test on mobile (375px)
- [x] Verify all buttons link correctly
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 4: Landing page"

---

## Phase 5: Dashboard Page (2 hours) ✅

### 5.1 Clear Existing Dashboard

- [x] Open `src/app/dashboard/page.tsx`
- [x] Remove boilerplate dashboard content
- [x] Set up demo mode check

### 5.2 Create Stats Cards Section

- [x] Create `src/components/dashboard/stats-card.tsx` component
- [x] Create 3 stat cards in top row:
  - [x] Credits Remaining:
    - [x] Display current credit balance
    - [x] Add progress bar showing usage
    - [x] Add icon (Coins or CreditCard)
  - [x] Site Plans Created:
    - [x] Display total count of plans
    - [x] Add icon (FileText or Map)
  - [x] Current Plan:
    - [x] Display plan tier (Basic/Pro/Elite)
    - [x] Add badge styling
    - [x] Add icon (Crown or Star)
- [x] Use grid layout (3 columns on desktop, 1 on mobile)

### 5.3 Create Quick Actions Section

- [x] Add section title: "Quick Actions"
- [x] Create two prominent buttons:
  - [x] "Create New Site Plan" (primary, large, links to /site-plans/new)
  - [x] "Buy More Credits" (secondary, links to /pricing)
- [x] Add icons to buttons
- [x] Make responsive

### 5.4 Create Recent Site Plans Section

- [x] Add section title: "Recent Site Plans"
- [x] Create table displaying 5 most recent plans:
  - [x] Columns: Thumbnail, Address, Created Date, Status, Actions
  - [x] Use shadcn/ui Table component
  - [x] Thumbnail: small image preview
  - [x] Address: clickable link to detail view
  - [x] Status: badge (draft/completed/archived)
  - [x] Actions: View button
- [x] Add "View All Site Plans" link at bottom (to /site-plans)
- [x] Show empty state if no plans exist

### 5.5 Fetch Mock Data

- [x] Import mock data helpers
- [x] Get mock user data
- [x] Get mock site plans (filter to 5 most recent)
- [x] Calculate stats from mock data

### 5.6 Polish Dashboard

- [x] Ensure consistent spacing
- [x] Add loading skeletons (optional for demo)
- [x] Test dark mode
- [x] Make fully responsive

### 5.7 Verify Dashboard

- [x] Test all links navigate correctly
- [x] Verify stats display properly
- [x] Test table responsiveness
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 5: Dashboard page"

---

## Phase 6: Create Site Plan Flow (3-4 hours) ✅

### 6.1 Set Up New Site Plan Page

- [x] Create `src/app/site-plans/new/page.tsx`
- [x] Set up page layout with title: "Create New Site Plan"
- [x] Add back button to dashboard
- [x] Check demo mode and authentication

### 6.2 Create Address Autocomplete Component

- [x] Create `src/components/site-plans/address-autocomplete.tsx`
- [x] Import `use-places-autocomplete` hook
- [x] Create input field with label "Property Address"
- [x] Implement autocomplete dropdown
- [x] Handle selection to get coordinates (lat/lng)
- [x] Add clear button
- [x] Style with shadcn/ui Input component

### 6.3 Create Interactive Map Component

- [x] Create `src/components/site-plans/interactive-map.tsx`
- [x] Import from `@vis.gl/react-google-maps`
- [x] Set up `<Map>` component:
  - [x] Default center and zoom
  - [x] Satellite view (mapTypeId)
  - [x] Marker at selected location
- [x] Add zoom controls (+/- buttons)
- [x] Add map type toggle (satellite/terrain)
- [x] Make map full-width, fixed height
- [x] Ensure responsive

### 6.4 Create Map Controls Component

- [x] Create `src/components/site-plans/map-controls.tsx`
- [x] Add zoom controls (+ and - buttons)
- [x] Add rotate controls (rotate left/right buttons)
- [x] Add reset view button
- [x] Position controls over map (top-right or bottom-right)
- [x] Style with shadcn/ui Button component

### 6.5 Implement Capture Flow

- [x] Add "Capture & Generate Site Plan" button (large, primary)
- [x] Create click handler:
  - [x] Show loading spinner/state (3 seconds)
  - [x] Display toast message: "Coming soon - AI generation in development"
  - [x] Option to "Save as Draft" button appears
- [x] Implement save as draft:
  - [x] Create new site plan object
  - [x] Add to mock data store (in-memory)
  - [x] Show success toast
  - [x] Navigate to dashboard or gallery

### 6.6 Connect Address Input to Map

- [x] When address is selected, update map center
- [x] Add/move marker to new location
- [x] Auto-zoom to appropriate level
- [x] Store address and coordinates in component state

### 6.7 Add Form State Management

- [x] Set up state for:
  - [x] Selected address (string)
  - [x] Coordinates (lat/lng)
  - [x] Map zoom level
  - [x] Map rotation (heading)
  - [x] Loading state
- [x] Handle state updates from interactions

### 6.8 Polish Create Flow

- [x] Add helpful instructions/tips
- [x] Add validation (require address before capture)
- [x] Ensure smooth transitions
- [x] Test all interactions
- [x] Make fully responsive

### 6.9 Verify Create Flow

- [x] Test address search and selection
- [x] Test map interactions (zoom, pan, rotate)
- [x] Test capture button flow
- [x] Test save as draft
- [x] Verify navigation works
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 6: Create site plan flow"

---

## Phase 7: Site Plans Gallery (2 hours) ✅

### 7.1 Set Up Gallery Page

- [x] Create `src/app/site-plans/page.tsx`
- [x] Set up page layout with title: "My Site Plans"
- [x] Check demo mode and authentication

### 7.2 Create Site Plan Card Component

- [x] Create `src/components/site-plans/site-plan-card.tsx`
- [x] Display in card:
  - [x] Thumbnail image
  - [x] Address (truncated if long)
  - [x] Created date (formatted)
  - [x] Status badge (draft/completed/archived)
  - [x] Quick action buttons (View, Delete)
- [x] Make card clickable (navigate to detail view)
- [x] Add hover effects
- [x] Style with shadcn/ui Card

### 7.3 Implement Grid View

- [x] Create grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- [x] Map through site plans and render cards
- [x] Add proper spacing and responsive behavior

### 7.4 Implement List View

- [x] Create list/table layout (alternative view)
- [x] Show same information in table format
- [x] Use shadcn/ui Table component

### 7.5 Add View Toggle

- [x] Create toggle button (Grid/List icons)
- [x] Implement state for current view
- [x] Switch between grid and list display
- [x] Position toggle in header area

### 7.6 Add Search Functionality

- [x] Add search input field (with icon)
- [x] Implement filter logic by address
- [x] Update displayed plans based on search
- [x] Add debouncing for search (optional)
- [x] Show "No results" message when appropriate

### 7.7 Add Status Filter

- [x] Create filter dropdown or tabs
- [x] Options: All, Draft, Completed, Archived
- [x] Implement filter logic
- [x] Update displayed plans based on filter
- [x] Show active filter state

### 7.8 Add Empty State

- [x] Create empty state component
- [x] Display when no site plans exist
- [x] Show helpful message: "No site plans yet"
- [x] Add "Create Your First Site Plan" button
- [x] Add illustration or icon

### 7.9 Implement Actions

- [x] View action: navigate to `/site-plans/[id]`
- [x] Delete action:
  - [x] Show confirmation dialog
  - [x] Remove from mock data store
  - [x] Show success toast
  - [x] Update view

### 7.10 Verify Gallery

- [x] Test grid and list views
- [x] Test search functionality
- [x] Test status filter
- [x] Test delete action with confirmation
- [x] Test empty state
- [x] Ensure responsive on all screen sizes
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 7: Site plans gallery"

---

## Phase 8: Site Plan Detail View (2 hours) ✅

### 8.1 Set Up Detail Page

- [x] Create `src/app/site-plans/[id]/page.tsx`
- [x] Set up dynamic route parameter handling
- [x] Get site plan by ID from mock data
- [x] Handle not found case (redirect or 404)

### 8.2 Create Header Section

- [x] Display address as main heading (h1)
- [x] Add status badge next to title
- [x] Add breadcrumb navigation (Dashboard > Site Plans > [Address])
- [x] Make responsive

### 8.3 Create Action Buttons

- [x] Add button group:
  - [x] Edit button (navigate to edit mode or show "Coming soon")
  - [x] Download button (simulate download)
  - [x] Delete button (show confirmation, then delete)
- [x] Position buttons in header area
- [x] Use shadcn/ui Button component
- [x] Add appropriate icons

### 8.4 Create Map Display Section

- [x] Add section: "Property Location"
- [x] Display map (read-only, no controls)
- [x] Show marker at property location
- [x] Set appropriate zoom level
- [x] Make responsive

### 8.5 Create Details Panel

- [x] Create card/section for metadata:
  - [x] Created date (formatted)
  - [x] Last modified date (formatted)
  - [x] Credits used (show "1 credit")
  - [x] Status (with badge)
- [x] Use grid or stacked layout
- [x] Style with shadcn/ui Card

### 8.6 Create Generated Image Section

- [x] Add section: "Generated Site Plan"
- [x] Display mock generated image (large)
- [x] Add image viewer/zoom functionality (optional)
- [x] Add "Regenerate" button (shows "Coming soon" toast)
- [x] Make image responsive

### 8.7 Implement Download Action

- [x] Create download handler
- [x] Simulate file download:
  - [x] Show loading toast
  - [x] Delay 1-2 seconds
  - [x] Show success toast: "Site plan downloaded"
  - [x] Could trigger actual download of mock image (optional)

### 8.8 Implement Delete Action

- [x] Create delete handler
- [x] Show confirmation dialog:
  - [x] Message: "Are you sure you want to delete this site plan?"
  - [x] Cancel and Delete buttons
- [x] On confirm:
  - [x] Remove from mock data store
  - [x] Show success toast
  - [x] Navigate back to gallery

### 8.9 Add Notes Section (Optional)

- [ ] Add textarea for notes
- [ ] Save notes to mock data (in-memory)
- [ ] Display existing notes if any

### 8.10 Verify Detail View

- [x] Test navigation from gallery
- [x] Test all action buttons
- [x] Test delete confirmation
- [x] Test download simulation
- [x] Verify map displays correctly
- [x] Test responsiveness
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 8: Site plan detail view"

---

## Phase 9: Pricing Page & Credit System UI (2 hours) ✅

### 9.1 Set Up Pricing Page

- [x] Create `src/app/pricing/page.tsx`
- [x] Add page title: "Choose Your Plan"
- [x] Add subtitle explaining credit system

### 9.2 Update Pricing Card Component

- [x] Open `src/components/pricing-card.tsx` (or create it)
- [x] Display pricing card with:
  - [x] Plan name (Basic/Pro/Elite)
  - [x] Credits amount (large, prominent)
  - [x] Price (large, prominent)
  - [x] Features list (checkmarks)
  - [x] "Buy Now" button
- [x] Add "Popular" badge for Pro tier
- [x] Style with shadcn/ui Card
- [x] Make responsive

### 9.3 Create Pricing Grid

- [x] Display 3 pricing cards in grid
- [x] Layout: 3 columns on desktop, 1 on mobile
- [x] Center and align cards
- [x] Highlight Pro tier (border, shadow, scale)

### 9.4 Add Features Comparison

- [x] List features for each tier:
  - Basic: "30 site plans", "Basic support", "Standard export"
  - Pro: "100 site plans", "Priority support", "HD export", "Advanced features"
  - Elite: "200 site plans", "Premium support", "4K export", "API access", "White label"
- [x] Use checkmark icons

### 9.5 Create Buy Credits Modal

- [x] Create `src/components/credits/buy-credits-modal.tsx`
- [x] Use shadcn/ui Dialog component
- [x] Display selected package details
- [x] Show total cost
- [x] Add "Purchase" and "Cancel" buttons
- [x] Implement purchase handler:
  - [x] Show loading state
  - [x] Add credits to mock user balance
  - [x] Show success toast
  - [x] Close modal

### 9.6 Connect "Buy Now" Buttons

- [x] onClick opens modal with selected package
- [x] Pass package data to modal
- [x] Handle modal open/close state

### 9.7 Create Credit Display Component

- [x] Create `src/components/credits/credit-display.tsx`
- [x] Show current credit balance
- [x] Add icon (Coins or Zap)
- [x] Add "Buy More" link
- [x] Make compact for header use

### 9.8 Add Credit Display to Header/Dashboard

- [x] Import credit display component
- [x] Add to site header (next to user profile)
- [x] Ensure it updates when credits change
- [x] Make responsive (compact display)

### 9.9 Add FAQ Section to Pricing

- [x] Add "Frequently Asked Questions" section
- [x] Use shadcn/ui Accordion component
- [x] Add 7 common questions:
  - "How do credits work?"
  - "Do credits expire?"
  - "Can I get a refund?"
  - "What if I run out of credits?"
  - "Can I upgrade my plan?"
  - "What payment methods do you accept?"
  - "Is there a free trial?"

### 9.10 Verify Pricing Page

- [x] Test all pricing cards display correctly
- [x] Test "Buy Now" opens modal
- [x] Test mock purchase flow
- [x] Verify credit balance updates
- [x] Test credit display in header
- [x] Ensure responsive on all screens
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 9: Pricing page and credit system UI"

---

## Phase 10: Documentation Pages (2-3 hours) ✅

### 10.1 Set Up Documentation Structure

- [x] Create `src/app/docs/layout.tsx` for docs layout
- [x] Create `src/components/docs/docs-sidebar.tsx` for navigation
- [x] Set up sidebar with links to all doc pages

### 10.2 Create Documentation Hub

- [x] Create `src/app/docs/page.tsx`
- [x] Add welcome message
- [x] Add overview of documentation
- [x] Add quick links to main sections:
  - Getting Started
  - How to Use
  - FAQ
- [x] Style with cards for each section

### 10.3 Create Getting Started Guide

- [x] Create `src/app/docs/getting-started/page.tsx`
- [x] Add content:
  - [x] Welcome message
  - [x] Prerequisites (account, browser, etc.)
  - [x] Step 1: Sign up
  - [x] Step 2: Purchase credits
  - [x] Step 3: Create first site plan
  - [x] Next steps
- [x] Add screenshots/illustrations (placeholders)
- [x] Use proper heading hierarchy

### 10.4 Create How to Use Guide

- [x] Create `src/app/docs/how-to-use/page.tsx`
- [x] Add sections:
  - [x] Finding a Property
  - [x] Using the Map Controls
  - [x] Capturing Your View
  - [x] Viewing Your Site Plans
  - [x] Downloading Site Plans
  - [x] Managing Your Gallery
- [x] Add step-by-step instructions
- [x] Add tips and best practices
- [x] Use proper formatting (numbered lists, code blocks if needed)

### 10.5 Create FAQ Page

- [x] Create `src/app/docs/faq/page.tsx`
- [x] Add sections:
  - [x] General Questions
  - [x] Account & Billing
  - [x] Using the App
  - [x] Technical Issues
- [x] Add 10-15 common Q&A pairs
- [x] Use shadcn/ui Accordion for collapsible answers
- [x] Add search functionality (optional)

### 10.6 Style Documentation Pages

- [x] Ensure consistent typography
- [x] Add proper spacing between sections
- [x] Style code blocks (if any)
- [x] Add table of contents for long pages (optional)
- [x] Ensure readability in dark mode

### 10.7 Implement Docs Sidebar

- [x] Create navigation tree
- [x] Highlight active page
- [x] Make sidebar collapsible on mobile
- [x] Add expand/collapse for sections
- [x] Sticky positioning on desktop

### 10.8 Add Docs Navigation

- [x] Add "Edit this page" link (GitHub, optional)
- [x] Add "Previous/Next" navigation at bottom
- [x] Add breadcrumbs at top

### 10.9 Verify Documentation

- [x] Test all internal links work
- [x] Test sidebar navigation
- [x] Test mobile responsiveness
- [x] Verify content is readable
- [x] Check dark mode appearance
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 10: Documentation pages"

---

## Phase 11: Legal Pages (1-2 hours) ✅

### 11.1 Set Up Legal Pages Structure

- [x] Create `src/app/legal` directory
- [x] Plan for shared layout (optional)

### 11.2 Create Privacy Policy Page

- [x] Create `src/app/legal/privacy/page.tsx`
- [x] Add page title: "Privacy Policy"
- [x] Add last updated date
- [x] Add content sections:
  - [x] Introduction
  - [x] Information We Collect
  - [x] How We Use Your Information
  - [x] Data Storage and Security
  - [x] Third-Party Services (Google Maps, OAuth)
  - [x] Cookies and Tracking
  - [x] Your Rights
  - [x] Changes to Policy
  - [x] Contact Information
- [x] Use standard privacy policy template
- [x] Replace placeholders with "SitePlan AI"

### 11.3 Create Terms of Service Page

- [x] Create `src/app/legal/terms/page.tsx`
- [x] Add page title: "Terms of Service"
- [x] Add last updated date
- [x] Add content sections:
  - [x] Agreement to Terms
  - [x] Use License
  - [x] Credit System and Purchases
  - [x] User Responsibilities
  - [x] Intellectual Property
  - [x] Service Availability
  - [x] Limitation of Liability
  - [x] Termination
  - [x] Governing Law
  - [x] Changes to Terms
  - [x] Contact Information
- [x] Use standard ToS template

### 11.4 Create Cookie Policy Page

- [x] Create `src/app/legal/cookies/page.tsx`
- [x] Add page title: "Cookie Policy"
- [x] Add last updated date
- [x] Add content sections:
  - [x] What Are Cookies
  - [x] How We Use Cookies
  - [x] Types of Cookies We Use (Essential, Analytics, Preferences)
  - [x] Third-Party Cookies
  - [x] Managing Cookies
  - [x] Changes to Policy
  - [x] Contact Information

### 11.5 Style Legal Pages

- [x] Use consistent typography
- [x] Add table of contents at top (optional)
- [x] Ensure proper heading hierarchy
- [x] Add spacing between sections
- [x] Make text readable (max-width for content)
- [x] Test dark mode appearance

### 11.6 Add Legal Links to Footer

- [x] Update `src/components/site-footer.tsx`
- [x] Add "Legal" section
- [x] Link to Privacy Policy
- [x] Link to Terms of Service
- [x] Link to Cookie Policy

### 11.7 Verify Legal Pages

- [x] Test all links from footer
- [x] Verify content is readable
- [x] Test responsiveness
- [x] Check for placeholder text that needs updating
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 11: Legal pages"

---

## Phase 12: Profile Page (1 hour) ✅

### 12.1 Update Existing Profile Page

- [x] Open `src/app/profile/page.tsx`
- [x] Simplify existing boilerplate profile

### 12.2 Create User Info Card

- [x] Create card displaying:
  - [x] Profile picture/avatar (large)
  - [x] Full name
  - [x] Email address
  - [x] Member since date
- [x] Use shadcn/ui Card and Avatar components
- [x] Add "Edit Profile" button (placeholder/coming soon)

### 12.3 Create Plan & Credits Card

- [x] Create card displaying:
  - [x] Current plan tier (Basic/Pro/Elite)
  - [x] Plan badge with styling
  - [x] Current credit balance
  - [x] Credit progress bar
  - [x] "Upgrade Plan" button (links to pricing)
  - [x] "Buy More Credits" button (opens modal)
- [x] Use shadcn/ui Card component

### 12.4 Create Usage Statistics Card

- [x] Create card displaying:
  - [x] Total site plans created
  - [x] Total credits used
  - [x] Account created date
  - [x] Last activity date (mock)
- [x] Use grid layout for stats
- [x] Add icons for each stat

### 12.5 Create Account Settings Section

- [x] Add section with placeholder buttons:
  - [x] "Change Password" (coming soon)
  - [x] "Email Preferences" (coming soon)
  - [x] "Delete Account" (coming soon, destructive styling)
- [x] Add informational text about demo mode

### 12.6 Layout Profile Page

- [x] Arrange cards in responsive grid
- [x] 2 columns on desktop, 1 on mobile
- [x] Consistent spacing
- [x] Add page title "My Profile"

### 12.7 Verify Profile Page

- [x] Test all links work correctly
- [x] Verify mock data displays properly
- [x] Test responsiveness
- [x] Check dark mode appearance
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 12: Profile page"

---

## Phase 13: Navigation & Footer Polish (1 hour) ✅

### 13.1 Polish Site Header

- [x] Open `src/components/site-header.tsx`
- [x] Ensure navigation links are correct:
  - [x] Home (/)
  - [x] Pricing (/pricing)
  - [x] Docs (/docs)
  - [x] Dashboard (/dashboard) - protected
- [x] Add active link styling
- [x] Ensure user profile dropdown works
- [x] Add credit display to header
- [x] Test mobile menu (hamburger)
- [x] Ensure responsive behavior

### 13.2 Polish Site Footer

- [x] Open `src/components/site-footer.tsx`
- [x] Organize footer into sections:
  - [x] Product: Features, Pricing, Docs
  - [x] Legal: Privacy, Terms, Cookies
  - [x] Company: About, Contact, Blog (placeholders)
  - [x] Social: Twitter, LinkedIn, GitHub (placeholders)
- [x] Add newsletter signup form (non-functional):
  - [x] Email input
  - [x] Subscribe button
  - [x] Shows success toast on submit
- [x] Add copyright text
- [x] Ensure responsive layout

### 13.3 Add User Profile Dropdown Items

- [x] Open `src/components/auth/user-profile.tsx`
- [x] Ensure dropdown menu includes:
  - [x] User info (name, email)
  - [x] Dashboard link
  - [x] Gallery link (/site-plans)
  - [x] Profile link
  - [x] Credits display
  - [x] Separator
  - [x] Sign Out button
- [x] Test all links navigate correctly

### 13.4 Implement Active Link Highlighting

- [x] Use `usePathname()` from next/navigation
- [x] Highlight current page in navigation
- [x] Add visual indicator (underline, color change, etc.)

### 13.5 Test Navigation Flow

- [x] Test navigation from every page
- [x] Test breadcrumbs work (where applicable)
- [x] Test back buttons
- [x] Test mobile navigation
- [x] Verify all links are correct

### 13.6 Verify Navigation & Footer

- [x] Test all header links
- [x] Test all footer links
- [x] Test user dropdown menu
- [x] Test mobile responsiveness
- [x] Run `npm run lint` and `npm run typecheck`
- [x] Commit changes: "Phase 13: Navigation and footer polish"

---

## Phase 14: UI Polish & Refinement (2-3 hours)

### 14.1 Add Loading States

- [ ] Create loading skeleton components:
  - [ ] Card skeleton
  - [ ] Table skeleton
  - [ ] Stats skeleton
- [ ] Add loading states to:
  - [ ] Dashboard (brief loading simulation)
  - [ ] Gallery page
  - [ ] Detail page
  - [ ] Map component
- [ ] Use shadcn/ui Skeleton component

### 14.2 Add Empty States

- [ ] Create empty state components:
  - [ ] No site plans (gallery)
  - [ ] No search results
  - [ ] No recent activity
- [ ] Add helpful messages
- [ ] Add call-to-action buttons
- [ ] Add illustrations or icons
- [ ] Style consistently

### 14.3 Add Error States

- [ ] Create error boundary (optional)
- [ ] Add error messages for:
  - [ ] Failed map load
  - [ ] Invalid site plan ID (404)
  - [ ] General errors
- [ ] Style with Alert component
- [ ] Add retry buttons where appropriate

### 14.4 Implement Toast Notifications

- [ ] Install Sonner if not already done: `npx shadcn@latest add sonner`
- [ ] Add Toaster to layout
- [ ] Implement toasts for:
  - [ ] Site plan created
  - [ ] Site plan deleted
  - [ ] Credits purchased
  - [ ] Download completed
  - [ ] Coming soon features
  - [ ] Errors
- [ ] Test toast positioning and styling

### 14.5 Add Transitions & Animations

- [ ] Add page transitions (optional, using framer-motion or CSS)
- [ ] Add button hover effects
- [ ] Add card hover effects
- [ ] Add loading animations
- [ ] Add modal animations
- [ ] Keep animations subtle and performant

### 14.6 Refine Typography

- [ ] Ensure consistent font sizes
- [ ] Check heading hierarchy
- [ ] Verify line heights and spacing
- [ ] Test readability in both themes
- [ ] Ensure proper font weights

### 14.7 Refine Spacing & Layout

- [ ] Audit all pages for consistent spacing
- [ ] Use consistent padding/margins
- [ ] Ensure proper whitespace
- [ ] Fix any layout shifts
- [ ] Test on various screen sizes

### 14.8 Dark Mode Polish

- [ ] Test every page in dark mode
- [ ] Verify contrast ratios
- [ ] Check that all components support dark mode
- [ ] Ensure images/icons are visible
- [ ] Fix any dark mode issues

### 14.9 Accessibility Improvements

- [ ] Add focus styles to all interactive elements
- [ ] Ensure keyboard navigation works
- [ ] Add proper ARIA labels where needed
- [ ] Test tab order
- [ ] Ensure sufficient color contrast

### 14.10 Performance Optimization

- [ ] Optimize images (use Next.js Image component)
- [ ] Lazy load components where appropriate
- [ ] Check bundle size (optional)
- [ ] Test page load times
- [ ] Verify smooth interactions

### 14.11 Verify UI Polish

- [ ] Test all loading states
- [ ] Test all empty states
- [ ] Test all error states
- [ ] Test all toast notifications
- [ ] Test animations and transitions
- [ ] Test dark mode thoroughly
- [ ] Test accessibility (keyboard navigation)
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 14: UI polish and refinement"

---

## Phase 15: Final Testing & Bug Fixes (2 hours)

### 15.1 Cross-Browser Testing

- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Edge (latest)
- [ ] Note any browser-specific issues
- [ ] Fix critical issues

### 15.2 Responsive Testing

- [ ] Test on 1920px (desktop)
- [ ] Test on 1440px (laptop)
- [ ] Test on 1024px (tablet landscape)
- [ ] Test on 768px (tablet portrait)
- [ ] Test on 375px (mobile)
- [ ] Test on 320px (small mobile)
- [ ] Fix any responsive issues

### 15.3 User Flow Testing

- [ ] Test complete user journey:
  - [ ] Land on homepage
  - [ ] View pricing
  - [ ] Sign in (demo mode)
  - [ ] View dashboard
  - [ ] Create new site plan
  - [ ] View gallery
  - [ ] View detail page
  - [ ] Mock purchase credits
  - [ ] View documentation
  - [ ] View legal pages
  - [ ] View profile
  - [ ] Sign out
- [ ] Note any UX issues
- [ ] Fix critical issues

### 15.4 Demo Mode Testing

- [ ] Verify demo mode banner displays
- [ ] Test that auth is bypassed correctly
- [ ] Verify mock data is used throughout
- [ ] Test that credits update in memory
- [ ] Test that site plans CRUD works in memory
- [ ] Verify data resets on page refresh

### 15.5 Link Testing

- [ ] Test all navigation links
- [ ] Test all footer links
- [ ] Test all CTA buttons
- [ ] Test all internal links
- [ ] Fix any broken links

### 15.6 Form Testing

- [ ] Test address autocomplete
- [ ] Test search functionality
- [ ] Test filter functionality
- [ ] Test all button clicks
- [ ] Verify validation works
- [ ] Test error handling

### 15.7 Map Testing

- [ ] Test map loads correctly
- [ ] Test zoom controls
- [ ] Test rotate controls
- [ ] Test map type toggle
- [ ] Test marker placement
- [ ] Test address search integration
- [ ] Verify map is responsive

### 15.8 Visual Polish

- [ ] Check for alignment issues
- [ ] Check for spacing inconsistencies
- [ ] Check for color inconsistencies
- [ ] Check for font inconsistencies
- [ ] Fix any visual bugs

### 15.9 Code Quality Check

- [ ] Run `npm run lint` - fix all errors
- [ ] Run `npm run typecheck` - fix all errors
- [ ] Remove console.logs
- [ ] Remove commented code
- [ ] Remove unused imports
- [ ] Clean up any TODO comments

### 15.10 Final Verification

- [ ] All acceptance criteria met (refer to requirements.md)
- [ ] All pages work correctly
- [ ] All features function as expected
- [ ] No critical bugs remaining
- [ ] Code is clean and maintainable
- [ ] Application is ready for stakeholder review

### 15.11 Final Commit

- [ ] Commit all remaining changes
- [ ] Create comprehensive commit message
- [ ] Optionally create a release tag

---

## Phase 16: Documentation & Handoff (1 hour)

### 16.1 Update README

- [ ] Update project name to "SitePlan AI"
- [ ] Update description
- [ ] Add features list
- [ ] Add setup instructions
- [ ] Add environment variables section
- [ ] Add known limitations (UI-only, mock data)
- [ ] Add next steps (backend implementation)

### 16.2 Create Demo Instructions

- [ ] Document how to enable demo mode
- [ ] Document how to test the app
- [ ] Document mock data structure
- [ ] Document what's implemented vs. coming soon

### 16.3 Create Implementation Summary

- [ ] List all pages created
- [ ] List all components created
- [ ] List all features implemented
- [ ] List what's NOT implemented (AI, payments, etc.)
- [ ] Provide screenshots (optional)

### 16.4 Prepare for Stakeholder Review

- [ ] Ensure app is in demo mode
- [ ] Prepare demo walkthrough script
- [ ] Note any known issues or limitations
- [ ] Prepare to gather feedback

---

## Post-Implementation Checklist

### Before Stakeholder Review:
- [ ] All phases completed
- [ ] All acceptance criteria met (from requirements.md)
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] No console errors in browser
- [ ] Demo mode works correctly
- [ ] All pages are responsive
- [ ] Dark mode works on all pages
- [ ] All mock data displays correctly

### Success Criteria:
- [ ] User can navigate from landing to dashboard to create flow to gallery
- [ ] All CRUD operations work with mock data (in-memory)
- [ ] Credit system UI displays and updates
- [ ] Pricing page is complete and functional
- [ ] Documentation pages are complete
- [ ] Legal pages are complete
- [ ] Application looks professional and polished
- [ ] No critical bugs or UX issues

---

## Estimated Time Summary

| Phase | Estimated Time |
|-------|----------------|
| Phase 1: Project Setup & Cleanup | 2-3 hours |
| Phase 2: Mock Data System | 1-2 hours |
| Phase 3: Demo Mode | 1 hour |
| Phase 4: Landing Page | 2-3 hours |
| Phase 5: Dashboard | 2 hours |
| Phase 6: Create Site Plan Flow | 3-4 hours |
| Phase 7: Site Plans Gallery | 2 hours |
| Phase 8: Site Plan Detail View | 2 hours |
| Phase 9: Pricing & Credit System | 2 hours |
| Phase 10: Documentation Pages | 2-3 hours |
| Phase 11: Legal Pages | 1-2 hours |
| Phase 12: Profile Page | 1 hour |
| Phase 13: Navigation & Footer | 1 hour |
| Phase 14: UI Polish | 2-3 hours |
| Phase 15: Final Testing | 2 hours |
| Phase 16: Documentation | 1 hour |
| **Total** | **27-34 hours** |

---

## Notes

- **Testing**: Unit and E2E tests are excluded per requirements
- **Backend**: All backend logic deferred to future phase
- **Persistence**: In-memory only, resets on page refresh
- **AI**: Mock responses only, no actual AI integration
- **Payments**: Mock checkout only, no real payment processing

---

## Next Steps (Future Phases)

After UI implementation is complete and approved:

1. **Backend Implementation**
   - Set up API routes for real CRUD operations
   - Implement database schema and migrations
   - Connect frontend to real APIs

2. **AI Integration**
   - Implement screenshot capture
   - Integrate with AI model for site plan generation
   - Handle AI responses and image generation

3. **Payment Integration**
   - Set up payment provider (Stripe/Polar)
   - Implement real credit purchases
   - Add transaction history

4. **Testing**
   - Write unit tests
   - Write E2E tests
   - Perform load testing

5. **Deployment**
   - Deploy to production
   - Set up monitoring
   - Configure analytics