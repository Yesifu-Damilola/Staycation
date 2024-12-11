import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";
import home from "../../../src/assets/home.png";
import home2 from "../../../src/assets/home2.png";
import home3 from "../../../src/assets/home3.png";

const Housedails = () => {
  const { id } = useParams();
  const query = {
    apiName: "hotels",
    key: "id",
    value: id,
  };
  const { data, status, error } = useFetch(query);

  if (status) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No data available</p>
      </div>
    );
  }
  return (
    <section className="wrapper px-4 mt-8">
      <div className="flex flex-col sm:flex-row ">
        <div className="house-details">
          <Link className=" text-gray-500">
            Home /
            <span
              className="house-span
             font-medium"
            >
              House Details
            </span>
          </Link>
        </div>
        <div className="resort-rio items-center justify-center mx-auto pt-4">
          <h3 className="text-xl font-bold text-[#152c5b]">{data?.name}</h3>
          <p className="text-[#b0b0b0] text-[18px] pt-4">{data?.location}</p>
        </div>
      </div>

      <div className="homes flex flex-col lg:flex-row gap-4 mt-6">
        <div className="home1 ">
          <img
            src={home}
            alt="home1"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        <div className="home2-home3  grid grid-cols-1 gap-1">
          <img
            src={home2}
            alt="home2"
            className="home2 w-full h-auto rounded-lg object-cover"
          />
          <img
            src={home3}
            alt="home3"
            className="home3 w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Housedails;
