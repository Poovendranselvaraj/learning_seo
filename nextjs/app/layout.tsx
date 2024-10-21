import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "JS Mastery",
  description: "JS Mastery Resource",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
