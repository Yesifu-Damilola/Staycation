import { Link } from "react-router-dom";

export const Navbar2 = () => {
  return (
    <div>
      <div className="wrapper px-4 py-6">
        <div className="flex items-center justify-between px-2">
          <div>
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <span className="text-blue-500">Stay</span>cation.
            </Link>
          </div>

          <div className="block md:hidden">
            <button className="focus:outline-none">
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:block">
            <ul className="flex gap-4 md:gap-8">
              <li>
                <Link
                  to="/"
                  className="text-base font-medium text-gray-700 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium text-gray-700 hover:text-blue-500"
                >
                  Browser by
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium text-gray-700 hover:text-blue-500"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium text-gray-700 hover:text-blue-500"
                >
                  Agents
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
