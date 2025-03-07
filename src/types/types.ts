export type Routes = {
  [key: string]: string;
};

export type FetchResult<T> = {
  data: T | [];
  loading: boolean;
  error: string | null;
};
