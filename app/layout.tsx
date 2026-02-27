import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavProvider from "@/components/NavProvider";

const inter = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hapstr",
  description: "Discover your next home in stunning 3D.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-[family-name:var(--font-inter)]`}>
        <NavProvider>
          {children}
        </NavProvider>
      </body>
    </html>
  );
}