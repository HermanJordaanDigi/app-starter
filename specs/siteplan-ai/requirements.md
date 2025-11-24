# SitePlan AI - Requirements Specification

## 1. Project Overview

**Application Name:** SitePlan AI

**Purpose:** A SaaS application that allows users to locate properties using an interactive map, capture map views, and generate AI-powered site plans showing property boundaries, buildings, driveways, gardens, paths, trees, and other features.

**Current Phase:** UI/UX Implementation Phase (No backend logic, mock data only)

---

## 2. Initial User Requirements

### Core Functionality

1. **Property Location**
   - Users can enter a property address
   - Users can manually navigate using an interactive map window
   - Map displays Google Maps/Google Earth top-down view

2. **View Adjustment**
   - Users can zoom in/out on the map
   - Users can rotate the map view
   - Users can adjust the view until they have the exact angle and framing desired

3. **View Capture**
   - Users can click a button to request a screenshot of the current map view
   - *(Note: In UI-only phase, this will show "Coming soon" message)*

4. **AI Site Plan Generation** *(Backend - Future Phase)*
   - Captured screenshot will be sent to an AI model
   - AI produces a scaled, top-down site plan
   - Site plan shows: property boundaries, buildings, driveways, garden layout, paths, trees, and other features
   - *(Note: In UI-only phase, mock generated images will be displayed)*

5. **Iteration with AI** *(Backend - Future Phase)*
   - Users can request changes or refinements to generated site plans
   - *(Note: In UI-only phase, this feature will show placeholder UI)*

6. **Download**
   - Users can download the final site plan image
   - *(Note: In UI-only phase, simulated download with mock file)*

7. **Image Gallery**
   - Users can view all their generated site plans in a gallery
   - Images stored in user's personal gallery
   - *(Note: In UI-only phase, in-memory storage with mock data)*

### User Interface Requirements

1. **Landing Page**
   - Beautiful, conversion-optimized design
   - SEO-optimized text promoting the product
   - Clear value proposition
   - Call-to-action buttons to sign up/sign in

2. **Authentication**
   - Users can sign into the application
   - *(Note: Demo mode will bypass authentication for testing)*

3. **Dashboard**
   - Central hub after login
   - Access to create new site plans
   - View statistics (credits, plan count)
   - Quick access to recent site plans

4. **Documentation**
   - Public-facing documentation on using the application
   - How-to guides
   - Getting started guide
   - FAQ section

5. **Legal Pages**
   - Privacy Policy
   - Terms of Service
   - Cookie Policy

### Business Model

**Credit-Based Pricing System:**

| Package | Credits | Price |
|---------|---------|-------|
| Basic   | 30      | $5    |
| Pro     | 100     | $10   |
| Elite   | 200     | $29   |

- Each site plan generation consumes credits
- Users purchase credit packages
- Credit balance displayed in dashboard

---

## 3. Functional Requirements

### FR-1: Property Search & Location
- **FR-1.1** Users must be able to enter a property address in a search field
- **FR-1.2** System must provide address autocomplete suggestions using Google Places API
- **FR-1.3** System must display the selected property on an interactive map
- **FR-1.4** Users must be able to manually pan the map to explore locations

### FR-2: Map Interaction
- **FR-2.1** Users must be able to zoom in and out on the map
- **FR-2.2** Users must be able to rotate the map view
- **FR-2.3** Map must display in satellite/aerial view by default
- **FR-2.4** Users must be able to toggle between map view types (satellite, terrain)
- **FR-2.5** Map controls must be intuitive and accessible

### FR-3: Site Plan Creation (UI Only - Current Phase)
- **FR-3.1** Users must see a "Capture & Generate Site Plan" button
- **FR-3.2** Clicking the button must show a loading state
- **FR-3.3** After loading, system must display "Coming soon - AI generation in development" message
- **FR-3.4** Users must be able to save the map view as a draft

### FR-4: Site Plan Gallery
- **FR-4.1** Users must be able to view all their site plans in a gallery/list view
- **FR-4.2** Gallery must display thumbnails, addresses, creation dates, and status
- **FR-4.3** Users must be able to search/filter site plans by address
- **FR-4.4** Users must be able to filter by status (draft, completed, archived)
- **FR-4.5** Users must be able to toggle between grid and list view
- **FR-4.6** Clicking a site plan must navigate to detail view

