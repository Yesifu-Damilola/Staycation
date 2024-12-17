/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import ic_bedroom from "@/assets/ic_bedroom.png";
import ic_livingroom from "@/assets/ic_livingroom.png";
import ic_bathroom from "@/assets/ic_bathroom.png";
import ic_diningroom from "@/assets/ic_diningroom.png";
import ic_wifi from "@/assets/ic_wifi.png";
import ic_ac from "@/assets/ic_ac.png";
import ic_refrigerators from "@/assets/ic_refrigerators.png";
import ic_tv from "@/assets/ic_tv.png";
import HotelContext from "../../context/hotelContext";
const Abouttheplace = ({ data }) => {
  const { setHotel, setStep } = useContext(HotelContext);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [count, setCount] = useState(data?.durationTime);

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const apartmentFeatures = [
    { image: ic_bedroom, count: 3, description: "bedrooms" },
    {
      image: ic_livingroom,
      count: data?.livingroom,
      description: "living room",
    },
    { image: ic_bathroom, count: data?.bathrooms, description: "bathrooms" },
    {
      image: ic_diningroom,
      count: data?.dinningRoom,
      description: "dining room",
    },
    {
      image: ic_wifi,
      count: data?.wifi ? "10 mbp/s" : "No Wifi",
      description: data?.wifi && "mbp/s",
    },
    { image: ic_ac, count: data?.unitsReady, description: "units ready" },
    {
      image: ic_refrigerators,
      count: data?.refrigerators,
      description: "refrigerators",
    },
    { image: ic_tv, count: data?.television, description: "television" },
  ];

  const handleHotelInfo = () => {
    if (!data) return;
    setHotel({
      ...data,
      count,
      startDate,
    });
    setStep(1);

    navigate("/hotel/information");
  };
  return (
    <section className="wrapper px-4">
      <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div className="">
          <div className=" ">
            <h3 className="text-[#152C5B] text-2xl font-medium pl-5 py-4">
              About the place
            </h3>
            <p className="text-[#b0b0b0] text-base ">{data?.description}</p>
          </div>
          <div className="pt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 px-4">
              {apartmentFeatures?.map((feature) => (
                <div
                  key={feature?.id}
                  className="flex flex-col items-center px-4 py-3"
                >
                  <img
                    src={feature?.image}
                    alt={`ic_${feature?.description}`}
                    className="w-16"
                  />
                  <span className="ic-digit font-bold text-xl">
                    {feature?.count}
                  </span>
                  <span className="ic-rooms text-[#b0b0b0]">
                    {feature?.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-auto border border-[#E5E5E5] rounded-2xl mt-10 py-14">
          <div className="text-center space-y-6">
            <h3 className="text-[#152C5B] text-xl lg:text-2xl font-medium">
              Start Booking
            </h3>
            <p className="text-[#1ABC9C] text-3xl lg:text-4xl font-medium">
              ${data?.price}
              <span className="text-[#B0B0B0] text-2xl lg:text-4xl font-light mx-2">
                {`per ${data?.duration}`}
              </span>
            </p>
            <p className="text-[16px] lg:text-[18px] font-light py-4">
              How long you will stay?
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex items-center justify-center bg-[#F5F6F8] rounded-lg">
              <button
                className="px-2 py-1 text-[#FFFFFF] text-2xl font-bold bg-[#E74C3C] w-[45px] h-[51.56] rounded-l-lg"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="flex items-center justify-center border-l border-r py-1 px-4 font-medium text-lg  w-28 h-[51.56]">
                {`${count} night${count > 1 ? "s" : ""}`}
              </span>
              <button
                className="text-[#FFFFFF] text-2xl font-bold px-2 py-1 bg-[#1ABC9C] w-[45px] h-[51.56] rounded-r-lg"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>

          <div className="text-center mt-6 lg:mt-8 space-y-5">
            <h4 className="text-base lg:text-lg font-medium">Pick a Date</h4>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              isClearable
              showYearDropdown
              scrollableMonthYearDropdown
              className="w-full max-w-xs mx-auto border border-gray-300 rounded px-2 py-1"
            />
            <p className="text-[16px] lg:text-[18px] text-[#B0B0B0] font-light capitalize">
              You will pay
              <span className="font-medium text-black">
                ${Number(data?.price) * Number(count)} USD
              </span>
              for
              <span className="font-medium text-black mx-2">
                {`${count}  ${data?.duration}`}
              </span>
            </p>
            <div className="py-4 lg:py-6">
              <button
                className="book-btn text-base border-none rounded-lg bg-[#3252df] text-[#ffffff] py-2 px-10 lg:px-20"
                style={{ boxShadow: "2px 2px 10px rgb(50, 82, 223)" }}
                onClick={handleHotelInfo}
              >
                Continue Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Abouttheplace;
