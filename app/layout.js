import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  IconHome,
  IconMessage,
  IconServer,
  IconUser,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Footer from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coderbux - Sifatli IT Xizmatlari",
  description:
    "Coderbux kompaniyasi sizga eng zamonaviy va sifatli IT xizmatlarini taqdim etadi.",
  keywords:
    "IT xizmatlari, veb dasturlash, mobil ilovalar, xavfsizlik, bulut texnologiyalari",
  author: "Coderbux",
  robots: "index, follow",
  openGraph: {
    title: "Coderbux - Sifatli IT Xizmatlari",
    description:
      "Coderbux kompaniyasi sizga eng zamonaviy va sifatli IT xizmatlarini taqdim etadi.",
    url: "https://coderbux.com",
    type: "website",
    locale: "uz_UZ",
    siteName: "Coderbux",
    images: [
      {
        url: "https://coderbux.com/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coderbux IT xizmatlari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coderbux - Sifatli IT Xizmatlari",
    description:
      "Coderbux kompaniyasi sizga eng zamonaviy va sifatli IT xizmatlarini taqdim etadi.",
    site: "@coderbux",
    creator: "@coderbux",
    images: ["https://coderbux.com/meta-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const navItems = [
    {
      name: "Asosiy",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Xizmatlar",
      link: "#services",
      icon: <IconServer className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Biz haqimizda",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress className="top-0" />
          <FloatingNav navItems={navItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
