import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@designcodeio/threeui/style.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WaffleBox Productions",
  description:
    "Not your average production house. We shoot. We edit. We vibe. Photography, content, and design studio.",
  openGraph: {
    title: "WaffleBox Productions",
    description:
      "Not your average production house. We shoot. We edit. We vibe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#080808] text-[#f5f5f5]">
        {children}
      </body>
    </html>
  );
}
