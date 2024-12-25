import MingcuteSearch2Line from "@/icons/MingcuteSearch2Line";
import styles from "./globalsearchbox.module.css";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

export default function GlobalSearchBoxComponent() {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearch2Line />
      </div>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
