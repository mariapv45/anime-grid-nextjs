import { Geist, Geist_Mono, Delius_Swash_Caps } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const deliusSwashCaps = Delius_Swash_Caps({
  subsets: ["latin"],
  weight: "400",
});