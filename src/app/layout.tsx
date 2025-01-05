import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/Header.component";
import FooterComponent from "@/components/footer/Footer.component";

import "./globals.css";

import "@/styles/typography.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "پزشک‌یاب",
  description:
    "سامانه آنلاین نوبت‌دهی دکتر با حضور بیش از ۱۰۰۰ متخصص از سراسر کشور",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          نوبت‌دهی پزشکی، سامانه نوبت‌دهی اینترنتی بیمارستان و پزشکان
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}
