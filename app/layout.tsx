import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AP World Studier",
  description: "Interactive globe + tutor for AP World History.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
