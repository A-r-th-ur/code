import { useEffect, useState } from 'react';

type FetchStatus = 'idle' | 'loading' | 'success' | 'error';

interface FetchResult<T> {
  data: T | null;
  error: Error | null;
  status: FetchStatus;
}

function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<FetchStatus>('idle');

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading');
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const json = await response.json();
        setData(json);
        setStatus('success');
      } catch (error) {
        setError(error);
        setStatus('error');
      }
    };

    fetchData();
  }, [url]);

  return { data, error, status };
}

// Example usage:
function MyComponent() {
  const { data, error, status } = useFetch<{ name: string }>('<API_URL>');

  if (status === 'idle' || status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error?.message}</div>;
  }

  return <div>Data: {data?.name}</div>;
}