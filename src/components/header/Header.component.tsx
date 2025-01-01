"use client";

import { ReactElement, useState } from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";
import clsx from "clsx";

import MingcuteMoonFill from "@/assets/dark&light-mode/MingcuteMoonFill";
import MingcuteSunLine from "@/assets/dark&light-mode/MingcuteSunLine";

import styles from "./header.module.css";

const navItems = [
  {
    id: 1,
    title: "خانه",
    href: "/",
  },
  {
    id: 2,
    title: "جستجو",
    href: "/search",
  },
  {
    id: 3,
    title: "مجله سلامت",
    href: "/blog",
  },
  {
    id: 4,
    title: "نوبت‌دهی",
    href: "/appointment",
  },
  {
    id: 5,
    title: "درباره‌ی ما",
    href: "/about",
  },
  {
    id: 6,
    title: "تماس با ما",
    href: "/contact",
  },
];
export default function HeaderComponent(): ReactElement {

  const [theme, setTheme] = useState("light");

  const pathname = usePathname();
        
  return (
    <header className={styles.header}>
      <button
        className={styles.changeBackground}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <MingcuteSunLine /> : <MingcuteMoonFill />}
      </button>
      
      <nav>
        <ul>
          {navItems.map((item) => {
            return (
              <li key={item?.id}>
                <Link
                  href={item?.href}
                  className={clsx(pathname === item.href && styles.active)}
                >
                  {item?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت‌نام</button>
    </header>
  );
}
