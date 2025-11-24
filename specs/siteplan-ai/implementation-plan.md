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

## Phase 4: Landing Page (2-3 hours)

### 4.1 Clear Existing Home Page

- [ ] Open `src/app/page.tsx`
- [ ] Remove all boilerplate content
- [ ] Keep imports and basic structure

### 4.2 Create Hero Section

- [ ] Add hero container with gradient background
- [ ] Add main headline: "Generate Professional Site Plans in Minutes"
- [ ] Add subheadline: "AI-powered property mapping and site plan generation"
- [ ] Add two CTA buttons:
  - [ ] "Get Started Free" (links to /dashboard or /site-plans/new)
  - [ ] "View Pricing" (links to /pricing)
- [ ] Add hero image/mockup (right side on desktop, below on mobile)
- [ ] Make section responsive

### 4.3 Create Features Section

- [ ] Add section title: "Why Choose SitePlan AI?"
- [ ] Create 4 feature cards:
  - [ ] 🗺️ Interactive Mapping - "Locate any property with Google Maps integration"
  - [ ] 🤖 AI-Powered Generation - "Advanced AI creates accurate site plans"
  - [ ] 📐 Professional Quality - "Export-ready plans for presentations"
  - [ ] 💾 Save & Export - "Store unlimited plans in your gallery"
- [ ] Use grid layout (2x2 on desktop, 1 column on mobile)
- [ ] Add icons from lucide-react
- [ ] Style cards with shadcn/ui Card component

### 4.4 Create "How It Works" Section

- [ ] Add section title: "Create Your Site Plan in 3 Simple Steps"
- [ ] Create 3 step cards:
  - [ ] Step 1: "Enter Address" - "Search for any property address"
  - [ ] Step 2: "Capture View" - "Adjust the map and capture your desired view"
  - [ ] Step 3: "Get Site Plan" - "AI generates your professional site plan"
- [ ] Add step numbers (1, 2, 3)
- [ ] Add screenshot/illustration placeholders
- [ ] Make responsive (vertical stack on mobile)

### 4.5 Create Pricing Preview Section

- [ ] Add section title: "Simple, Credit-Based Pricing"
- [ ] Create `src/components/pricing-card.tsx` component
- [ ] Display 3 pricing cards:
  - [ ] Basic: 30 credits, $5, "Perfect for individuals"
  - [ ] Pro: 100 credits, $10, "Best for professionals" (add "Popular" badge)
  - [ ] Elite: 200 credits, $29, "For power users"
- [ ] Add "Get Started" buttons (link to /pricing or demo signup)
- [ ] Highlight Pro tier as recommended
- [ ] Make responsive (stack on mobile)

### 4.6 Create Final CTA Section

- [ ] Add compelling final message
- [ ] Add "Start Creating Site Plans" button
- [ ] Add secondary text about free demo/credits
- [ ] Style with gradient background

### 4.7 Polish Landing Page

- [ ] Add smooth scroll animations (optional)
- [ ] Ensure spacing and typography are consistent
- [ ] Test dark mode appearance
- [ ] Ensure all sections are responsive
- [ ] Add proper semantic HTML (h1, h2, section tags)

### 4.8 Verify Landing Page

