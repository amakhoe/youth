import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Champier LDA",
  description: "Template created by Amakhoe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className="antialiased bg-[#00040f]">
        {children}
      </body>
    </html>
  );
}
