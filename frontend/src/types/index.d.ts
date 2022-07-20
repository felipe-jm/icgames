export type StandardResponse<T> = {
  count: number;
  next: null;
  previous: null;
  results: T[];
};

export type Option = {
  label: string;
  value: string | number;
};