- [ ] Test on desktop (1920px, 1440px, 1024px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (375px)
- [ ] Verify all buttons link correctly
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 4: Landing page"

---

## Phase 5: Dashboard Page (2 hours)

### 5.1 Clear Existing Dashboard

- [ ] Open `src/app/dashboard/page.tsx`
- [ ] Remove boilerplate dashboard content
- [ ] Set up demo mode check

### 5.2 Create Stats Cards Section

- [ ] Create `src/components/dashboard/stats-card.tsx` component
- [ ] Create 3 stat cards in top row:
  - [ ] Credits Remaining:
    - [ ] Display current credit balance
    - [ ] Add progress bar showing usage
    - [ ] Add icon (Coins or CreditCard)
  - [ ] Site Plans Created:
    - [ ] Display total count of plans
    - [ ] Add icon (FileText or Map)
  - [ ] Current Plan:
    - [ ] Display plan tier (Basic/Pro/Elite)
    - [ ] Add badge styling
    - [ ] Add icon (Crown or Star)
- [ ] Use grid layout (3 columns on desktop, 1 on mobile)

### 5.3 Create Quick Actions Section

- [ ] Add section title: "Quick Actions"
- [ ] Create two prominent buttons:
  - [ ] "Create New Site Plan" (primary, large, links to /site-plans/new)
  - [ ] "Buy More Credits" (secondary, links to /pricing)
- [ ] Add icons to buttons
- [ ] Make responsive

### 5.4 Create Recent Site Plans Section

- [ ] Add section title: "Recent Site Plans"
- [ ] Create table displaying 5 most recent plans:
  - [ ] Columns: Thumbnail, Address, Created Date, Status, Actions
  - [ ] Use shadcn/ui Table component
  - [ ] Thumbnail: small image preview
  - [ ] Address: clickable link to detail view
  - [ ] Status: badge (draft/completed/archived)
  - [ ] Actions: View button
- [ ] Add "View All Site Plans" link at bottom (to /site-plans)
- [ ] Show empty state if no plans exist

### 5.5 Fetch Mock Data

- [ ] Import mock data helpers
- [ ] Get mock user data
- [ ] Get mock site plans (filter to 5 most recent)
- [ ] Calculate stats from mock data

### 5.6 Polish Dashboard

- [ ] Ensure consistent spacing
- [ ] Add loading skeletons (optional for demo)
- [ ] Test dark mode
- [ ] Make fully responsive

### 5.7 Verify Dashboard

- [ ] Test all links navigate correctly
- [ ] Verify stats display properly
- [ ] Test table responsiveness
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 5: Dashboard page"

---

## Phase 6: Create Site Plan Flow (3-4 hours)

### 6.1 Set Up New Site Plan Page

- [ ] Create `src/app/site-plans/new/page.tsx`
- [ ] Set up page layout with title: "Create New Site Plan"
- [ ] Add back button to dashboard
- [ ] Check demo mode and authentication

### 6.2 Create Address Autocomplete Component

- [ ] Create `src/components/site-plans/address-autocomplete.tsx`
- [ ] Import `use-places-autocomplete` hook
- [ ] Create input field with label "Property Address"
- [ ] Implement autocomplete dropdown
- [ ] Handle selection to get coordinates (lat/lng)
- [ ] Add clear button
- [ ] Style with shadcn/ui Input component

### 6.3 Create Interactive Map Component

- [ ] Create `src/components/site-plans/interactive-map.tsx`
- [ ] Import from `@vis.gl/react-google-maps`
- [ ] Set up `<Map>` component:
  - [ ] Default center and zoom
  - [ ] Satellite view (mapTypeId)
  - [ ] Marker at selected location
- [ ] Add zoom controls (+/- buttons)
- [ ] Add map type toggle (satellite/terrain)
- [ ] Make map full-width, fixed height
- [ ] Ensure responsive

### 6.4 Create Map Controls Component

- [ ] Create `src/components/site-plans/map-controls.tsx`
- [ ] Add zoom controls (+ and - buttons)
- [ ] Add rotate controls (rotate left/right buttons)
- [ ] Add reset view button
- [ ] Position controls over map (top-right or bottom-right)
- [ ] Style with shadcn/ui Button component

### 6.5 Implement Capture Flow

- [ ] Add "Capture & Generate Site Plan" button (large, primary)
- [ ] Create click handler:
  - [ ] Show loading spinner/state (3 seconds)
  - [ ] Display toast message: "Coming soon - AI generation in development"
  - [ ] Option to "Save as Draft" button appears
- [ ] Implement save as draft:
  - [ ] Create new site plan object
  - [ ] Add to mock data store (in-memory)
  - [ ] Show success toast
  - [ ] Navigate to dashboard or gallery

### 6.6 Connect Address Input to Map

- [ ] When address is selected, update map center
- [ ] Add/move marker to new location
- [ ] Auto-zoom to appropriate level
- [ ] Store address and coordinates in component state

### 6.7 Add Form State Management

- [ ] Set up state for:
  - [ ] Selected address (string)
  - [ ] Coordinates (lat/lng)
  - [ ] Map zoom level
  - [ ] Map rotation (heading)
  - [ ] Loading state
- [ ] Handle state updates from interactions

### 6.8 Polish Create Flow

- [ ] Add helpful instructions/tips
- [ ] Add validation (require address before capture)
- [ ] Ensure smooth transitions
- [ ] Test all interactions
- [ ] Make fully responsive

### 6.9 Verify Create Flow

- [ ] Test address search and selection
- [ ] Test map interactions (zoom, pan, rotate)
- [ ] Test capture button flow
- [ ] Test save as draft
- [ ] Verify navigation works
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 6: Create site plan flow"

---

## Phase 7: Site Plans Gallery (2 hours)

### 7.1 Set Up Gallery Page

- [ ] Create `src/app/site-plans/page.tsx`
- [ ] Set up page layout with title: "My Site Plans"
- [ ] Check demo mode and authentication

### 7.2 Create Site Plan Card Component

- [ ] Create `src/components/site-plans/site-plan-card.tsx`
- [ ] Display in card:
  - [ ] Thumbnail image
  - [ ] Address (truncated if long)
  - [ ] Created date (formatted)
  - [ ] Status badge (draft/completed/archived)
  - [ ] Quick action buttons (View, Delete)
- [ ] Make card clickable (navigate to detail view)
- [ ] Add hover effects
- [ ] Style with shadcn/ui Card

### 7.3 Implement Grid View

- [ ] Create grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- [ ] Map through site plans and render cards
- [ ] Add proper spacing and responsive behavior

### 7.4 Implement List View

- [ ] Create list/table layout (alternative view)
- [ ] Show same information in table format
- [ ] Use shadcn/ui Table component

### 7.5 Add View Toggle

- [ ] Create toggle button (Grid/List icons)
- [ ] Implement state for current view
- [ ] Switch between grid and list display
- [ ] Position toggle in header area

### 7.6 Add Search Functionality

- [ ] Add search input field (with icon)
- [ ] Implement filter logic by address
- [ ] Update displayed plans based on search
- [ ] Add debouncing for search (optional)
- [ ] Show "No results" message when appropriate

### 7.7 Add Status Filter

- [ ] Create filter dropdown or tabs
- [ ] Options: All, Draft, Completed, Archived
- [ ] Implement filter logic
- [ ] Update displayed plans based on filter
- [ ] Show active filter state

### 7.8 Add Empty State

- [ ] Create empty state component
- [ ] Display when no site plans exist
- [ ] Show helpful message: "No site plans yet"
- [ ] Add "Create Your First Site Plan" button
- [ ] Add illustration or icon

### 7.9 Implement Actions

- [ ] View action: navigate to `/site-plans/[id]`
- [ ] Delete action:
  - [ ] Show confirmation dialog
  - [ ] Remove from mock data store
  - [ ] Show success toast
  - [ ] Update view

### 7.10 Verify Gallery

- [ ] Test grid and list views
- [ ] Test search functionality
- [ ] Test status filter
- [ ] Test delete action with confirmation
- [ ] Test empty state
- [ ] Ensure responsive on all screen sizes
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 7: Site plans gallery"

---

## Phase 8: Site Plan Detail View (2 hours)

### 8.1 Set Up Detail Page

- [ ] Create `src/app/site-plans/[id]/page.tsx`
- [ ] Set up dynamic route parameter handling
- [ ] Get site plan by ID from mock data
- [ ] Handle not found case (redirect or 404)

### 8.2 Create Header Section

- [ ] Display address as main heading (h1)
- [ ] Add status badge next to title
- [ ] Add breadcrumb navigation (Dashboard > Site Plans > [Address])
- [ ] Make responsive

### 8.3 Create Action Buttons

- [ ] Add button group:
  - [ ] Edit button (navigate to edit mode or show "Coming soon")
  - [ ] Download button (simulate download)
  - [ ] Delete button (show confirmation, then delete)
- [ ] Position buttons in header area
- [ ] Use shadcn/ui Button component
- [ ] Add appropriate icons

### 8.4 Create Map Display Section

- [ ] Add section: "Property Location"
- [ ] Display map (read-only, no controls)
- [ ] Show marker at property location
- [ ] Set appropriate zoom level
- [ ] Make responsive

### 8.5 Create Details Panel

- [ ] Create card/section for metadata:
  - [ ] Created date (formatted)
  - [ ] Last modified date (formatted)
  - [ ] Credits used (show "1 credit")
  - [ ] Status (with badge)
- [ ] Use grid or stacked layout
- [ ] Style with shadcn/ui Card

### 8.6 Create Generated Image Section

- [ ] Add section: "Generated Site Plan"
- [ ] Display mock generated image (large)
- [ ] Add image viewer/zoom functionality (optional)
- [ ] Add "Regenerate" button (shows "Coming soon" toast)
- [ ] Make image responsive

### 8.7 Implement Download Action

- [ ] Create download handler
- [ ] Simulate file download:
  - [ ] Show loading toast
  - [ ] Delay 1-2 seconds
  - [ ] Show success toast: "Site plan downloaded"
  - [ ] Could trigger actual download of mock image (optional)

### 8.8 Implement Delete Action

- [ ] Create delete handler
- [ ] Show confirmation dialog:
  - [ ] Message: "Are you sure you want to delete this site plan?"
  - [ ] Cancel and Delete buttons
- [ ] On confirm:
  - [ ] Remove from mock data store
  - [ ] Show success toast
  - [ ] Navigate back to gallery

### 8.9 Add Notes Section (Optional)

- [ ] Add textarea for notes
- [ ] Save notes to mock data (in-memory)
- [ ] Display existing notes if any

### 8.10 Verify Detail View

- [ ] Test navigation from gallery
- [ ] Test all action buttons
- [ ] Test delete confirmation
- [ ] Test download simulation
- [ ] Verify map displays correctly
- [ ] Test responsiveness
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 8: Site plan detail view"

---

## Phase 9: Pricing Page & Credit System UI (2 hours)

### 9.1 Set Up Pricing Page

- [ ] Create `src/app/pricing/page.tsx`
- [ ] Add page title: "Choose Your Plan"
- [ ] Add subtitle explaining credit system

### 9.2 Update Pricing Card Component

- [ ] Open `src/components/pricing-card.tsx` (or create it)
- [ ] Display pricing card with:
  - [ ] Plan name (Basic/Pro/Elite)
  - [ ] Credits amount (large, prominent)
  - [ ] Price (large, prominent)
  - [ ] Features list (checkmarks)
  - [ ] "Buy Now" button
- [ ] Add "Popular" badge for Pro tier
- [ ] Style with shadcn/ui Card
- [ ] Make responsive

### 9.3 Create Pricing Grid

- [ ] Display 3 pricing cards in grid
- [ ] Layout: 3 columns on desktop, 1 on mobile
- [ ] Center and align cards
- [ ] Highlight Pro tier (border, shadow, scale)

### 9.4 Add Features Comparison

- [ ] List features for each tier:
  - Basic: "30 site plans", "Basic support", "Standard export"
  - Pro: "100 site plans", "Priority support", "HD export", "Advanced features"
  - Elite: "200 site plans", "Premium support", "4K export", "API access", "White label"
- [ ] Use checkmark icons

### 9.5 Create Buy Credits Modal

- [ ] Create `src/components/credits/buy-credits-modal.tsx`
- [ ] Use shadcn/ui Dialog component
- [ ] Display selected package details
- [ ] Show total cost
- [ ] Add "Purchase" and "Cancel" buttons
- [ ] Implement purchase handler:
  - [ ] Show loading state
  - [ ] Add credits to mock user balance
  - [ ] Show success toast
  - [ ] Close modal

### 9.6 Connect "Buy Now" Buttons

- [ ] onClick opens modal with selected package
- [ ] Pass package data to modal
- [ ] Handle modal open/close state

### 9.7 Create Credit Display Component

- [ ] Create `src/components/credits/credit-display.tsx`
- [ ] Show current credit balance
- [ ] Add progress bar or circular progress
- [ ] Add icon (Coins or Zap)
- [ ] Add "Buy More" link
- [ ] Make compact for header use

### 9.8 Add Credit Display to Header/Dashboard

- [ ] Import credit display component
- [ ] Add to site header (next to user profile)
- [ ] Ensure it updates when credits change
- [ ] Make responsive (hide on small screens, show in dropdown)

### 9.9 Add FAQ Section to Pricing

- [ ] Add "Frequently Asked Questions" section
- [ ] Use shadcn/ui Accordion component
- [ ] Add 5-7 common questions:
  - "How do credits work?"
  - "Do credits expire?"
  - "Can I get a refund?"
  - "What if I run out of credits?"
  - "Can I upgrade my plan?"

### 9.10 Verify Pricing Page

- [ ] Test all pricing cards display correctly
- [ ] Test "Buy Now" opens modal
- [ ] Test mock purchase flow
- [ ] Verify credit balance updates
- [ ] Test credit display in header
- [ ] Ensure responsive on all screens
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 9: Pricing page and credit system UI"

---

## Phase 10: Documentation Pages (2-3 hours)

### 10.1 Set Up Documentation Structure

- [ ] Create `src/app/docs/layout.tsx` for docs layout
- [ ] Create `src/components/docs/docs-sidebar.tsx` for navigation
- [ ] Set up sidebar with links to all doc pages

### 10.2 Create Documentation Hub

- [ ] Create `src/app/docs/page.tsx`
- [ ] Add welcome message
- [ ] Add overview of documentation
- [ ] Add quick links to main sections:
  - Getting Started
  - How to Use
  - FAQ
- [ ] Style with cards for each section

### 10.3 Create Getting Started Guide

- [ ] Create `src/app/docs/getting-started/page.tsx`
- [ ] Add content:
  - [ ] Welcome message
  - [ ] Prerequisites (account, browser, etc.)
  - [ ] Step 1: Sign up
  - [ ] Step 2: Purchase credits
  - [ ] Step 3: Create first site plan
  - [ ] Next steps
- [ ] Add screenshots/illustrations (placeholders)
- [ ] Use proper heading hierarchy

### 10.4 Create How to Use Guide

- [ ] Create `src/app/docs/how-to-use/page.tsx`
- [ ] Add sections:
  - [ ] Finding a Property
  - [ ] Using the Map Controls
  - [ ] Capturing Your View
  - [ ] Viewing Your Site Plans
  - [ ] Downloading Site Plans
  - [ ] Managing Your Gallery
- [ ] Add step-by-step instructions
- [ ] Add tips and best practices
- [ ] Use proper formatting (numbered lists, code blocks if needed)

### 10.5 Create FAQ Page

- [ ] Create `src/app/docs/faq/page.tsx`
- [ ] Add sections:
  - [ ] General Questions
  - [ ] Account & Billing
  - [ ] Using the App
  - [ ] Technical Issues
- [ ] Add 10-15 common Q&A pairs
- [ ] Use shadcn/ui Accordion for collapsible answers
- [ ] Add search functionality (optional)

### 10.6 Style Documentation Pages

- [ ] Ensure consistent typography
- [ ] Add proper spacing between sections
- [ ] Style code blocks (if any)
- [ ] Add table of contents for long pages (optional)
- [ ] Ensure readability in dark mode

### 10.7 Implement Docs Sidebar

- [ ] Create navigation tree
- [ ] Highlight active page
- [ ] Make sidebar collapsible on mobile
- [ ] Add expand/collapse for sections
- [ ] Sticky positioning on desktop

### 10.8 Add Docs Navigation

- [ ] Add "Edit this page" link (GitHub, optional)
- [ ] Add "Previous/Next" navigation at bottom
- [ ] Add breadcrumbs at top

### 10.9 Verify Documentation

- [ ] Test all internal links work
- [ ] Test sidebar navigation
- [ ] Test mobile responsiveness
- [ ] Verify content is readable
- [ ] Check dark mode appearance
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 10: Documentation pages"

---

## Phase 11: Legal Pages (1-2 hours)

### 11.1 Set Up Legal Pages Structure

- [ ] Create `src/app/legal` directory
- [ ] Plan for shared layout (optional)

### 11.2 Create Privacy Policy Page

- [ ] Create `src/app/legal/privacy/page.tsx`
- [ ] Add page title: "Privacy Policy"
- [ ] Add last updated date
- [ ] Add content sections:
  - [ ] Introduction
  - [ ] Information We Collect
  - [ ] How We Use Your Information
  - [ ] Data Storage and Security
  - [ ] Third-Party Services (Google Maps, OAuth)
  - [ ] Cookies and Tracking
  - [ ] Your Rights
  - [ ] Changes to Policy
  - [ ] Contact Information
- [ ] Use standard privacy policy template
- [ ] Replace placeholders with "SitePlan AI"

### 11.3 Create Terms of Service Page

- [ ] Create `src/app/legal/terms/page.tsx`
- [ ] Add page title: "Terms of Service"
- [ ] Add last updated date
- [ ] Add content sections:
  - [ ] Agreement to Terms
  - [ ] Use License
  - [ ] Credit System and Purchases
  - [ ] User Responsibilities
  - [ ] Intellectual Property
  - [ ] Service Availability
  - [ ] Limitation of Liability
  - [ ] Termination
  - [ ] Governing Law
  - [ ] Changes to Terms
  - [ ] Contact Information
- [ ] Use standard ToS template

### 11.4 Create Cookie Policy Page

- [ ] Create `src/app/legal/cookies/page.tsx`
- [ ] Add page title: "Cookie Policy"
- [ ] Add last updated date
- [ ] Add content sections:
  - [ ] What Are Cookies
  - [ ] How We Use Cookies
  - [ ] Types of Cookies We Use (Essential, Analytics, Preferences)
  - [ ] Third-Party Cookies
  - [ ] Managing Cookies
  - [ ] Changes to Policy
  - [ ] Contact Information

### 11.5 Style Legal Pages

- [ ] Use consistent typography
- [ ] Add table of contents at top (optional)
- [ ] Ensure proper heading hierarchy
- [ ] Add spacing between sections
- [ ] Make text readable (max-width for content)
- [ ] Test dark mode appearance

### 11.6 Add Legal Links to Footer

- [ ] Update `src/components/site-footer.tsx`
- [ ] Add "Legal" section
- [ ] Link to Privacy Policy
- [ ] Link to Terms of Service
- [ ] Link to Cookie Policy

### 11.7 Verify Legal Pages

- [ ] Test all links from footer
- [ ] Verify content is readable
- [ ] Test responsiveness
- [ ] Check for placeholder text that needs updating
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 11: Legal pages"

---

## Phase 12: Profile Page (1 hour)

### 12.1 Update Existing Profile Page

- [ ] Open `src/app/profile/page.tsx`
- [ ] Simplify existing boilerplate profile

### 12.2 Create User Info Card

- [ ] Create card displaying:
  - [ ] Profile picture/avatar (large)
  - [ ] Full name
  - [ ] Email address
  - [ ] Member since date
- [ ] Use shadcn/ui Card and Avatar components
- [ ] Add "Edit Profile" button (placeholder/coming soon)

### 12.3 Create Plan & Credits Card

- [ ] Create card displaying:
  - [ ] Current plan tier (Basic/Pro/Elite)
  - [ ] Plan badge with styling
  - [ ] Current credit balance
  - [ ] Credit progress bar
  - [ ] "Upgrade Plan" button (links to pricing)
  - [ ] "Buy More Credits" button (opens modal)
- [ ] Use shadcn/ui Card component

### 12.4 Create Usage Statistics Card

- [ ] Create card displaying:
  - [ ] Total site plans created
  - [ ] Total credits used
  - [ ] Account created date
  - [ ] Last activity date (mock)
- [ ] Use grid layout for stats
- [ ] Add icons for each stat

### 12.5 Create Account Settings Section

- [ ] Add section with placeholder buttons:
  - [ ] "Change Password" (coming soon)
  - [ ] "Email Preferences" (coming soon)
  - [ ] "Delete Account" (coming soon, destructive styling)
- [ ] Add informational text about demo mode

### 12.6 Layout Profile Page

- [ ] Arrange cards in responsive grid
- [ ] 2 columns on desktop, 1 on mobile
- [ ] Consistent spacing
- [ ] Add page title "My Profile"

### 12.7 Verify Profile Page

- [ ] Test all links work correctly
- [ ] Verify mock data displays properly
- [ ] Test responsiveness
- [ ] Check dark mode appearance
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 12: Profile page"

---

## Phase 13: Navigation & Footer Polish (1 hour)

### 13.1 Polish Site Header

- [ ] Open `src/components/site-header.tsx`
- [ ] Ensure navigation links are correct:
  - [ ] Home (/)
  - [ ] Pricing (/pricing)
  - [ ] Docs (/docs)
  - [ ] Dashboard (/dashboard) - protected
- [ ] Add active link styling
- [ ] Ensure user profile dropdown works
- [ ] Add credit display to header
- [ ] Test mobile menu (hamburger)
- [ ] Ensure responsive behavior

### 13.2 Polish Site Footer

- [ ] Open `src/components/site-footer.tsx`
- [ ] Organize footer into sections:
  - [ ] Product: Features, Pricing, Docs
  - [ ] Legal: Privacy, Terms, Cookies
  - [ ] Company: About, Contact, Blog (placeholders)
  - [ ] Social: Twitter, LinkedIn, GitHub (placeholders)
- [ ] Add newsletter signup form (non-functional):
  - [ ] Email input
  - [ ] Subscribe button
  - [ ] Shows success toast on submit
- [ ] Add copyright text
- [ ] Ensure responsive layout

### 13.3 Add User Profile Dropdown Items

- [ ] Open `src/components/auth/user-profile.tsx`
- [ ] Ensure dropdown menu includes:
  - [ ] User info (name, email)
  - [ ] Dashboard link
  - [ ] Gallery link (/site-plans)
  - [ ] Profile link
  - [ ] Credits display
  - [ ] Separator
  - [ ] Sign Out button
- [ ] Test all links navigate correctly

### 13.4 Implement Active Link Highlighting

- [ ] Use `usePathname()` from next/navigation
- [ ] Highlight current page in navigation
- [ ] Add visual indicator (underline, color change, etc.)

### 13.5 Test Navigation Flow

- [ ] Test navigation from every page
- [ ] Test breadcrumbs work (where applicable)
- [ ] Test back buttons
- [ ] Test mobile navigation
- [ ] Verify all links are correct

### 13.6 Verify Navigation & Footer

- [ ] Test all header links
- [ ] Test all footer links
- [ ] Test user dropdown menu
- [ ] Test mobile responsiveness
- [ ] Run `npm run lint` and `npm run typecheck`
- [ ] Commit changes: "Phase 13: Navigation and footer polish"

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