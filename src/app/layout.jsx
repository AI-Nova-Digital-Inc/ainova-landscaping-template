import { site } from "@/config/site";
import "./globals.css";

export const metadata = {
  title: `${site.name} | Premium Landscaping Kitchener-Waterloo`,
  description: "${site.name} builds premium landscaping, interlock patios, retaining walls, sod installation, and outdoor living spaces in Kitchener, Waterloo, and Cambridge."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
