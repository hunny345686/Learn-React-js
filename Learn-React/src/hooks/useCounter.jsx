import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);

  return { count, increment };
}

// API Feching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading };
}
