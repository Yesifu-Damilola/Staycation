// import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { useQuery } from "@tanstack/react-query";

// export const useFetch = (category, apiName = "hotels") => {
//   const [data, setData] = useState(null);
//   const [status, setStatus] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchHotels = async () => {
//       setStatus(true);
//       setError("");
//       try {
//         const { data: hotels, error } = await supabase
//           .from(apiName)
//           .select("*")
//           .eq("category", category);
//         console.log(hotels, error);

//         if (error) {
//           setError(error.message);
//         } else {
//           setData(hotels);
//         }
//       } catch (error) {
//         setError(error.message || "An unexpected error occurred");
//       } finally {
//         setStatus(false);
//       }
//     };
//     fetchHotels();
//   }, [category, apiName]);
//   return {
//     data,
//     status,
//     error,
//     setData,
//   };
// };
export const useFetch = (category, apiName = "hotels") => {
  const fetchHotels = async () => {
    const { data: hotels, error } = await supabase
      .from(apiName)
      .select("*")
      .eq("category", category);
    console.log(hotels, error);

    if (error) {
      throw new Error(error.message);
    }
    return hotels;
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: [category, apiName],
    queryFn: fetchHotels,
    enabled: !!category,
    staleTime: 10000,
    refetchInterval: 15000,
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
