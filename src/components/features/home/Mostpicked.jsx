import { useFetch } from "../../../hook/useFetch";

import { CustomSpan } from "../../constant/CustomSpan";
import { useState } from "react";
import { supabase } from "../../../supabase/supabase";

const Mostpicked = () => {
  const { data: hotels, status, error } = useFetch("most picked");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchHotelDetails = async (id) => {
    setLoading(true);
    try {
      const { data: hotels, error } = await supabase
        .from("hotels")
        .select("*")
        .eq("id", id);
      //  .eq("category", category);

      if (error) {
        console.error("Supabase Error:", error);
        return;
      }

      console.log("Fetched Hotels:", hotels);
      setSelectedHotel(hotels?.[0] || null);
    } catch (error) {
      console.error("Error fetching hotel details:", error);
    } finally {
      setLoading(false);
    }
  };

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
  if (!hotels) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No hotels available</p>
      </div>
    );
  }

  return (
    <section className="wrapper ">
      <h3 className="text-[#152c5b] text-2xl font-bold px-4 ">Most Picked</h3>
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 place-items-center p-4 ">
        <div
          className={` bg-cover bg-center w-full h-[460px] relative rounded-3xl`}
          style={{
            background: `url(${hotels[0]?.images[0]})`,
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => fetchHotelDetails(hotels[0]?.id)}
        >
          <CustomSpan
            text={`${hotels[0]?.price} per ${hotels[0]?.duration}`}
            className=" absolute top-0 right-[2px]"
          />
          <span className="text-[#152c5b] text-base font-bold absolute bottom-2 left-5 py-6">
            {hotels[0]?.name}
          </span>
          <p className="text-[#152c5b] text-base absolute bottom-2 left-5">
            {hotels[0]?.location}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full ">
          {hotels?.slice(1, 5).map((resort) => (
            <div
              // to={`/${resort?.id}`}
              key={resort?.id}
              className={`relative w-full h-[215px] rounded-2xl px-4 bg-cover bg-center`}
              style={{ background: `url(${resort.images[0]})` }}
              onClick={() => fetchHotelDetails(resort?.id)}
            >
              <CustomSpan
                text={`$${resort?.price} per ${resort.duration}`}
                className="absolute top-0 right-0"
              />
              <span
                className={`text-xl font-bold absolute bottom-2 left-5 py-6 text-[#152C5B] `}
              >
                {resort.name}
              </span>
              <p className={`text-base absolute bottom-2 left-5 text-black `}>
                {resort.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedHotel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg md:max-w-2xl w-full">
            {loading ? (
              <p>Loading details...</p>
            ) : (
              <>
                <h3 className="text-2xl font-bold pb-2">
                  {selectedHotel.name}
                </h3>

                <div className="grid grid-cols-1 w-full ">
                  <div
                    className={`relative w-full h-[215px] md:h-[300px] rounded-2xl bg-cover bg-center`}
                    style={{
                      background: `url(${selectedHotel?.images?.[0] || ""})`,
                      backgroundSize: "cover",
                    }}
                    onClick={() => fetchHotelDetails(selectedHotel?.id)}
                  >
                    <CustomSpan
                      text={`$${selectedHotel?.price} per ${selectedHotel.duration}`}
                      className="absolute top-0 right-0"
                    />

                    <span
                      className={`text-xl font-bold absolute bottom-2 left-5 py-6 text-[#152C5B] `}
                    >
                      {selectedHotel.name}
                    </span>
                    <p
                      className={`text-base absolute bottom-2 left-5 text-black `}
                    >
                      {selectedHotel.location}
                    </p>
                  </div>
                </div>
                <p className="relative text-[#152C5B] text-base bottom-[-50px] top-3">
                  {selectedHotel.description}
                </p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mt-12"
                  onClick={() => setSelectedHotel(null)}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Mostpicked;
