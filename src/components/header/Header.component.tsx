"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
  const pathname = usePathname();

  return (
    <header className={styles.header}>
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
