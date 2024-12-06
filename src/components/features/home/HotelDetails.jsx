import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../../supabase/supabase";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHotelsDetails = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("hotels")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching hotel details:", error);
      } else {
        setHotel(data);
      }
      setLoading(false);
    };
    fetchHotelsDetails();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  if (!hotel)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No hotels available</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        className="bg-[#B0B0B0]  text-white px-4 py-2 rounded mb-4"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
      <p className="text-[#B0B0B0]  mb-6">{hotel.location}</p>
      <img
        src={hotel.images[0]}
        alt={hotel.name}
        className="w-full h-auto rounded-lg mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-between p-6 bg-gray-50 rounded-lg shadow-md">
        <div className="p-2 bg-white rounded-md shadow-sm">
          <p className="text-lg">
            <strong className="font-semibold">Price:</strong> ${hotel.price}
          </p>
        </div>
        <div className="p-2 bg-white rounded-md shadow-sm">
          <p className="text-lg">
            <strong className="font-semibold">Duration:</strong>
            {hotel.duration}
          </p>
        </div>
        <div className="p-2 bg-white rounded-md shadow-sm">
          <p className="text-lg">
            <strong className="font-semibold">Check-In Date:</strong>
            {hotel.checkInDate}
          </p>
        </div>
        <div className="p-2 bg-white rounded-md shadow-sm">
          <p className="text-lg">
            <strong className="font-semibold">Bedrooms:</strong>
            {hotel.bedroomNumbers}
          </p>
        </div>
        <div className="p-2 bg-white rounded-md shadow-sm">
          <p className="text-lg">
            <strong className="font-semibold">Living Rooms:</strong>
            {hotel.livingroomNumbers}
          </p>
        </div>
        <div className="p-2 bg-white rounded-md shadow-sm">
          <p className="text-lg">
            <strong className="font-semibold">Bathrooms:</strong>
            {hotel.bathroomNumbers}
          </p>
        </div>
        <div className="p-2 bg-white rounded-md shadow-sm">
          <p className="text-lg">
            <strong className="font-semibold">Wi-Fi:</strong>
            {hotel.wifi ? "Available" : "Not Available"}
          </p>
        </div>
        <div className="p-42 bg-white rounded-md shadow-sm">
          <p className="text-lg">
            <strong className="font-semibold">Refrigerators:</strong>
            {hotel.refrigerators}
          </p>
        </div>
        <div className="p-2 bg-white rounded-md shadow-sm">
          <p className="text-lg">
            <strong className="font-semibold">Televisions:</strong>
            {hotel.televsions}
          </p>
        </div>
        <div className="p-2 bg-white rounded-md shadow-sm">
          <p className="text-lg">
            <strong className="font-semibold">Category:</strong>
            {hotel.category}
          </p>
        </div>
      </div>

      <p className="mt-6 md:w-[800px]">{hotel.description}</p>
    </div>
  );
};
export default HotelDetails;
