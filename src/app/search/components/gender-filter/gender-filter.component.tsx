"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "@/app/search/provider/filter/filter.provider";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

export default function GenderFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "gender", value });
  };

  return (
    <RadioFilterComponent
      title="جنسیت پزشک"
      name="gender"
      options={[
        { value: "man", label: "آقا" },
        { value: "woman", label: "خانم" },
      ]}
      value={filters.gender}
      onChange={changeHandler}
    />
  );
}
