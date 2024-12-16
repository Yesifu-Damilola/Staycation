/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CustomSpan } from "../../constant/CustomSpan";

const HotelItems = ({ item }) => {
  return (
    <Link to={`/hotel/${item.id}`} key={item?.id} className="relative">
      <img
        src={item?.images[0]}
        alt={item.name}
        className="w-full h-[200px] rounded-lg"
      />
      {item.isPopular && (
        <div className="absolute top-[3px] right-0">
          <CustomSpan text={"Popular Choice"} />
        </div>
      )}
      <div className="mt-4">
        <span className="text-lg font-bold text-[#152c5b]">{item.name}</span>
        <p className="text-base text-[#B0B0B0]">{item.location}</p>
      </div>
    </Link>
  );
};

export default HotelItems;