### FR-5: Site Plan Detail View
- **FR-5.1** Users must be able to view individual site plan details
- **FR-5.2** Detail view must show the property location on a map
- **FR-5.3** Detail view must display creation date, last modified date
- **FR-5.4** Users must see a mock generated site plan image
- **FR-5.5** Users must see action buttons (Edit, Download, Delete)
- **FR-5.6** Download button must simulate file download

### FR-6: Credit System Display
- **FR-6.1** Dashboard must display user's current credit balance
- **FR-6.2** Credit balance must show with a progress bar/visual indicator
- **FR-6.3** System must display credit cost when generating site plans
- **FR-6.4** Users must be able to view their current pricing plan

### FR-7: Pricing & Purchase (UI Only)
- **FR-7.1** System must display pricing page with three tiers (Basic, Pro, Elite)
- **FR-7.2** Each pricing card must show credits included and price
- **FR-7.3** "Buy Now" buttons must open a mock checkout modal
- **FR-7.4** Mock checkout must simulate successful purchase
- **FR-7.5** After mock purchase, credit balance must update (in-memory)

### FR-8: User Dashboard
- **FR-8.1** Dashboard must display user statistics (credits, total plans, current tier)
- **FR-8.2** Dashboard must show recent site plans (5 most recent)
- **FR-8.3** Dashboard must have prominent "Create New Site Plan" CTA
- **FR-8.4** Dashboard must link to pricing page to buy credits

### FR-9: Documentation
- **FR-9.1** System must provide a documentation hub page
- **FR-9.2** Documentation must include "Getting Started" guide
- **FR-9.3** Documentation must include "How to Use" guide with screenshots
- **FR-9.4** Documentation must include FAQ section
- **FR-9.5** Documentation must have navigation sidebar

### FR-10: Legal Pages
- **FR-10.1** System must provide a Privacy Policy page
- **FR-10.2** System must provide a Terms of Service page
- **FR-10.3** System must provide a Cookie Policy page
- **FR-10.4** Legal pages must be accessible from footer

### FR-11: Authentication & Demo Mode
- **FR-11.1** System must support Google OAuth authentication (existing Better Auth)
- **FR-11.2** System must support Demo Mode that bypasses authentication
- **FR-11.3** Demo Mode must display a visible banner/indicator
- **FR-11.4** Demo Mode must use mock user data
- **FR-11.5** Users must be able to sign out

### FR-12: Profile Management
- **FR-12.1** Users must be able to view their profile
- **FR-12.2** Profile must display user information (name, email, avatar)
- **FR-12.3** Profile must show current plan and credits
- **FR-12.4** Profile must display usage statistics

---

## 4. Non-Functional Requirements

### NFR-1: Performance
- **NFR-1.1** Map must load and render within 3 seconds
- **NFR-1.2** Page navigation must feel instant (<500ms)
- **NFR-1.3** Map interactions (zoom, pan, rotate) must be smooth (60fps)

### NFR-2: Usability
- **NFR-2.1** Application must be intuitive and require no training
- **NFR-2.2** All interactive elements must provide visual feedback
- **NFR-2.3** Error messages must be clear and actionable
- **NFR-2.4** Form validation must provide real-time feedback

### NFR-3: Responsiveness
- **NFR-3.1** Application must be fully responsive on desktop (1920px to 1024px)
- **NFR-3.2** Application must be usable on tablets (1024px to 768px)
- **NFR-3.3** Application must be functional on mobile devices (768px to 320px)
- **NFR-3.4** Map interface must adapt to different screen sizes

### NFR-4: Accessibility
- **NFR-4.1** Application must support keyboard navigation
- **NFR-4.2** All interactive elements must be accessible via keyboard
- **NFR-4.3** Color contrast must meet WCAG 2.1 AA standards
- **NFR-4.4** Images must have appropriate alt text

### NFR-5: Browser Compatibility
- **NFR-5.1** Application must work on Chrome (latest 2 versions)
- **NFR-5.2** Application must work on Firefox (latest 2 versions)
- **NFR-5.3** Application must work on Safari (latest 2 versions)
- **NFR-5.4** Application must work on Edge (latest 2 versions)

### NFR-6: Visual Design
- **NFR-6.1** Application must support dark mode and light mode
- **NFR-6.2** Theme switching must persist across sessions
- **NFR-6.3** Design must follow consistent styling patterns (shadcn/ui)
- **NFR-6.4** Brand colors and typography must be consistent throughout

