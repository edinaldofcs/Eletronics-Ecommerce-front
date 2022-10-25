import { useEffect, useState } from "react";
import { CategorieProps } from "../interfaces";

export const useFetch = <T>(url: string) => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResponse(data);        
        // setError("");
      } catch (err) {
        setError(err);
      }
      fetchData();
    };
  }, [url]);

  return { response, error };
};


export const useTeste = ()=>{
  const {response} = useFetch<CategorieProps[]>("http://localhost:5000/category")


  return{
    categorias: response  
  }
}