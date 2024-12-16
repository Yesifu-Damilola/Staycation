/* eslint-disable react/prop-types */

import { useFetch } from "../../../hook/useFetch";
import { CustomLoader } from "../../CustomLoader";
import { HouseNotFound } from "../../HouseNotFound";
import HotelItems from "./HotelItems";

const HotelsComponent = ({ categoryName }) => {
  // const { data, status, error } = useFetch(categoryName);

  const query = {
    apiName: "hotels",
    key: "category",
    value: categoryName,
  };
  const { data, isError, error, status } = useFetch(query);

  return (
    <div className="wrapper px-4 py-6">
      <h3 className="text-2xl font-bold text-[#152c5b] mb-6 capitalize">
        {categoryName}
      </h3>

      {status === "pending" && !data ? <CustomLoader /> : null}
      {isError && status === "error" ? (
        <div className="flex items-center justify-center h-screen">
          <p>Error: {error}</p>
        </div>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data && data?.length > 0 && status === "success" ? (
          data?.map((item) => <HotelItems item={item} key={item.id} />)
        ) : (
          <HouseNotFound />
        )}
      </div>
    </div>
  );
};

export default HotelsComponent;
