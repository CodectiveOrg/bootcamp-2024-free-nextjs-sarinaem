import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/GlobalSearchBox.component";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <GlobalSearchBoxComponent />
      </div>
      <div className={styles.main}>
        <div className={styles.filter}>
          {/* <CardComponent></CardComponent> */}
        </div>
        <div className={styles.result}>result</div>
      </div>
    </div>
  );
}
