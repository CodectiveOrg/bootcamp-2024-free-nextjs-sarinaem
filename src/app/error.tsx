"use client";

import { ReactElement } from "react";

import Image from "next/image";

import errorImage from "@/assets/illustrations/error.jpg";

import styles from "./error.module.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className={styles["error"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>خطر پخش میکروب‌ها!</div>
        <h1>خطای غیرمنتظره رخ داده، در تلاش برای رفع آن هستیم</h1>
        <p>لطفاً منتظر بمانید یا با تیم پشتیبانی تماس بگیرید.</p>
      </div>
      <div className={styles.visuals}>
        <Image src={errorImage} alt="" />
      </div>
      <div className={styles.actions}>
        <button onClick={reset}>دوباره تلاش کنید</button>
      </div>
      <div className={styles.trace}>
        <details>
          <summary>نمایش متن خطا</summary>
          <pre dir="ltr">{error.stack}</pre>
        </details>
      </div>
    </div>
  );
}
