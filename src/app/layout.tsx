import type { Metadata } from "next";
import "./global.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Md Abdullah Al Noman",
  description:
    "Created to demonstrate my projects and skills as software engineer",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
