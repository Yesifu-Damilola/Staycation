import { Check } from "lucide-react";
import succes from "./../assets/succes .png";

const Transcompleted = () => {
  return (
    <div className="wrapper px-4 py-6">
      <div className="flex items-center justify-center py-10 gap-24 relative">
        <hr className="absolute w-[244.5px] border-t-2 border-[#E5E5E5] " />
        <span className="relative  rounded-full bg-[#1ABC9C] text-white w-8 h-8 flex items-center justify-center">
          <Check />
        </span>
        <span className="relative  rounded-full bg-[#1ABC9C] text-white w-8 h-8 flex items-center justify-center">
          <Check />
        </span>
        <span className="relative  rounded-full bg-[#1ABC9C] text-white w-8 h-8 flex items-center justify-center">
          <Check />
        </span>
      </div>
      <div className="booking py-6">
        <h3>Transaction Completed!</h3>
      </div>
      <div className="succes">
        <img src={succes} alt="succes w-[330px]" />
      </div>

      <div className="flex text-center justify-center pb-2">
        <p className="text-[#B0B0B0] text-lg font-light">
          We will inform you via email later <br /> once this transaction has
          been accepted
        </p>
      </div>
      <div className="flex items-center justify-center py-5">
        <button
          type="submit"
          className="bg-[#3252DF] text-white font-normal text-lg  rounded-md  w-[300px] h-[50px]"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Transcompleted;
