/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Housedetails = ({ data }) => {
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

      <div
        className={`homes ${
          data?.images?.length > 1 ? "flex flex-col lg:flex-row gap-4" : ""
        } mt-6`}
      >
        <div className="home1 ">
          <img
            src={data?.images[0]}
            alt="home1"
            className={`${
              data?.images?.length > 1 ? "w-[643px]" : "w-full"
            } md:h-[500px] h-[245px]  rounded-lg`}
          />
        </div>
        {data?.images?.length > 1 && (
          <div className="home2-home3  grid grid-cols-1 gap-1">
            {data?.images &&
              data?.images
                ?.slice(1, 3)
                .map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt="home2"
                    className="home2 w-[487px] h-[245px] rounded-lg object-cover"
                  />
                ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Housedetails;
