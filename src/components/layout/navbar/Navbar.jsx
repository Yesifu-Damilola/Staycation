import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    
    <section>
      <div className="wrapper px-4 py-6">
        <div className="flex items-center justify-between px-2">
          <div>
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <span className="text-blue-500">Stay</span>cation.
            </Link>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-4 md:gap-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-base font-medium text-gray-700 hover:text-blue-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden mt-4 bg-white shadow-md`}
        >
          <ul className="flex flex-col gap-4 p-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-base font-medium text-gray-700 hover:text-blue-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Navbar;

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Browse by", path: "/browse" },
  { label: "Stories", path: "/stories" },
  { label: "Agents", path: "/agents" },
];
