import "./globals.css";

export const metadata = {
  title: "Everstone Outdoor Living | Premium Landscaping Kitchener-Waterloo",
  description: "Everstone Outdoor Living builds premium landscaping, interlock patios, retaining walls, sod installation, and outdoor living spaces in Kitchener, Waterloo, and Cambridge."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
