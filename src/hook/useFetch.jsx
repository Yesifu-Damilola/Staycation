// import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { useQuery } from "@tanstack/react-query";

export const useFetch = (query) => {
  const fetchHotels = async () => {
    let queryData = supabase.from(query?.apiName).select("*");
    try {
      if (query?.value && query.key === "id") {
        const { data, error } = await queryData
          .eq(query.key, query.value)
          .single();
        if (error) throw new Error(error.message);
        return data ?? [];
      }
      if (query?.value && query.key !== "id") {
        const { data, error } = await queryData.eq(query.key, query.value);
        if (error) throw new Error(error.message);
        return data ?? [];
      }
      return [];
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const queryData = useQuery({
    queryKey: [query?.value ?? "", query?.apiName],
    queryFn: fetchHotels,
  });

  return queryData;
};
