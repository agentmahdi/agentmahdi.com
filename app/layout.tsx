import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "agentmahdi",
  description: "Building AI-powered developer tools and infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif", backgroundColor: "#000", color: "#a3a3a3" }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 24px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
