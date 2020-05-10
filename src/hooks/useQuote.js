import { useEffect, useState } from 'react';
import { fetchData } from '../api';
export const useQuote = () => {
  const [state, setState] = useState('');

  useEffect(() => {
    const getData = async () => {
      const { quote } = await fetchData();
      setState(quote);
    };
    getData();
  }, []);
  console.log(`${state}`);
  return state;
};
