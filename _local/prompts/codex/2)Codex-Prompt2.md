Update the landscaping homepage for Everstone Outdoor Living.

Add premium sticky header behavior inspired by the screenshots, but do not copy the original website.

Header behavior:
1. At the top of the page:
   - Show green top contact bar
   - Show transparent/glass navbar over hero image
   - Logo should be white or light version
   - Menu text should be white
   - CTA button should be dark green

2. After scrolling 80px:
   - Hide or compress the top contact bar
   - Navbar becomes sticky at top
   - Navbar background changes to clean white
   - Logo changes to green/dark version
   - Menu text becomes dark charcoal
   - CTA remains dark green
   - Add subtle shadow
   - Add smooth transition using Framer Motion
   - Height should reduce slightly for premium feel

Build these components:
- TopBar.jsx
- StickyNavbar.jsx
- Hero.jsx
- FeatureHighlights.jsx
- ServicesIntro.jsx

Add scroll detection:
- Use window scroll listener
- If scrollY > 80, set isScrolled true
- Animate background, logo color, text color, shadow, and height

Feature Highlights section:
Create a white section directly after hero with 4 premium cards/icons.

Section content:
1. Transparent Pricing
   Honest, detailed quotes with no surprises, built around your property, goals, and budget.

2. Skilled Craftsmanship
   Experienced crews specializing in interlock patios, retaining walls, sod installation, and outdoor upgrades.

3. Premium Materials
   We use quality stone, soil, sod, edging, and installation methods designed to last.

4. Fully Insured
   Professional, insured landscaping services completed safely, cleanly, and on schedule.

Design:
- White background
- 4-column desktop grid
- 2-column tablet
- 1-column mobile
- Circular icon at top
- Dark green headings
- Gold underline accent
- Soft fade-up animation on scroll
- Premium spacing
- Clean typography

Services Intro section:
Create a dark green section below feature highlights.

Content:
Eyebrow:
Everstone Outdoor Living

Heading:
Comprehensive Landscaping Services in Kitchener-Waterloo

Description:
From custom stonework to complete lawn transformations, we design and build refined outdoor spaces that improve curb appeal, function, and long-term property value.

Design:
- Deep forest green background
- White heading
- Gold eyebrow
- Gold small divider line
- Centered content
- Large vertical padding
- Fade-up animation
- Mobile responsive

Important:
- Keep the site premium and luxury
- Use Tailwind CSS
- Use Framer Motion
- Keep animations lightweight
- Do not use heavy 3D or Three.js
- Make navbar smooth and professional
- Make mobile menu work properly
- On mobile, sticky navbar should show logo left and hamburger right
- Mobile menu should slide down with dark green background and full-width CTA