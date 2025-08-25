import { Link } from "react-router-dom";
import { useFetch } from "../../../hook/useFetch";
import { CustomSpan } from "../../constant/CustomSpan";

const Mostpicked = () => {
  const query = {
    apiName: "hotels",
    key: "category",
    value: "most picked",
  };
  const { data: hotels, isLoading, isError, error } = useFetch(query);
  const memoHotels = hotels ? [...hotels] : [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="loader mx-auto mb-4" />
          <p className="text-lg text-gray-700">Loading most picked hotels...</p>
        </div>
      </div>
    );
  }
  if (isError) {
    console.error("Mostpicked error:", error);
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-700 mb-4">
            We couldn&apos;t load the most picked hotels. Please try again
            later.
          </p>
          <details className="text-xs text-gray-400">
            <summary>Show error details</summary>
            <pre>{String(error)}</pre>
          </details>
        </div>
      </div>
    );
  }
  if (!memoHotels.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            No Data Available
          </h2>
          <p className="text-gray-700">
            There are currently no most picked hotels to display.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="wrapper ">
      <h3 className="text-[#152c5b] text-2xl font-bold px-4 ">Most Picked</h3>
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 place-items-center p-4 ">
        <Link
          to={`/hotel/${memoHotels[0]?.id}`}
          className="bg-cover bg-center w-full h-[460px] relative rounded-3xl"
          style={{
            background: `url(${memoHotels[0]?.images[0]})`,
            backgroundRepeat: "no-repeat ",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <CustomSpan
            text={`${memoHotels[0]?.price} per ${memoHotels[0]?.duration}`}
            className=" absolute top-0 right-[2px]"
          />
          <span className="text-[#152c5b] text-base font-bold absolute bottom-2 left-5 py-6">
            {memoHotels[0]?.name}
          </span>
          <p className="text-[#152c5b] text-base absolute bottom-2 left-5">
            {memoHotels[0]?.location}
          </p>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full ">
          {memoHotels.slice(1, 5).map((resort) => (
            <Link
              to={`/hotel/${resort?.id}`}
              key={resort?.id}
              className="relative w-full h-[215px] rounded-2xl px-4 bg-cover bg-center"
              style={{
                background: `url(${resort.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <CustomSpan
                text={`$${resort?.price} per ${resort.duration}`}
                className="absolute top-0 right-0"
              />
              <span className="text-xl font-bold absolute bottom-2 left-5 py-6 text-white ">
                {resort.name}
              </span>
              <p className="text-base absolute bottom-2 left-5 text-white ">
                {resort.location}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mostpicked;
