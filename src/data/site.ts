import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Flower2,
  Hammer,
  HardHat,
  Home,
  Leaf,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Shovel,
  Sparkles,
  Sprout,
  Star,
  Trees,
  WalletCards
} from "lucide-react";

export const phone = "+1-519-635-4645";
export const phoneHref = "tel:15196354645";
export const email = "hello@greenforgelandscaping.ca";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" }
];

export const trustCards = [
  { icon: WalletCards, title: "Competitive Pricing", text: "Clear quotes, practical recommendations, and no surprise add-ons." },
  { icon: HardHat, title: "Experienced Team", text: "Crews trained across sod, interlock, retaining walls, and softscaping." },
  { icon: ShieldCheck, title: "High Quality Materials", text: "Ontario-ready stone, soil, sod, and garden materials that last." },
  { icon: Clock, title: "Safe & Efficient Work", text: "Organized scheduling, tidy jobsites, and respectful project delivery." }
];

export const services = [
  { icon: Sprout, title: "Sod Installation", category: "Sod", image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80", text: "Fresh sod installation, grading, soil prep, and lawn repair for instant curb appeal." },
  { icon: Flower2, title: "Softscaping & Gardens", category: "Gardens", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80", text: "Planting, mulch, river rock, garden edging, and low-maintenance landscape upgrades." },
  { icon: Ruler, title: "Retaining Walls", category: "Retaining Walls", image: "https://images.unsplash.com/photo-1621955837981-6c6f5371a4ff?auto=format&fit=crop&w=900&q=80", text: "Structural and decorative retaining walls designed for drainage, grade, and durability." },
  { icon: Home, title: "Interlock Driveways", category: "Interlock", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80", text: "Premium paver driveways built to handle Ontario freeze-thaw conditions." },
  { icon: Hammer, title: "Interlock Patios", category: "Interlock", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80", text: "Backyard patios and outdoor living areas planned for comfort and long-term use." },
  { icon: Trees, title: "Interlock Walkways", category: "Interlock", image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=80", text: "Clean walkways, front entrances, and garden paths with crisp paver detailing." },
  { icon: Shovel, title: "Outdoor Staircases", category: "Interlock", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80", text: "Stone steps and grade transitions that make sloped yards safer and easier to use." },
  { icon: Leaf, title: "Lawn Maintenance", category: "Maintenance", image: "https://images.unsplash.com/photo-1592420114272-7ec74f28e8a3?auto=format&fit=crop&w=900&q=80", text: "Seasonal lawn care, edging, cleanup, and upkeep for a sharp exterior all year." },
  { icon: CalendarCheck, title: "Seasonal Cleanup", category: "Maintenance", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80", text: "Spring and fall property cleanup to keep beds, turf, and hardscapes looking fresh." }
];

export const projects = [
  ["Backyard Patio Reset", "Interlock", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80"],
  ["New Front Sod", "Sod", "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80"],
  ["Garden Border Upgrade", "Gardens", "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80"],
  ["Retaining Wall Build", "Retaining Walls", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"],
  ["Driveway Paver Install", "Interlock", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80"],
  ["Clean Lawn Maintenance", "Maintenance", "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=80"],
  ["Softscape Refresh", "Gardens", "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80"],
  ["Stone Walkway", "Interlock", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"],
  ["Level Yard Sod", "Sod", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"],
  ["Raised Garden Edge", "Gardens", "https://images.unsplash.com/photo-1599685315640-12e2623d9cc5?auto=format&fit=crop&w=900&q=80"],
  ["Terraced Wall", "Retaining Walls", "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80"],
  ["Seasonal Property Cleanup", "Maintenance", "https://images.unsplash.com/photo-1592420114272-7ec74f28e8a3?auto=format&fit=crop&w=900&q=80"]
] as const;

export const testimonials = [
  { name: "Rachel M.", location: "Kitchener", text: "GreenForge gave us a fast quote, explained the options clearly, and transformed our patchy yard with new sod in one day." },
  { name: "Daniel P.", location: "Waterloo", text: "The crew was organized and respectful. Our interlock patio looks clean, level, and far better than the builder-grade slab we had before." },
  { name: "Amrita S.", location: "Cambridge", text: "They handled our retaining wall with great communication from estimate to cleanup. The site was spotless when they left." },
  { name: "Mark T.", location: "Guelph", text: "Professional team, honest pricing, and excellent workmanship. The front walkway made the whole home feel upgraded." },
  { name: "Nadia R.", location: "Milton", text: "They helped us choose low-maintenance plants and edging that actually work for our schedule. Friendly and practical." },
  { name: "Chris B.", location: "Brantford", text: "Our seasonal cleanup was quick and thorough. Beds, lawn edges, and patio all looked ready for spring." }
];

export const faqs = [
  ["Do I need a permit for a retaining wall?", "Permit rules depend on wall height, location, drainage, and municipality. We help you understand the requirements before work begins."],
  ["When is the best time for sod installation?", "Spring and early fall are ideal in Ontario, but summer installs can work with the right watering plan and preparation."],
  ["How long does an interlock patio take?", "Most residential patios take a few days once materials are ready, depending on size, excavation, base work, and access."],
  ["Do you provide free estimates?", "Yes. We provide free, no-pressure estimates so homeowners can compare scope, pricing, and timing confidently."],
  ["What areas do you serve?", "We serve Kitchener, Waterloo, Cambridge, Guelph, Milton, Brantford, Woodstock, and nearby communities."],
  ["Do you offer seasonal maintenance?", "Yes. We offer lawn maintenance, garden cleanup, spring refreshes, and fall property cleanup."],
  ["How should I prepare before the project starts?", "Clear access where possible, mark irrigation or private utilities, and let us know about pets, gates, or parking constraints."]
];

export const serviceAreas = ["Kitchener", "Waterloo", "Cambridge", "Guelph", "Milton", "Brantford", "Woodstock"];

export const IconStar = Star;
export const IconCheck = CheckCircle2;
export const IconSparkles = Sparkles;
export const IconMapPin = MapPin;
export const IconPhone = Phone;
export const IconLeaf = Leaf;
export const IconBadge = BadgeCheck;
