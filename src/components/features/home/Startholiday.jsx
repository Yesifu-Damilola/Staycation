import { useEffect, useState } from "react";
import { supabase } from "@/supabase/supabase";
import travelers from "@/assets/ic_traveler.png";
import cities from "@/assets/ic_cities.png";
import treasures from "@/assets/ic_treasures.png";

const Startholiday = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setStatus(true);
      setError("");
      try {
        const { data: statistics, error } = await supabase
          .from("statistics")
          .select("*")
          .single();

        if (error) {
          throw error(error);
        }
        setData(statistics);

        if (statistics?.images) {
          setImages(statistics.images);
        } else {
          setImages([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setStatus(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (status) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No data available</p>
      </div>
    );
  }
  return (
    <section className="wrapper py-10 grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
      <div className="text-center md:text-left space-y-4">
        <h3 className="text-[42px] leading-[48px] sm:text-2xl md:text-4xl font-bold font-poppins text-[#183369]">
          Forget Your Main Work, Start Holiday Now!
        </h3>
        <p className="text-base md:text-lg text-[#B0B0B0] py-4">
          We provide you what you need to enjoy your holiday with family. Time
          to make another memorable moments.
        </p>
        <div className="py-6">
          <button className="bg-blue-500 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Show me now
          </button>
        </div>
        <div className="flex items-start justify-between md:w-[464px]">
          <div className="text-center">
            <img
              src={travelers}
              alt={"travelers"}
              className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-2"
            />
            <span className="text-base sm:text-lg font-bold">
              {data.travelers}
            </span>
            <br />
            travelers
          </div>

          <div className="text-center">
            <img
              src={cities}
              alt={"cities"}
              className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-2"
            />
            <span className="text-base sm:text-lg font-bold">
              {data.citiess}
            </span>
            <br />
            travelers
          </div>

          <div className="text-center">
            <img
              src={treasures}
              alt={"treasures"}
              className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-2"
            />
            <span className="text-base sm:text-lg font-bold">
              {data.treasures}
            </span>
            <br />
            travelers
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-5 left-4 w-full h-full border border-gray-200 rounded-tl-[80px] rounded-tr-xl rounded-br-xl rounded-bl-xl "></div>
        {images?.length > 0 ? (
          <img
            src={data?.images[currentIndex]}
            alt={`slide ${currentIndex}`}
            className="relative w-full md:w-[559px] md:h-[496px] rounded-tl-[80px] rounded-tr-xl rounded-br-xl"
          />
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </section>
  );
};

export default Startholiday;
