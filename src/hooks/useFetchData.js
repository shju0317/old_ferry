import { useEffect, useState } from 'react';

export default function useFetchData(endpoint) {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchProducts() {
      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
        });
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        if (!(error instanceof DOMException)) {
          setError(error);
          console.log('여기야??');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();

    // StrictMode(x2, detect impure function component)
    // mount(1, 요청 1) → unmount (취소 1) → mount(2, 요청 1) -> 응답 1
    return () => {
      controller.abort();
    }
  }, [endpoint]);

  return { data, isLoading, error };
}