import bca from "@/assets/bca.png";
import mandiri from "@/assets/mandiri.png";
import { Check } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./constant/FormInput";
import HotelContext from "../context/hotelContext";

const Transactionpayment = () => {
  const { user, hotel, step, setStep, setPayment } = useContext(HotelContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    uploadProof: "",
    bankOrigin: "",
    senderName: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(formData).length > 0) {
      setPayment(formData);
      setStep(3);
      navigate("/transcompleted");
    }
  };

  const handleCancel = () => {
    setFormData({
      uploadProof: "",
      bankOrigin: "",
      senderName: "",
    });
  };

  const isFormComplete =
    formData.uploadProof && formData.bankOrigin && formData.senderName;
  function calculatePercentage(amount, percentage) {
    return (amount * percentage) / 100;
  }
  return (
    <section className="wrapper px-4 py-6">
      <div className="flex items-center justify-center py-10 gap-24 relative">
        <hr className="absolute w-[244.5px] border-t-2 border-[#E5E5E5] " />
        <span
          className={`relative rounded-full ${
            step >= 1 && user
              ? "bg-[#1ABC9C] text-white"
              : "bg-[#E5E5E5] text-[#898989]"
          } w-8 h-8 flex items-center justify-center`}
        >
          {step >= 1 && hotel !== null ? <Check /> : "1"}
        </span>
        <div className="relative border p-1 rounded-full border-[#E5E5E5]">
          <span
            className={`rounded-full ${
              step >= 2 && user !== null
                ? "bg-[#1ABC9C] text-white"
                : "bg-[#E5E5E5] text-[#898989]"
            } w-8 h-8 flex items-center justify-center`}
          >
            {step >= 2 && user !== null ? <Check /> : "2"}
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
              Sub total:{" "}
              <span className="font-medium">${hotel?.price} USD</span>
            </p>
            <p className="text-base text-black">
              Total:{" "}
              <span className="font-medium">
                ${calculatePercentage(hotel?.price, 10) + Number(hotel?.price)}{" "}
                USD
              </span>
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
          <FormInput
            id="uploadProof"
            label="Upload Transfer Proof"
            value={formData.uploadProof}
            onChange={handleInputChange}
            placeholder="transferproof.png"
          />
          <FormInput
            id="bankOrigin"
            label="Bank Origin"
            value={formData.bankOrigin}
            onChange={handleInputChange}
            placeholder="BCA"
          />
          <FormInput
            id="senderName"
            label="Sender Name"
            value={formData.senderName}
            onChange={handleInputChange}
            placeholder="Ihsan Adi"
          />
        </div>
      </div>
      {isFormComplete && (
        <div className=" flex items-center justify-center py-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-[#3252DF] text-white font-normal text-lg  rounded-md  w-[300px] h-[50px]"
          >
            Confirm Payment
          </button>
        </div>
      )}
      <div className="flex items-center justify-center py-4">
        <button
          type="button"
          onClick={handleCancel}
          className="bg-[#F5F6F8] text-[#B2B2B2] font-normal text-lg  rounded-md  w-[300px] h-[50px]"
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default Transactionpayment;
