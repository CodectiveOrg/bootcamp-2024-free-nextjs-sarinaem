import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";
import idkLogo from "@/assets/logo/idk.svg";

import MingcuteLinkedinLine from "@/icons/MingcuteLinkedinLine";
import MingcuteYoutubeLine from "@/icons/MingcuteYoutubeLine";
import MingcuteTelegramLine from "@/icons/MingcuteTelegramLine";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>پزشک‌یاب</div>
        <p className={styles.description}>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
          ایران
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="certificate logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="enamad logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={idkLogo} alt="idk logo" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="https://t.me/sarinaem" target="_blank">
              <MingcuteTelegramLine />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/sarinaemadi/"
              target="_blank"
            >
              <MingcuteLinkedinLine />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@BijanProgrammer"
              target="_blank"
            >
              <MingcuteYoutubeLine />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به
        من می‌باشد!
      </p>
    </footer>
  );
}
