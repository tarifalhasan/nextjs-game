import "@/styles/globals.css";

import { Heading_Pro_Book } from "@/lib/font";
import { cn } from "@/lib/utils";
import { RootLayoutProps } from "@/types";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          Heading_Pro_Book.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
