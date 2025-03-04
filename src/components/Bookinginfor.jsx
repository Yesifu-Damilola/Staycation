import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import HotelContext from "../context/hotelContext";

const Bookinginfor = () => {
  const { hotel, clearHotel, setUser, setStep } = useContext(HotelContext);
  console.log(hotel);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    phonenumber: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    if (Object.values(form).every((value) => value.trim() !== "")) {
      setUser(form);
      setStep(2);
      navigate("/payments");
    }
  };

  const handleCancel = () => {
    clearHotel();
    setForm({
      firstname: "",
      lastname: "",
      emailaddress: "",
      phonenumber: "",
    });

    navigate(-1);
  };

  const isFormComplete =
    form.firstname && form.lastname && form.emailaddress && form.phonenumber;

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-center py-10 gap-24 relative">
        <hr className="absolute w-[244.5px] border-t-2 border-[#E5E5E5] " />
        <div className="relative border p-1 rounded-full border-[#E5E5E5]">
          <span
            className={`rounded-full bg-[#E5E5E5] text-[#898989] w-8 h-8 flex items-center justify-center`}
          >
            {"1"}
          </span>
        </div>
        <span className="relative rounded-full bg-[#E5E5E5] text-[#898989] w-8 h-8 flex items-center justify-center">
          2
        </span>
        <span className="relative rounded-full bg-[#E5E5E5] text-[#898989] w-8 h-8 flex items-center justify-center">
          3
        </span>
      </div>
      <div className="text-center justify-center">
        <h3 className="text-3xl md:text-[42px] font-semibold text-[#152C5B]">
          Booking Information
        </h3>
        <p className="text-[#B0B0B0] py-2 text-lg font-light">
          Please fill up the blanks field below
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-8">
        <div className="flex flex-col items-center text-center">
          <img
            src={hotel?.images[0]}
            alt="Cashville"
            className="w-full max-w-[420px] max-h-[270px] object-cover"
          />
          <div className="flex flex-row gap-14 mt-4">
            <div className="text-left">
              <p className="text-lg font-semibold">{hotel?.name}</p>
              <span className="text-gray-500">{hotel?.location}</span>
            </div>
            <p className="text-xl font-medium text-[#1ABC9C]">
              ${Number(hotel?.price) * Number(hotel?.count)} USD{" "}
              <span className="text-gray-500"> for </span> {hotel?.count}{" "}
              {hotel?.duration}
            </p>
          </div>
        </div>

        <div className="hidden md:block border-l-2 border-[#E5E5E5] md:h-[452px]"></div>

        <div className="space-y-8 w-full max-w-md pt-5">
          {["firstname", "lastname", "emailaddress", "phonenumber"].map(
            (field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field === "emailaddress" ? "Email Address" : field}
                </label>
                <input
                  type={
                    field === "emailaddress"
                      ? "email"
                      : field === "phonenumber"
                      ? "tel"
                      : "text"
                  }
                  id={field}
                  value={form[field]}
                  onChange={handleInputChange}
                  placeholder={`Enter ${field}`}
                  className="w-full md:w-[320px] h-[51.56px] bg-[#F5F6F8] border-gray-300 rounded-[4px] pl-3 focus:outline-none shadow-sm mt-1"
                />
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex items-center justify-center py-4">
        <button
          onClick={handleSubmit}
          type="button"
          className={`${
            isFormComplete
              ? "bg-[#3252DF] text-white"
              : "bg-[#F5F6F8] text-[#B2B2B2]"
          } font-normal text-lg  rounded-md  w-[300px] h-[50px]`}
          disabled={!isFormComplete}
        >
          Continue to Book
        </button>
      </div>
      <div className="flex text-center justify-center py-4">
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

export default Bookinginfor;
