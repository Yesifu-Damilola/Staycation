/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const HotelContext = createContext();

export const HotelContextProvider = ({ children }) => {
  const [hotel, setHotel] = useState(
    () => JSON.parse(localStorage.getItem("hotel")) || null
  );
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );
  const [payment, setPayment] = useState(
    () => JSON.parse(localStorage.getItem("payment")) || null
  );
  const [step, setStep] = useState(
    () => JSON.parse(localStorage.getItem("step")) || 0
  );
  const clearHotel = () => {
    setHotel(null);
    localStorage.removeItem("hotel");
  };
  useEffect(() => {
    localStorage.setItem("hotel", JSON.stringify(hotel));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("payment", JSON.stringify(payment));
    localStorage.setItem("step", JSON.stringify(step));
  }, [hotel, user, payment, step]);

  return (
    <HotelContext.Provider
      value={{
        setHotel,
        setPayment,
        setUser,
        setStep,
        user,
        payment,
        hotel,
        clearHotel,
        step,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelContext;
