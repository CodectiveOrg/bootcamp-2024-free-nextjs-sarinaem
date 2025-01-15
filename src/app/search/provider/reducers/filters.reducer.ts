import { FilterType } from "@/types/filter.type";

export type FiltersAction =
  | {
      type: "updated_filter";
      key: keyof FilterType;
      value: string;
    }
  | {
      type: "removed_filter";
      key: keyof FilterType;
    }
  | {
      type: "removed_all";
    };

export function filtersReducer(filters: FilterType, action: FiltersAction) {
  switch (action.type) {
    case "updated_filter": {
      return { ...filters, [action.key]: action.value };
    }
    case "removed_filter": {
      const clonedFilters = { ...filters };
      delete clonedFilters[action.key];
      return clonedFilters;
    }
    case "removed_all": {
      return {};
    }
  }
}
