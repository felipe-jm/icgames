export type StandardResponse<T> = {
  count: number;
  next: null;
  previous: null;
  results: T[];
};
