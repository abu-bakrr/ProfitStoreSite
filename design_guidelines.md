# Design Guidelines: B2B E-Commerce Platform Landing Page

## Design Approach

**Reference-Based: Modern B2B SaaS Landing Pages**
Drawing inspiration from Stripe, Vercel, Linear, and Notion's professional aesthetic. This approach balances technical credibility with approachable design—essential for converting business decision-makers.

**Key Principles:**
- Data-driven credibility: Visualizations build trust
- Professional minimalism: Clean, spacious layouts
- Progressive disclosure: Information revealed strategically
- Conversion-focused: Clear CTAs at decision points

---

## Typography System

**Font Stack:**
- Primary: Inter (via Google Fonts) - clean, professional, excellent for data
- Accent: Space Grotesk - for headings requiring visual impact

**Hierarchy:**
- Hero Headline: 3xl/4xl/6xl responsive, font-bold, tight leading (-0.02em)
- Section Headlines: 2xl/3xl/4xl, font-semibold
- Subheadlines: xl/2xl, font-medium, muted text treatment
- Body Copy: base/lg, font-normal, line-height relaxed (1.7)
- Data/Stats: 4xl/5xl for numbers, font-bold, xs for labels
- Chart Labels: sm, font-medium
- Button Text: sm/base, font-semibold, tracking-wide

---

## Layout System

**Spacing Primitives:**
Use Tailwind units of **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm.

**Container Strategy:**
- Outer containers: `max-w-7xl mx-auto px-6 lg:px-8`
- Content sections: `py-16 md:py-24 lg:py-32`
- Card internal spacing: `p-6 md:p-8`
- Component gaps: `gap-8 md:gap-12 lg:gap-16`

**Grid Patterns:**
- Stats/KPI cards: `grid-cols-1 md:grid-cols-3 gap-6`
- Feature benefits: `grid-cols-1 lg:grid-cols-2 gap-12`
- Testimonials/social proof: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## Page Structure & Sections

**1. Hero Section (100vh)**
- Split layout: 60% content, 40% visual
- Headline + subheadline + dual CTA (primary "Заказать сайт" + secondary "Смотреть демо")
- Hero image: Modern 3D illustration of e-commerce dashboard or abstract digital storefront (right side)
- Subtle animated elements: floating product cards or interface mockups
- Trust indicators below CTAs: "Trusted by 120+ businesses" with small logos

**2. Stats Bar (inline, above fold)**
- Three large animated numbers in a row
- Format: Big number (from JSON) + small label + growth indicator
- Example: "35% ↗ Рост конверсий" | "42% ↗ Увеличение прибыли" | "123 Довольных клиентов"
- Appears immediately below hero with `py-12 bg-subtle`

**3. Why Business Needs a Website Section**
- Grid of 6 benefit cards (3x2 on desktop, 2x3 on tablet, 1-col mobile)
- Each card: Icon + bold headline + 2-line description + percentage from JSON
- Cards have gentle hover lift effect
- Icons: Simple line illustrations (shopping cart, growth chart, globe, mobile device, 24/7 clock, shield)

**4. Revenue Growth Chart Section**
- Centered headline: "Наблюдайте за ростом вашего бизнеса"
- Full-width chart container with subtle background panel
- Recharts LineChart with smooth curves, gradient fill under line
- Interactive tooltips on hover
- Data points from JSON, graceful fallback to demo data
- Export CSV button positioned top-right of chart: "Скачать данные ↓"

**5. Client Success Counter**
- Centered section with large animated number
- Format: Huge number (counting animation on scroll) + "Компаний уже получили свой сайт"
- Testimonial carousel below (3 quotes rotating)
- Each testimonial: Quote + Company name + Industry tag

**6. CTA Section (Before Footer)**
- Centered content with gradient background treatment
- Headline: "Готовы увеличить прибыль?"
- Large primary button: "Заказать разработку сайта"
- Supporting text: "Первая консультация — бесплатно. Запуск от 2 недель."

**7. Footer**
- Multi-column layout: Company info | Services | Resources | Contact
- Newsletter signup inline
- Social links + copyright
- Trust badges: "Secure checkout" + "24/7 Support"

---

## Component Library

**Cards:**
- Border radius: `rounded-xl` (12px)
- Shadow: `shadow-lg` with subtle hover to `shadow-2xl`
- Background: Pure white on light background
- Padding: `p-6 md:p-8`
- Border: Optional 1px subtle border for definition

**Buttons:**
- Primary: Large rounded (`rounded-full`), bold text, generous padding `px-8 py-4`
- Secondary: Outlined version with transparent background
- Small/Tertiary: Text-only with arrow icon
- All buttons: Smooth scale transform on hover (0.98 → 1.02)

**Modal (Order Form):**
- Overlay: Dark backdrop with blur
- Modal card: `max-w-md` centered, `rounded-2xl`, generous padding
- Form fields: Stacked vertically, `gap-4`
- Input styling: `rounded-lg border-2`, focus ring treatment
- Submit button: Full-width primary style
- Close icon: Top-right, subtle hover background

**Chart Container:**
- Background panel: Subtle background with `rounded-2xl` and `p-8`
- Responsive height: `h-80 md:h-96`
- Chart styling: Clean grid lines, minimal decoration
- Legend: Bottom placement, horizontal

---

## Animation Strategy

**Page Load:**
- Hero elements: Staggered fade-up (0.1s delays between headline, subhead, CTAs)
- Stats bar: Numbers count-up animation (duration: 2s with easing)

**Scroll Triggers:**
- Section fade-in: Elements appear with slight upward motion as they enter viewport
- Chart drawing: Line animates from left to right on first view
- Client counter: Triggers count animation when 50% visible

**Interactions:**
- Card hover: Gentle lift (translateY: -4px) + shadow increase
- Button hover: Subtle scale + brightness increase
- Modal: Fade + scale entrance/exit

**Performance:**
- Use `will-change` sparingly
- Prefer transforms over position changes
- Limit simultaneous animations to 3-4 elements

---

## Images

**Hero Image (Required):**
- Position: Right 40% of hero section
- Type: Modern 3D illustration or dashboard mockup showing e-commerce analytics
- Style: Clean, professional, floating elements with subtle shadow
- Format: High-quality PNG/WebP with transparency
- Alt: "Современная панель управления интернет-магазином"

**Section Backgrounds:**
- Subtle gradient overlays (programmatic, not image files)
- Abstract geometric patterns for visual interest (CSS-based)

**Icon Set:**
- Use Heroicons (outline style) throughout for consistency
- 24px base size, scale to 32px for emphasis

---

## Accessibility & Polish

- Form labels: Visible and clearly associated
- Focus states: Prominent ring on all interactive elements
- Contrast ratio: Minimum 4.5:1 for all text
- Keyboard navigation: Logical tab order, modal trap focus
- Loading states: Skeleton screens for JSON data fetch
- Error handling: Graceful fallbacks with helpful messages
- Mobile: Touch targets minimum 44x44px

**SEO Elements:**
- Title: "Сайт магазина, который приносит прибыль | [Company Name]"
- Meta description: Value proposition in 155 characters
- Favicon: Simple, recognizable icon (shopping cart or graph)
- Structured data: Organization + Service schema