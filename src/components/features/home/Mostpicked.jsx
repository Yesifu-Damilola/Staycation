import { CustomSpan } from "../../constant/CustomSpan";
import { useFetch } from "../../../hook/useFetch";
import { Link } from "react-router-dom";


const Mostpicked = () => {
  const { data: hotels, status, error } = useFetch("most picked");

  if (status) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }
  if (!hotels) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No hotels available</p>
      </div>
    );
  }

  return (
    <div className="wrapper ">
      <h3 className="text-[#152c5b] text-2xl font-bold px-4 ">Most Picked</h3>
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 place-items-center p-4 ">
        <div
          className={` bg-cover bg-center w-full h-[460px]  relative rounded-3xl`}
          style={{
            background: `url(${hotels[0]?.images[0]})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <CustomSpan
            text={`${hotels[0]?.price} per ${hotels[0]?.duration}`}
            className=" absolute top-0 right-[2px]"
          />
          <span className="text-[#152c5b] text-base font-bold absolute bottom-2 left-5 py-6">
            {hotels[0]?.name}
          </span>
          <p className="text-[#152c5b] text-base absolute bottom-2 left-5">
            {hotels[0]?.location}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full ">
          {hotels?.slice(1, 5).map((resort) => (
            <Link
              to={`/${resort?.id}`}
              key={resort?.id}
              className={`relative w-full h-[215px] rounded-2xl px-4 bg-cover bg-center`}
              style={{ background: `url(${resort.images[0]})` }}
            >
              <CustomSpan
                text={`$${resort?.price} per ${resort.duration}`}
                className="absolute top-0 right-0"
              />
              <span
                className={`text-xl font-bold absolute bottom-2 left-5 py-6`}
              >
                {resort.name}
              </span>
              <p className={`text-base absolute bottom-2 left-5 `}>
                {resort.location}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mostpicked;
