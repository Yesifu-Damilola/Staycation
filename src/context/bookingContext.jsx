/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const BookingContext = createContext({
  detail: null,
  // eslint-disable-next-line no-unused-vars
  setDetail: (detail) => {},
  clearUserDetail: () => {},
  isPaymentComplete: false,
  setIsPaymentComplete: () => {},
});

export const BookingContextProvider = ({ children }) => {
  const getDetail = localStorage.getItem("detail");
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [detail, setDetail] = useState(
    getDetail ? JSON.parse(getDetail) : "null"
  );

  const clearDetail = () => {
    setDetail(null);
    setIsPaymentComplete(false);
    localStorage.removeItem("detail");
  };

  useEffect(() => {
    if (detail) {
      localStorage.setItem("detail", JSON.stringify(detail));
    }
  }, [detail]);

  return (
    <BookingContext.Provider
      value={{
        detail,
        setDetail,
        clearDetail,
        isPaymentComplete,
        setIsPaymentComplete,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
