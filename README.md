# Siteplan.ai

Siteplan.ai turns a map view of a property into a clean black-on-white site plan drawing. Users find their property on an interactive Google Maps interface, capture a screenshot at the right zoom level, and the AI backend generates a simplified line-drawing site plan that highlights the property layout.

Built for **landscapers**, **property developers**, and **estate agents** who need quick, readable site plans for proposals, listings, planning discussions, and client communication.

## What it does

### 1) Find the property on a map
- Search for an address or place
- Navigate/zoom to frame the property exactly how you want it captured

### 2) Capture the view
- Take a screenshot (at the chosen zoom level and framing)
- Submit it to the app for processing

### 3) Generate a site plan drawing
- AI converts the screenshot into a **black-on-white line drawing**
- Output is designed to be **clean, printable, and easy to annotate**

## Typical use cases
- **Landscapers:** quick site plans for quotes, layouts, and concept proposals  
- **Estate agents:** clean visuals for listings and marketing packs  
- **Developers:** early-stage planning conversations, feasibility discussions, documentation drafts  

## Output
- Minimal, high-contrast **linework** (black on white)
- Emphasis on clear edges and property layout
- Suitable for printing, markup, and sharing with clients

## Tech stack
- Frontend: React + TypeScript (Vite)
- UI: Tailwind CSS / component library 
- Backend: AI processing with Gemini

## Getting started (local development)

### Prerequisites
- Node.js + npm (recommended: install via nvm)

### Install & run
```sh
# 1) Clone the repository
git clone <YOUR_GIT_URL>

# 2) Enter the project folder
cd <YOUR_PROJECT_NAME>

# 3) Install dependencies
npm i

# 4) Start the dev server
npm run dev
```

### Install & run

Configuration (high level)

You’ll typically need environment variables for:

Google Maps API key (map search + display)

Backend API endpoint (for screenshot upload + siteplan generation)

Any auth keys/tokens if protected routes are enabled
