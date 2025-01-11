export type FilterType = {
  id?: string;
  name?: string;
  gender?: "man" | "woman" | "other";
  image?: string;
  degree?: "bachelor" | "senior" | "Ph.D" | "specialist";
  address?: string;
  description?: string;
  query?: string;
};
