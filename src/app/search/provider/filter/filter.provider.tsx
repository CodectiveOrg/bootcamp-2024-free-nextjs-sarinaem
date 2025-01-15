"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useReducer,
} from "react";

import {
  FiltersAction,
  filtersReducer,
} from "@/app/search/provider/reducers/filters.reducer";

import { FilterType } from "@/types/filter.type";

type Value = {
  filters: FilterType;
  dispatchFilters: Dispatch<FiltersAction>;
};

export const FiltersContext = createContext<Value>({
  filters: {},
  dispatchFilters: () => {},
});

type Props = PropsWithChildren & {
  defaultFilters: FilterType;
};

export default function FiltersProvider({
  children,
  defaultFilters,
}: Props): ReactElement {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
