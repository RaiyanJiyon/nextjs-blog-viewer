"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

// Move font declarations to the module scope
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <KindeProvider
          clientId={process.env.KINDE_CLIENT_ID}
          clientSecret={process.env.KINDE_CLIENT_SECRET}
          issuer={process.env.KINDE_ISSUER_URL}
          redirectUri={process.env.KINDE_SITE_URL}
          postLoginRedirectUri={process.env.KINDE_POST_LOGIN_REDIRECT_URL}
        >
          <Navbar />
          {children}
        </KindeProvider>
      </body>
    </html>
  );
}
