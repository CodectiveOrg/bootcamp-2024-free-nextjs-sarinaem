import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/GlobalSearchBox.component";

import Doctorfinder from "@/logo/doctorfinder";

import styles from "./page.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <Doctorfinder />
        پزشک‌یاب
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
