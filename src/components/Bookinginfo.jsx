import cashvilles from "../../src/assets/cashvilles.png";

const Bookinginfo = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-center py-10 gap-24 relative">
        <hr className="absolute w-[244.5px] border-t-2 border-[#E5E5E5] " />
        <div className="relative border p-1 rounded-full border-[#E5E5E5]">
          <span className="rounded-full bg-[#E5E5E5] text-[#898989] w-8 h-8 flex items-center justify-center">
            1
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
            src={cashvilles}
            alt="Cashville"
            className="w-full max-w-[420px] max-h-[270px] object-cover"
          />
          <div className="flex flex-row gap-14 mt-4">
            <div className="text-left ">
              <p className="text-lg font-semibold ">Cashville</p>
              <span className="text-gray-500">Kemang, Indonesia</span>
            </div>
            <p className="text-xl font-medium text-[#1ABC9C]">
              $480 USD <span className="text-gray-500"> for </span> 2 nights
            </p>
          </div>
        </div>

        <div className="hidden md:block border-l-2 border-[#E5E5E5] md:h-[452px]"></div>

        <div className="space-y-8 w-full max-w-md pt-5">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-[#898989]"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter Firstname"
              className="w-full md:w-[320px] h-[51.56px] bg-[#F5F6F8] border-gray-300 rounded-[4px] pl-3 focus:outline-none shadow-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-[#898989]"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter Lastname"
              className="w-full md:w-[320px] h-[51.56px]  bg-[#F5F6F8] border-gray-300 rounded-[4px] pl-3 focus:outline-none shadow-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="emailaddress"
              className="block text-sm font-medium text-[#898989]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="emailaddress"
              placeholder="matlab@gmail.com"
              className="w-full md:w-[320px] h-[51.56px]  bg-[#F5F6F8] border-gray-300 rounded-[4px] pl-3 focus:outline-none shadow-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="phonenumber"
              className="block text-sm font-medium text-[#898989]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phonenumber"
              placeholder="+2348000000000"
              className="w-full md:w-[320px] h-[51.56px]  bg-[#F5F6F8] border-gray-300 rounded-[4px] pl-3 focus:outline-none shadow-sm mt-1"
            />
          </div>
        </div>
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

export default Bookinginfo;
