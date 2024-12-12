import { Link } from "react-router-dom";

export const Navbar2 = () => {
  return (
    <div>
      <div className="wrapper px-4 py-6">
        <div className="flex items-center justify-center px-2">
          <div>
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <span className="text-blue-500">Stay</span>cation.
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
