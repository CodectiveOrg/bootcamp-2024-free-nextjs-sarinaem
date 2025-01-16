"use client";

import { ReactElement, useContext } from "react";

import CardComponent from "@/components/cardDoctor/card.component";

import { FiltersContext } from "@/app/search/provider/filter/filter.provider";

import styles from "./expertise-filter.module.css";

const options: string[] = [
  "استخوان و مفاصل",
  "زنان، زایمان و نازایی",
  "چشم پزشکی",
  "گوارش و معده",
  "کلیه و مجاری ادراری",
  "غدد و متابولیسم",
  "قلب و عروق",
  "داخلی",
  "دهان و دندان",
  "پوست و مو",
  "اطفال، کودکان و نوزادان",
  "ریه و دستگاه تنفسی",
  "گوش، حلق و بینی",
  "خون و سرطان",
  "پزشک عمومی",
  "تغذیه",
  "روان‌شناسی",
  "ژنتیک",
  "عفونی",
  "مغز و اعصاب",
  "داروسازی",
  "زیبایی",
  "آلرژی",
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
