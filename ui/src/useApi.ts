import { useState, useEffect } from "react";
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

type Result<Data> = {
  data?: Data;
  loading: boolean;
  error?: Error;
};

function useApi<Data = null>(url: string): Result<Data> {
  const [result, setResult] = useState<Result<Data>>({
    loading: true,
  });

  useEffect(() => {
    let ignore = false;

    setResult((previousResult: Result<Data>) => ({
      ...previousResult,
      loading: true,
    }));

    function makeRequest() {
      apiClient
        .get(url)
        .then((res) => {
          if (!ignore) {
            setResult({
              loading: false,
              data: res.data,
            });
          }
        })
        .catch((e) => {
          if (!ignore) {
            setResult({
              loading: false,
              error: e,
            });
          }
        });
    }

    makeRequest();

    return () => {
      ignore = true;
    };
  }, [url]);

  return result;
}

export default useApi;
