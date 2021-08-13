import axios from 'axios';

export const fetcher = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get(url);
  return data;
};
