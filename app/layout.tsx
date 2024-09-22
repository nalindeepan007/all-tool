import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "allTool - Media",
  description: "upload download videos photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
        variables: { colorPrimary: "#772233" },
        signIn: {
          baseTheme: neobrutalism,
          variables: { colorPrimary: "#772233" },
        },
      }}
    >
      <html data-theme="coffee" lang="en">
        <body
          data-theme="coffee"
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex min-h-screen items-center justify-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
