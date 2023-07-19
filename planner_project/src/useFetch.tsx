import { useEffect, useState } from 'react';


interface FetchResult<T> {
  data: T | null;
  error: string| null;
  loading: boolean;
}


const useFetch = <T,>(url: string):FetchResult<T> => { //how the fuck do I make generics work here???
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    fetch(url)
    .then(res => {
      if (!res.ok) { // error coming back from server 
        throw Error(`Request error with code ${res.status}`);
      } 
      return res.json();
    })
    .then(data => {
      setLoading(false);
      setData(data);
      setError(null);
    })
    .catch(err => {
      // auto catches network / connection error
      setLoading(false);
      setError(err.message);
    })
}, [url]);

  return { data, error, loading };
}

export default useFetch;

