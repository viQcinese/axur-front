import * as React from "react";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../utils/constants";

type PostDataConfig<TData> = {
  onCompleted?: (data: TData) => void;
  onError?: (error: unknown) => void;
};

type PostData = {
  data?: unknown;
  loading?: boolean;
  error?: unknown;
};

type PostTupple<TPayload> = [(data: TPayload) => void, PostData];

export default function usePost<TData, TPayload>(
  path: string,
  config?: PostDataConfig<TData>
): PostTupple<TPayload> {
  const [data, setData] = React.useState<AxiosResponse>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<unknown>();

  async function postData(data: TPayload) {
    setLoading(true);
    setError(undefined);

    try {
      const response = await axios.post<TData>(`${API_URL}${path}`, data);
      setData(response);
      if (config?.onCompleted) {
        config.onCompleted(response.data);
      }
    } catch (error) {
      setError(error);
      if (config?.onError) {
        config.onError(error);
      }
    } finally {
      setLoading(false);
    }
  }

  return [postData, { data, loading, error }];
}
