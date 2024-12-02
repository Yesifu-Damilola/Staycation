import { useState } from "react";
import { ApartmentFeatures } from "../constant/ApartmentFeatures";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Abouttheplace = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [count, setCount] = useState(2);

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <section className="wrapper px-4">
      <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div className="">
          <div className=" ">
            <h3 className="text-[#152C5B] text-2xl font-medium pl-5 py-4">
              About the place
            </h3>
            <p className="text-[#b0b0b0] text-base ">
              Lorem ipsum dolor for your design, website, and copywriting works.
              Use our tool to generate chunks of text that is free from
              repetition and copyright claims. Take Action. 3D Images Increase
              Sales. Learn More. Sell More Onlie Today.
            </p>
            <p className="text-[#b0b0b0] text-base ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-[#b0b0b0] text-base ">
              Design is a plan or specifiaction for the construction of an
              object or system or for the implementation of an activity or
              process, or the result of that plan or specification in the form
              of a prototype, product or process. The national agency for
              design: enabling Singapore to use design for economic growth and
              to make lives better.
            </p>
          </div>
          <div className="pt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 px-4">
              {ApartmentFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center px-4 py-3"
                >
                  <img
                    src={feature.image}
                    alt={`ic_${feature.description}`}
                    className="w-16"
                  />
                  <span className="ic-digit font-bold text-xl">
                    {feature.count}
                  </span>
                  <span className="ic-rooms text-[#b0b0b0]">
                    {feature.description}
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
              $280{" "}
              <span className="text-[#B0B0B0] text-2xl lg:text-4xl font-light">
                per night
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
                {`${count} night`}
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
            <p className="text-[16px] lg:text-[18px] text-[#B0B0B0] font-light">
              You will pay{" "}
              <span className="font-medium text-black"> $480 USD </span> for{" "}
              <span className="font-medium text-black"> 2 night </span>
            </p>
            <div className="py-4 lg:py-6">
              <button
                className="book-btn text-base border-none rounded-lg bg-[#3252df] text-[#ffffff] py-2 px-10 lg:px-20"
                style={{ boxShadow: "2px 2px 10px rgb(50, 82, 223)" }}
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
