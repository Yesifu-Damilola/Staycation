/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const HotelContext = createContext({
  hotel: null,
  userDetails: null,
  paymentDetails: null,
  setHotel: (hotel) => {},
  clearHotel: () => {},
  setUser: (user) => {},
  setPayment: (payment) => {},
  step: 0,
  setStep: (step) => {},
});

export const HotelContextProvider = ({ children }) => {
  const getHotel = localStorage.getItem("hotel");
  const getuser = localStorage.getItem("user");
  const getPayment = localStorage.getItem("payment");
  const getStep = localStorage.getItem("step");
  const [hotel, setHotel] = useState(getHotel ? JSON.parse(getHotel) : null);
  const [user, setUser] = useState(getuser ? JSON.parse(getuser) : null);
  const [payment, setPayment] = useState(
    getPayment ? JSON.parse(getPayment) : null
  );
  const [step, setStep] = useState(getStep ? JSON.parse(getStep) : 0);
  const clearHotel = () => {
    setHotel(null);
    localStorage.removeItem("hotel");
  };
  useEffect(() => {
    if (hotel) {
      localStorage.setItem("hotel", JSON.stringify(hotel));
    }
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    if (payment) {
      localStorage.setItem("payment", JSON.stringify(payment));
    }
    if (step) {
      localStorage.setItem("step", JSON.stringify(step));
    }
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
