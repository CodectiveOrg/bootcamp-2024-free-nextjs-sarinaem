"use client";

import { ReactElement, useContext } from "react";

import CardComponent from "@/components/cardDoctor/card.component";

import { FiltersContext } from "@/app/search/provider/filter/filter.provider";

import styles from "./expertise-filter.module.css";

const options: string[] = [
  "زنان، زایمان و نازایی",
  "قلب و عروق",
  "خون و سرطان",
  "پزشک عمومی",
  "تغذیه",
  "عفونی",
  "مغز و اعصاب",
  "زیبایی",
  "دیابت",
  "تصویربرداری",
];

export default function ExpertiseFilterComponent(): ReactElement {
  const { dispatchFilters } = useContext(FiltersContext);

  const buttonClickHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "expertise", value });
  };

  return (
    <CardComponent>
      <ul className={styles["expertise-filter"]}>
        {options.map((x) => (
          <li key={x}>
            <button type="button" onClick={() => buttonClickHandler(x)}>
              {x}
            </button>
          </li>
        ))}
      </ul>
    </CardComponent>
  );
}