### NFR-7: SEO Optimization
- **NFR-7.1** Landing page must have optimized meta tags
- **NFR-7.2** Landing page must have proper heading hierarchy (h1, h2, h3)
- **NFR-7.3** Landing page must have descriptive alt text for images
- **NFR-7.4** Application must have semantic HTML structure

### NFR-8: Code Quality
- **NFR-8.1** Code must pass TypeScript type checking without errors
- **NFR-8.2** Code must pass ESLint without errors or warnings
- **NFR-8.3** Components must be reusable and follow single responsibility principle
- **NFR-8.4** Code must follow Next.js 15 App Router best practices

### NFR-9: Data Management (Current Phase)
- **NFR-9.1** Mock data must be realistic and representative
- **NFR-9.2** In-memory storage must persist during session
- **NFR-9.3** Data must reset on page refresh
- **NFR-9.4** Mock data structure must align with future database schema

### NFR-10: User Experience
- **NFR-10.1** Loading states must be displayed for all async operations
- **NFR-10.2** Empty states must be informative and guide users
- **NFR-10.3** Success/error notifications must use toast messages
- **NFR-10.4** Transitions and animations must be smooth and purposeful

---

## 5. Technical Requirements

### TR-1: Technology Stack
- **TR-1.1** Next.js 15 with App Router
- **TR-1.2** React 19
- **TR-1.3** TypeScript
- **TR-1.4** Tailwind CSS 4
- **TR-1.5** shadcn/ui component library

### TR-2: Map Integration
- **TR-2.1** Google Maps JavaScript API via `@vis.gl/react-google-maps`
- **TR-2.2** Google Places API for address autocomplete
- **TR-2.3** `use-places-autocomplete` library for autocomplete functionality

### TR-3: Authentication (Kept for Future)
- **TR-3.1** Better Auth with Google OAuth
- **TR-3.2** PostgreSQL for user/session storage
- **TR-3.3** Drizzle ORM for database operations

### TR-4: UI Components
- **TR-4.1** All shadcn/ui components must be installed: button, card, dialog, dropdown-menu, avatar, badge, separator, input, label, textarea, select, table, tabs, alert, toast, form, scroll-area, slider
- **TR-4.2** Lucide React for icons
- **TR-4.3** next-themes for theme management

### TR-5: Mock Data System
- **TR-5.1** Centralized mock data file (`src/lib/mock-data.ts`)
- **TR-5.2** In-memory state management for CRUD operations
- **TR-5.3** Mock user with realistic data (name, email, avatar, credits, plan)
- **TR-5.4** Mock site plans (5-6 examples with varied data)

---

## 6. Acceptance Criteria

### AC-1: Landing Page
- [x] Landing page loads within 3 seconds
- [x] Hero section displays with clear headline and CTAs
- [x] Features section displays 4 feature cards with icons
- [x] "How It Works" section shows 3 numbered steps
- [x] Pricing section displays 3 pricing tiers with credits and prices
- [x] All buttons are clickable and navigate correctly
- [x] Page is fully responsive on desktop, tablet, and mobile
- [x] SEO meta tags are present and accurate

### AC-2: Authentication & Demo Mode
- [x] Demo mode banner is visible when active
- [x] Demo mode uses mock user data
- [x] Sign in redirects to dashboard
- [x] Sign out returns to landing page
- [x] User profile displays in header when authenticated
- [x] Protected routes redirect to sign-in when not authenticated

### AC-3: Dashboard
- [x] Dashboard displays 3 stat cards (credits, plan count, tier)
- [x] Credit balance shows with progress bar
- [x] Recent site plans table displays up to 5 items
- [x] "Create New Site Plan" button navigates to creation page
- [x] "Buy More Credits" button navigates to pricing
- [x] "View All" link navigates to gallery

### AC-4: Create Site Plan Flow
- [x] Address input field displays with autocomplete
- [x] Selecting an address shows location on map
- [x] Map displays in satellite view
- [x] Zoom controls work correctly
- [x] Rotate controls update map orientation
- [x] "Capture & Generate" button shows loading state
- [x] After loading, "Coming soon" message displays
- [x] User can save as draft to gallery

### AC-5: Site Plans Gallery
- [x] Gallery displays all mock site plans
- [x] Each card shows thumbnail, address, date, status
- [x] Grid/list view toggle works
- [x] Search by address filters results
- [x] Status filter (draft/completed/archived) works
- [x] Clicking a card navigates to detail view
- [x] Empty state displays when no plans exist

