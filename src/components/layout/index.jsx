/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

// export const Layout = ({ children, navRole, footer = true }) => {
//   return (
//     <>
//       {navRole === "main" ? <Navbar /> : <Navbar />}

//       {children}
//       {footer && <Footer />}
//     </>
//   );
// };
