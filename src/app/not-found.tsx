import { ReactElement } from "react";

import Image from "next/image";

import notFoundImage from "@/assets/illustrations/not-found.webp";

import GlobalSearchBoxComponent from "@/components/global-search-box/GlobalSearchBox.component";

import styles from "./not-found.module.css";

export default function NotFound(): ReactElement {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>۴۰۴</div>
        <h1>متاسفیم! پزشک موردنظرتان پیدا نشد</h1>
        <p>
          لطفا نام پزشک یا مراکز درمانی موردنظر را در کادر جستجو وارد کنید تا آن
          را به شما نمایش دهیم.
        </p>
      </div>
      <div className={styles.visuals}>
        <Image src={notFoundImage} alt="notFound" />
      </div>
      <div className={styles.search}>
        <GlobalSearchBoxComponent />
      </div>
    </div>
  );
}
