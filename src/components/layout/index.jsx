import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
// import { Navbar2 } from "./navbar/Navbar2";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children, navRole, footer = true }) => {
  return (
    <>
      {navRole === "main" ? <Navbar /> : <Navbar />}

      {children}
      {footer && <Footer />}
    </>
  );
};
