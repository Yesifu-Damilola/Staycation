/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const HotelContext = createContext({
  hotel: null,
  // eslint-disable-next-line no-unused-vars
  setHotel: (hotel) => {},
  clearHotel: () => {},

});

export const HotelContextProvider = ({ children }) => {
  const getHotel = localStorage.getItem("hotel");
  const [hotel, setHotel] = useState(getHotel ? JSON.parse(getHotel) : null);
  const clearHotel = () => {
    setHotel(null);
    localStorage.removeItem("hotel");
  };
  useEffect(() => {
    if (hotel) {
      localStorage.setItem("hotel", JSON.stringify(hotel));
    }
  }, [hotel]);

  return (
    <HotelContext.Provider
      value={{
        setHotel,
        hotel,
        clearHotel,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelContext;
