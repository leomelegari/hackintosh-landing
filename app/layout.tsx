import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfProRegular = localFont({
  src: "./fonts/SF-Pro-Text-Regular.woff",
  variable: "--font-sf-regular-mono",
  weight: "100 900",
});

const sfProSemibold = localFont({
  src: "./fonts/SF-Pro-Text-Semibold.woff",
  variable: "--font-sf-semibold-mono",
  weight: "100 900",
});

const sfProBold = localFont({
  src: "./fonts/SF-Pro-Text-Bold.woff",
  variable: "--font-sf-bold-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Melegari - Consultoria Hackintosh",
  description: "Consultoria Hackintosh",
  icons: {
    icon: [
      {
        url: "/apple-gray.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfProRegular.className} ${sfProBold.className} ${sfProSemibold.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
