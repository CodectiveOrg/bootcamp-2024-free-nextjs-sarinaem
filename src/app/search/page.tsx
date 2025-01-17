import { ReactElement } from "react";

import { doctors } from "@/app/mock/doctors";

import { FilterType } from "@/types/filter.type";

import GlobalSearchBoxComponent from "@/components/global-search-box/GlobalSearchBox.component";

import FilterProvider from "@/app/search/provider/filter/filter.provider";
import DoctorsProvider from "./provider/doctor/doctor.provider";

import AppointmentFilterComponent from "./components/show-filter/filters-summary.component";
import ExpertiseFilterComponent from "./components/expertise-filter/expertise-filter.component";
import GenderFilterComponent from "./components/gender-filter/gender-filter.component";
import DegreeFilterComponent from "./components/degree-filter/degree-filter.component";
import StatsComponent from "./components/stats/stats.component";
import ResultsComponent from "./components/results/results.component";
import CityFilterComponent from "./components/city-filter/city-filter";

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
          <div className={styles.title}>
            <h1>جستجوی پزشک</h1>
            <div className={styles.stats}>
              <StatsComponent />
            </div>
          </div>
          <div className={styles.search}>
            <GlobalSearchBoxComponent />
          </div>
          <div className={styles.detail}>
            <div className={styles.filters}>
              <ExpertiseFilterComponent />
              <GenderFilterComponent />
              <CityFilterComponent />
              <DegreeFilterComponent />
            </div>
            <div className={styles.toolbar}>
              <AppointmentFilterComponent />
            </div>
            <div className={styles.results}>
              <ResultsComponent />
            </div>
          </div>
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
