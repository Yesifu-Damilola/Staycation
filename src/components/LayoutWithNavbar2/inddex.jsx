/* eslint-disable react/prop-types */
import { Navbar2 } from "./navbar2/Navbar2";

export const Layout2 = ({ children }) => {
  return (
    <>
      <Navbar2 />
      <main>{children}</main>
    </>
  );
};
