import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={cn(
            "relative font-sans h-full antialiased",
            inter.className
          )}
          suppressHydrationWarning={true}
        >
          {/* ======== || RENDER HEADER || ================= */}
          <Header />
          {/* ======== || RENDER CONTAINER MAIN || ================= */}
          <main className="h-full flex flex-col min-h-screen">
            <div className="flex-grow flex-1">{children}</div>
          </main>
          {/* ======== || RENDER FOOTER || ================= */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
