import stars from "../../assets/stars.png";
import family2 from "../../assets/family2.png";
import { ThingstodoFeatures } from "../constant/ApartmentFeatures";

const Thingstodo = () => {
  return (
    <section className="wrapper px-4 py-8">
      <div className="thingstodo">
        <h3 className="text-[#152C5B] text-2xl font-medium py-2">
          Things to do
        </h3>
        <div className="grid md:grid-cols-4 gap-5 items-center justify-center">
          {ThingstodoFeatures.map((item, index) => (
            <div key={index} className="">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto"
              />
              <span className="text-xl text-[#152C5B] font-medium">
                {item.title}
              </span>
              <p className="text-[#B0B0B0] text-[15px] font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-[76px] items-center py-6 mt-8 md:mt-16 px-4">
        <div className="relative">
          <div className="absolute bottom-7 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[70px] w-[88%] h-full border border-gray-200"></div>
          <img
            src={family2}
            alt="family2"
            className="family-pic relative object-cover w-[320px] h-[450px] ml-4 md:ml-7"
          />
        </div>

        <div className="space-y-6 md:space-y-10 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-medium text-[#152C5B]">
            Happy Family
          </h3>
          <img
            src={stars}
            alt="stars-review"
            className="w-[120px] md:w-[180px] h-[24px] md:h-[36px] mx-auto md:mx-0"
          />
          <p className="text-lg md:text-3xl font-normal text-[#152C5B] leading-8 md:leading-10">
            As a wife I can pick a great trip with
            <br className="hidden md:block" /> my own lovely family ... thank
            you!
          </p>
          <span className="text-[14px] md:text-[18px] font-light text-[#152C5B]">
            Megan, Product Manager
          </span>
          <div className="stories">
            <button className="bg-[#3252DF] text-[#FFFFFF] rounded-[4px] py-2 px-4 md:px-5">
              Read Our Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thingstodo;
