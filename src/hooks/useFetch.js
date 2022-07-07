import { useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsPending(true);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();

      setIsPending(false);
      setData(data.result);
      setError(null);
    } catch (err) {
      setIsPending(false);
      setError("Could not fetch the data");
    }
  };

  // invoke the function

  return { data, isPending, error, fetchData };
};
