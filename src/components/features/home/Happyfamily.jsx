const Happyfamily = () => {
  return (
    <section className="wrapper py-6 px-4 mt-16">
      <div className="flex flex-col md:flex-row gap-[76px] items-center ">
        <div className="relative">
          <div className="absolute bottom-8 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[70px] w-[80%] h-full border border-gray-200"></div>
          <img
            src="src/assets/family(2).png"
            alt="family(2)"
            className="relative object-cover w-[80%] top-[7%] ml-6 md:w-full"
          />
        </div>

        <div className="space-y-7">
          <h3 className="text-2xl font-medium mb-4 text-[#152C5B]">
            Happy Family
          </h3>

          <img
            src="src/assets/stars-review.png"
            alt="stars-review"
            className="mb-4"
          />

          <p className="text-[32px] text-[#152C5B] font-medium leading-relaxed mb-4">
            What a great trip with my family and I <br />
            should try again next time soon ...
          </p>
          <span className="text-gray-600 italic block mb-4">
            Adi, UI/UX Designer
          </span>

          <button className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Read Our Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Happyfamily;
