import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi there, I'm Sudeep",
  description:
    "Welcome to my personal portfolio website, Im Sudeep, this is still under construction. Thank you for visiting",
};

const stars = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 2}s`,
  duration: `${1 + Math.random() * 2}s`,
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute h-1 w-1 rounded-full bg-white animate-pulse"
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}