import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
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
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <ul>
            <li>خانه</li>
            <li>محصولات</li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
