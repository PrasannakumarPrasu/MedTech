# Design Guidelines: Generic Medicine Delivery Platform (India)

## Design Approach
**Hybrid Approach**: Drawing from established Indian healthcare platforms (1mg, PharmEasy, Practo) for trust elements, combined with Material Design principles for familiarity and accessibility. Focus on building trust through clean, professional aesthetics while maintaining e-commerce efficiency.

---

## Core Design Principles
1. **Trust & Credibility**: Healthcare requires immediate visual confidence
2. **Accessibility First**: Clear typography, high contrast for older demographics
3. **Mobile-Optimized**: 80% of Indian users on mobile devices
4. **Cultural Sensitivity**: Conservative color palette appropriate for healthcare

---

## Color Palette

### Light Mode
- **Primary**: 210 100% 45% (Medical Blue - trust, reliability)
- **Primary Hover**: 210 100% 38%
- **Secondary**: 156 100% 35% (Success Green - health, wellness)
- **Accent**: 30 100% 50% (Warm Orange - CTAs only, sparingly)
- **Background**: 0 0% 98%
- **Card Background**: 0 0% 100%
- **Text Primary**: 220 15% 20%
- **Text Secondary**: 220 10% 50%
- **Border**: 220 15% 88%

### Dark Mode
- **Primary**: 210 90% 55%
- **Primary Hover**: 210 90% 48%
- **Secondary**: 156 85% 45%
- **Accent**: 30 95% 55%
- **Background**: 220 20% 10%
- **Card Background**: 220 15% 15%
- **Text Primary**: 0 0% 95%
- **Text Secondary**: 220 10% 65%
- **Border**: 220 15% 25%

---

## Typography

**Font Families** (Google Fonts):
- **Primary**: 'Inter' - Body text, UI elements
- **Headers**: 'Poppins' - Headings, emphasis

**Scale**:
- Hero H1: text-5xl md:text-6xl font-bold (Poppins)
- Section H2: text-3xl md:text-4xl font-semibold (Poppins)
- Card H3: text-xl md:text-2xl font-semibold (Poppins)
- Body: text-base leading-relaxed (Inter)
- Small: text-sm (Inter)
- Legal/Fine Print: text-xs (Inter)

---

## Layout System

**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 24 (p-4, m-6, gap-8, py-12, px-16, mb-24)

**Container Strategy**:
- Full-width sections: `w-full` with inner `max-w-7xl mx-auto px-4`
- Content sections: `max-w-6xl mx-auto`
- Product grids: `max-w-7xl mx-auto`
- Forms: `max-w-2xl mx-auto`

**Grid Patterns**:
- Product Cards: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`
- Feature Cards: `grid-cols-1 md:grid-cols-3 gap-8`
- Category Tiles: `grid-cols-3 md:grid-cols-6 gap-4`

---

## Component Library

### Navigation
- Sticky header with logo, search bar, cart icon, account
- Mobile: Hamburger menu with bottom navigation (Home, Search, Orders, Account)
- Search bar: Prominent with autocomplete suggestions
- Category pills below header for quick access

### Hero Section
- Height: 60vh on desktop, 50vh on mobile
- Background: Soft gradient (210 100% 98% to 156 50% 98%)
- Content: Left-aligned text (60% width) with CTA buttons
- Right: Large hero image showing medicine delivery/healthcare professional
- Include trust badges: "Licensed Pharmacy • 1Lac+ Happy Customers • Same Day Delivery"

### Product Cards
- White background with subtle shadow on hover
- Product image (square aspect ratio)
- Generic name (bold) + brand name (light)
- Price with discount badge if applicable
- "Add to Cart" button (full width, secondary color)
- Prescription required badge (if applicable, orange accent)

### Category Sections
- Horizontal scrollable pills (mobile)
- Grid tiles with icons (desktop)
- Icons: Medicine bottles, tablets, syrups, wellness, etc.

### Trust Elements
- License numbers in footer
- Security badges near payment
- Doctor consultation available banner
- Customer testimonials with photos

### Forms
- Card-based layout with sections
- Floating labels for inputs
- File upload for prescriptions with preview
- Clear validation states (green check, red error)
- Progress indicator for multi-step forms

### Order Management
- Timeline view for order status
- Color-coded status badges (blue: pending, orange: processing, green: delivered)
- Expandable order details accordion

### Admin Dashboard
- Sidebar navigation (collapsible on mobile)
- Data tables with filters and search
- Status overview cards with metrics
- Action buttons (approve, reject) with confirmation modals

### Modals & Overlays
- Prescription viewer (full-screen modal)
- Product quick view
- Cart sidebar (slide from right)
- Semi-transparent backdrop (backdrop-blur-sm)

---

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Hide secondary navigation on mobile
- Stack forms single column on mobile
- Product grid: 2 cols mobile → 3 cols tablet → 4 cols desktop

---

## Animations
- Minimal, purposeful only
- Cart icon bounce on add (subtle)
- Smooth page transitions (opacity fade)
- Loading skeletons for product grids
- No parallax or scroll-triggered animations

---

## Images

### Hero Section
- Large hero image (right side, 40% width on desktop)
- Content: Delivery person handing medicine package to customer, or pharmacist with medicines
- Alternative: Happy family with medicine/healthcare professional

### Trust Section
- Customer testimonial photos (circular, 80px diameter)
- Partner pharmacy logos (grayscale, color on hover)
- Certification badges (small, inline)

### Product Listings
- Medicine package images (square, 300x300px minimum)
- Placeholder for prescription required items

### Category Tiles
- Icon-based (use Heroicons or similar)
- Avoid photographic images in category sections

---

## India-Specific Considerations
- Price in ₹ (rupee symbol)
- Phone number input with +91 default
- Support for Hindi and English (language toggle)
- Cash on Delivery option prominent
- Pin code based delivery check
- Festival discount banners (Diwali, etc.)
- WhatsApp customer support integration