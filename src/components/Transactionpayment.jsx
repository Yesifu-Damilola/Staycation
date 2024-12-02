import bca from "./../assets/bca.png";
import mandiri from "./../assets/mandiri.png";
import { Check } from "lucide-react";

const Transactionpayment = () => {
  return (
    <section className="wrapper px-4 py-6">
      <div className="flex items-center justify-center py-10 gap-24 relative">
        <hr className="absolute w-[244.5px] border-t-2 border-[#E5E5E5] " />
        <span className="relative rounded-full bg-[#1ABC9C] text-white w-8 h-8 flex items-center justify-center">
          <Check />
        </span>
        <div className="relative border p-1 rounded-full border-[#E5E5E5]">
          <span className="rounded-full bg-[#E5E5E5] text-[#898989] w-8 h-8 flex items-center justify-center">
            2
          </span>
        </div>
        <span className="relative rounded-full bg-[#E5E5E5] text-[#898989] w-8 h-8 flex items-center justify-center">
          3
        </span>
      </div>
      <div className="text-center justify-center">
        <h3 className="text-[42px] font-semibold text-[#152C5B]">Payment</h3>
        <p className="text-[#B0B0B0] text-lg ">
          Kindly follow the instruction below
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-8 space-y-2">
        <div className="flex flex-col items-center text-center w-full max-w-[420px]">
          <p className="text-lg text-black font-normal">Transfer Payment:</p>
          <br />
          <div className="text-left space-y-1">
            <span className="text-base text-black">Tax: 10%</span>
            <p className="text-base text-black">
              Sub total: <span className="font-medium">$480 USD</span>
            </p>
            <p className="text-base text-black">
              Total: <span className="font-medium">$580 USD</span>
            </p>
          </div>
          <div className="mt-4">
            <img src={bca} alt="bca" className="inline-block" />
            <span className="text-lg text-black font-normal">
              Bank Central Asia
            </span>
            <br />
            <div className="text-left">
              <span className="tesla-span text-lg text-black">2208 1996</span>
              <br />
              <span className="tesla-span text-lg text-black">Tesla Inc.</span>
            </div>
          </div>
          <div className="mandiri mt-4">
            <img
              src={mandiri}
              alt="mandiri"
              className="mandiri-pic inline-block"
            />
            <span className="text-lg text-black font-normal">Bank Mandiri</span>
            <br />
            <div className="text-left">
              <span className="tesla-span text-lg text-black">2208 1996</span>
              <br />
              <span className="tesla-span text-lg text-black">Tesla Inc.</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block border-l-2 border-[#E5E5E5] md:h-[502px]"></div>
        <div className="space-y-8 w-full max-w-md">
          <div>
            <label
              htmlFor="uploadProof"
              className="block text-lg font-medium text-black"
            >
              Upload Transfer Proof
            </label>
            <input
              type="text"
              id="uploadProof"
              placeholder="transferproof.png"
              className="w-full md:w-[320px] h-[51.56px] bg-[#F5F6F8] border-gray-300 rounded-[4px] pl-3 focus:outline-none shadow-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="bankOrigin"
              className="block text-lg font-medium text-black"
            >
              Bank Origin
            </label>
            <input
              type="text"
              id="bankOrigin"
              placeholder="BCA"
              className="w-full md:w-[320px] h-[51.56px] bg-[#F5F6F8] border-gray-300 rounded-[4px] pl-3 focus:outline-none shadow-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="senderName"
              className="block text-lg font-medium text-black"
            >
              Sender Name
            </label>
            <input
              type="text"
              id="senderName"
              placeholder="Ihsan Adi"
              className="w-full md:w-[320px] h-[51.56px] bg-[#F5F6F8] border-gray-300 rounded-[4px] pl-3 focus:outline-none shadow-sm mt-1"
            />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center py-4">
        <button
          type="submit"
          className="bg-[#3252DF] text-white font-normal text-lg  rounded-md  w-[300px] h-[50px]"
        >
          Confirm Payment
        </button>
      </div>
      <div className="flex items-center justify-center py-4">
        <button
          type="submit"
          className="bg-[#F5F6F8] text-[#B2B2B2] font-normal text-lg  rounded-md  w-[300px] h-[50px]"
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default Transactionpayment;
