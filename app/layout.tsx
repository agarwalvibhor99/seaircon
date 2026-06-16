import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SE Aircon | Engineered Comfort Since 1990",
  description:
    "HVAC design, installation, sales and service for residential, commercial and industrial spaces.",
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
