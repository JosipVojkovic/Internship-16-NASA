export type Routes = {
  [key: string]: string;
};

export type FetchResult<T> = {
  data: T | [];
  loading: boolean;
  error: string | null;
};

export type APODData = {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};
