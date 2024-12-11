/* eslint-disable react/prop-types */
import { useFetch } from "@/hook/useFetch";
import { Link } from "react-router-dom";
import { CustomSpan } from "./../../constant/CustomSpan";

const HotelsComponent = ({ categoryName }) => {
  // const { data, status, error } = useFetch(categoryName);

  const query = {
    apiName: "hotels",
    key: "category",
    value: categoryName,
  };
  const { data, isLoading, isError, error } = useFetch(query);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No data available</p>
      </div>
    );
  }
  return (
    <div className="wrapper px-4 py-6">
      <h3 className="text-2xl font-bold text-[#152c5b] mb-6 capitalize">
        {categoryName}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data?.map((houses) => (
          <Link
            to={`/hotel/${houses.id}`}
            key={houses?.id}
            className="relative"
          >
            <img
              src={houses?.images[0]}
              alt={houses.name}
              className="w-full h-[200px] rounded-lg"
            />
            {houses.isPopular && (
              <div className="absolute top-[3px] right-0">
                <CustomSpan text={"Popular Choice"} />
              </div>
            )}
            <div className="mt-4">
              <span className="text-lg font-bold text-[#152c5b]">
                {houses.name}
              </span>
              <p className="text-base text-[#B0B0B0]">{houses.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotelsComponent;
