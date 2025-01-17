"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "@/app/search/provider/filter/filter.provider";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

export default function CityFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "city", value });
  };

  return (
    <RadioFilterComponent
      title="شهر"
      name="city"
      options={[
        { value: "تهران", label: "تهران" },
        { value: "یزد", label: "یزد" },
        { value: "زنجان", label: "زنجان" },
        { value: "رشت", label: "رشت" },
        { value: "تبریز", label: "تبریز" },
        { value: "اهواز", label: "اهواز" },
      ]}
      value={filters.city}
      onChange={changeHandler}
    />
  );
}
