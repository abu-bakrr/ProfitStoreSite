# B2B E-Commerce Platform Landing Page

## Overview

This is a professional B2B e-commerce platform landing page built for Russian-speaking markets. The application showcases online store development services with a focus on data-driven credibility and conversion optimization. It features a modern SaaS-inspired design with interactive statistics and client testimonials.

The platform is designed to convert business decision-makers by presenting quantifiable results (conversion growth, revenue increase, client trust metrics) and providing clear calls-to-action throughout the user journey.

## Recent Changes

**November 5, 2025** - Removed admin panel functionality
- Deleted admin page and `/admin` route
- Removed PUT `/api/stats` endpoint for updating statistics
- Removed user authentication storage and schemas
- Simplified to read-only JSON-based content system
- All content now managed directly through `public/data/stats.json`

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR (Hot Module Replacement)
- Client-side routing via Wouter (lightweight alternative to React Router)
- Single Page Application (SPA) architecture with client-side rendering

**UI Component System**
- Shadcn/ui component library (Radix UI primitives + custom styling)
- "New York" design variant with custom theming
- Tailwind CSS for utility-first styling with custom design tokens
- CSS custom properties for theming (light/dark mode support)
- Framer Motion for animations and transitions

**Design System**
- Typography: Inter (primary) and Space Grotesk (accents) from Google Fonts
- Responsive breakpoints: Mobile-first approach (768px mobile breakpoint)
- Custom spacing scale using Tailwind units (2, 4, 6, 8, 12, 16, 20, 24)
- Professional color palette with neutral base colors and primary accent colors

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- Local component state via React hooks
- No global state management library (Redux, Zustand, etc.)

**Data Visualization**
- Recharts library for rendering interactive line charts
- Animated counters using custom React hooks for KPI displays
- CSV export functionality for chart data

### Backend Architecture

**Server Framework**
- Express.js as the web application framework
- TypeScript for type safety across the stack
- HTTP server created via Node's native `http` module

**API Design**
- RESTful API endpoints under `/api` prefix
- JSON-based request/response format
- File-based data storage (JSON files in `public/data`)
- API endpoints:
  - `GET /api/stats` - Retrieve statistics data

**Middleware Stack**
- JSON body parsing with raw body preservation (for webhook support)
- URL-encoded form data parsing
- Request logging middleware with response time tracking
- Vite middleware integration for development (HMR, asset serving)

**Development vs Production**
- Development: Vite dev server with middleware mode
- Production: Static file serving from built assets
- Conditional Replit-specific plugins (cartographer, dev banner)

### Data Storage Solutions

**Current Implementation**
- File-based storage using JSON files (`public/data/stats.json`)
- All application data (statistics, testimonials, charts) stored in a single JSON file
- No database connection required
- Read-only access via GET `/api/stats` endpoint

**Schema Design**
- Zod validation schemas in `shared/schema.ts` for runtime type checking
- Statistics data schema with nested objects for KPIs, charts, testimonials
- No user authentication or authorization schemas

**Content Management**
- All content changes require manual editing of `stats.json` file
- No admin panel - content is managed directly through the JSON file
- Testimonials, statistics, and charts all configured in the data file

### External Dependencies

**Third-Party UI Libraries**
- Radix UI: Comprehensive set of unstyled, accessible UI primitives
  - Dialog, Dropdown, Popover, Tooltip, and 20+ other components
  - Focus on accessibility (ARIA attributes, keyboard navigation)
- Embla Carousel: Touch-friendly carousel component
- Recharts: Declarative charting library built on D3
- Framer Motion: Animation library for React

**Development Tools**
- Replit-specific plugins: Runtime error modal, cartographer (code intelligence), dev banner
- ESBuild for production server bundling
- Drizzle Kit for database migrations and schema management

**API & Data Services**
- Neon Database: Serverless PostgreSQL (configured but not actively used)
- File system access via Node.js `fs.promises` for JSON data persistence

**Form Handling**
- React Hook Form with Zod resolvers for form validation
- Zod schema validation for both client and server-side data validation

**Utilities**
- `clsx` and `tailwind-merge`: CSS class name composition
- `class-variance-authority`: Type-safe component variant generation
- `date-fns`: Date manipulation and formatting
- `nanoid`: Unique ID generation

**TypeScript Configuration**
- Path aliases configured: `@/` (client), `@shared/` (shared), `@assets/` (assets)
- Strict mode enabled with ESNext module resolution
- Bundler module resolution strategy