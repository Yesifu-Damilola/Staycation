import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";

export const useFetch = (category, apiName = "hotels") => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      setStatus(true);
      setError("");
      try {
        const { data: hotels, error } = await supabase
          .from(apiName)
          .select("*")
          .eq("category", category);
        console.log(hotels, error);

        if (error) {
          setError(error.message);
        } else {
          setData(hotels);
        }
      } catch (error) {
        setError(error.message || "An unexpected error occurred");
      } finally {
        setStatus(false);
      }
    };
    fetchHotels();
  }, [category, apiName]);
  return {
    data,
    status,
    error,
    setData,
  };
};
