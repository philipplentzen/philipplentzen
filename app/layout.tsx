import "@/styles/globals.css";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html className={`scroll-smooth`} lang={`de`}>
      <body>{children}</body>
    </html>
  );
}
