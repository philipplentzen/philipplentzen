import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import {
  Caveat,
  Fira_Code,
  Instrument_Serif,
  Inter,
  Overpass,
} from "next/font/google";
import { PropsWithChildren } from "react";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const fira = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html
      className={cn(
        "scroll-smooth antialiased",
        caveat.variable,
        fira.variable,
        instrument.variable,
        inter.variable,
        overpass.variable,
      )}
      lang={"de"}
    >
      <body className={"max-w-screen relative overflow-x-hidden"}>
        {children}
      </body>
    </html>
  );
}
