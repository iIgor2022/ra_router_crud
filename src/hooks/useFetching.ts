import { useEffect, useState } from "react"
import { Card } from "../interfaces/card"


type OptsType = {
  method?: string,
  headers: {
    "Content-Type": string
  },
  body?: string
}

type ReturnType = {
  data?: {
    post: Card
  } | Card[],
  error?: string,
  loading: boolean
}

const useFetching = (url: string, option: OptsType): ReturnType => {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetching = async() => {
    setLoading(true);

    try {
      const response = await fetch(url, option);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      result && setData(result);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetching();

    return () => setError('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error, loading };
}

export default useFetching;