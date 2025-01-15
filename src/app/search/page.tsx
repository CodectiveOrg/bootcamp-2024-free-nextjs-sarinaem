import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/GlobalSearchBox.component";

import { doctors } from "@/app/mock/doctors";

import { FilterType } from "@/types/filter.type";

import FilterProvider from "@/app/search/provider/filter/filter.provider";
import DoctorsProvider from "./provider/doctor/doctor.provider";

import styles from "./page.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({
  searchParams,
}: Props): Promise<ReactElement> {
  const defaultFilters = generateDefaultFilters(await searchParams);

  return (
    <FilterProvider defaultFilters={defaultFilters}>
      <DoctorsProvider doctors={doctors}>
        <div className={styles.page}>
          <div className={styles.search}>
            <GlobalSearchBoxComponent />
          </div>
          <div className={styles.filters}></div>
          <div className={styles.toolbar}>
            <div className={styles.stats}></div>
          </div>
          <div className={styles.results}></div>
        </div>
      </DoctorsProvider>
    </FilterProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FilterType {
  const { query, expertise } = searchParams;

  return {
    query: normalizeFilter(query),
    expertise: normalizeFilter(expertise) || "",
  };
}

function normalizeFilter(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}