### AC-6: Site Plan Detail View
- [x] Address displays as page title
- [x] Status badge shows current status
- [x] Map displays property location
- [x] Created and modified dates are visible
- [x] Mock site plan image displays
- [x] Edit button navigates to edit mode (or shows message)
- [x] Download button simulates download
- [x] Delete button removes plan from gallery (in-memory)

### AC-7: Pricing Page
- [x] Page displays 3 pricing cards (Basic, Pro, Elite)
- [x] Each card shows credits, price, features
- [x] "Buy Now" buttons open checkout modal
- [x] Modal displays package details
- [x] "Purchase" button shows success toast
- [x] Credit balance updates after mock purchase
- [x] Modal closes after purchase

### AC-8: Credit System
- [x] Credit balance displays in dashboard
- [x] Credit balance displays in header/navigation
- [x] Generate button shows "Costs 1 credit" message
- [x] Mock generation does not deduct credits (UI only)
- [x] "Buy Credits" modal shows 3 package options
- [x] Purchasing adds credits to balance (in-memory)

### AC-9: Documentation
- [x] Documentation hub page displays with navigation
- [x] Sidebar shows all documentation sections
- [x] Getting Started guide has step-by-step instructions
- [x] How to Use guide includes screenshots/examples
- [x] FAQ section answers common questions
- [x] All links within docs work correctly

### AC-10: Legal Pages
- [x] Privacy Policy page displays complete policy
- [x] Terms of Service page displays complete terms
- [x] Cookie Policy page displays cookie information
- [x] All legal pages are accessible from footer
- [x] Legal pages have proper formatting and readability

### AC-11: Profile Page
- [x] User info card displays name, email, avatar
- [x] Plan & credits card shows current tier and balance
- [x] Usage statistics display (plans created, credits used)
- [x] Account settings section has placeholder buttons
- [x] Page is responsive on all screen sizes

### AC-12: Navigation & UI Polish
- [x] Site header displays on all pages
- [x] Logo links to home page
- [x] Navigation links work correctly
- [x] User profile dropdown shows menu items
- [x] Footer displays on all pages
- [x] Footer links navigate correctly
- [x] Dark/light mode toggle works
- [x] Theme preference persists across sessions
- [x] All pages are responsive
- [x] Loading states display for async operations
- [x] Toast notifications appear for user actions

### AC-13: Code Quality
- [x] `npm run lint` passes with no errors
- [x] `npm run typecheck` passes with no errors
- [x] No console errors in browser
- [x] All components have proper TypeScript types
- [x] Code follows established patterns and conventions

---

## 7. Out of Scope (Future Phases)

The following features are explicitly OUT OF SCOPE for the current UI-only phase:

1. **Backend Logic**
   - Actual AI image processing
   - Real screenshot capture functionality
   - Database persistence beyond in-memory storage
   - API endpoints for CRUD operations

2. **Payment Processing**
   - Real payment gateway integration (Stripe, etc.)
   - Actual credit deduction
   - Transaction history
   - Receipt generation

3. **Advanced Features**
   - User account management (password reset, email verification)
   - Team collaboration features
   - Site plan sharing/export formats beyond simple download
   - Advanced map features (3D view, measurement tools)

4. **Testing**
   - Unit tests
   - End-to-end tests
   - Integration tests

5. **Deployment**
   - Production deployment
   - CI/CD pipeline
   - Monitoring and analytics

---

## 8. Constraints & Assumptions

### Constraints
1. Must use existing boilerplate tech stack (Next.js 15, React 19, TypeScript)
2. Must use shadcn/ui for UI components
3. Must use Google Maps API (already in dependencies)
4. Must maintain Better Auth setup for future phases
5. No real backend API calls during this phase
6. No database writes/reads during this phase

### Assumptions
1. Google Maps API key will be provided by user
2. Mock data is sufficient for UX validation
3. Users testing the app understand it's UI-only with no persistence
4. Design can be refined based on user feedback after implementation
5. All legal content will use standard templates
6. AI site plan generation will be implemented in future phase

---

## 9. Success Metrics

This phase will be considered successful when:

1. All acceptance criteria are met
2. User can complete full flow from landing page → sign in → create site plan → view gallery → view details
3. Application is visually polished and professional
4. Code passes linting and type checking
5. Application is responsive on all target screen sizes
6. Demo mode allows for easy testing without authentication
7. Stakeholders approve the UX/UI design

---

## 10. Timeline

**Estimated Implementation Time:** 18-20 hours

This is a UI-only phase focused on validating user experience before implementing backend logic.