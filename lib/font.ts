import localFont from "next/font/local";
export const Heading_Pro_Book = localFont({
  src: [
    {
      path: "./font/Heading-Pro-Book-trial.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/Heading-Pro-Book-Italic-trial.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "./font/Heading-Pro-Bold-trial.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/Heading-Pro-Bold-Italic-trial.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "./font/Heading-Pro-ExtraBold-trial.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./font/Heading-Pro-ExtraBold-Italic-trial.woff",
      weight: "800",
      style: "italic",
    },
    {
      path: "./font/Heading-Pro-Heavy-trial.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./font/Heading-Pro-Heavy-Italic-trial.woff",
      weight: "800",
      style: "italic",
    },
  ],

  variable: "--font-heading-pro",
});
