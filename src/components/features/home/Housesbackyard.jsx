// import { useEffect, useState } from "react";
// import { CustomSpan } from "../../constant/CustomSpan";
// import axios from "axios";

// const Housesbackyard = () => {
//   const [data, setData] = useState(null);
//   const [status, setStatus] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       setStatus(true);
//       try {
//         const { data } = await axios.get(
//           "http://localhost:1337/api/hotels?populate=*&filters[categories][name][$eq]=Houses with backyard&sort[0]=createdAt"
//         );
//         setData(data.data);
//       } catch (error) {
//         setError(
//           "Failed to fetch houses with backyard. Please try again later"
//         );
//       } finally {
//         setStatus(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (status) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   if (!data) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>No data available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="wrapper px-4 py-6">
//       <h3 className="text-2xl font-bold text-[#152c5b] mb-6">
//         Houses with Backyard
//       </h3>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center">
//         {data?.map((houses) => (
//           <div key={houses?.id} className="relative">
//             <img
//               src={houses?.image}
//               alt={houses.name}
//               className="w-full h-auto rounded-lg"
//             />
//             {houses.isPopular && (
//               <div className="absolute top-[3px] right-0">
//                 <CustomSpan text={"Popular Choice"} />
//               </div>
//             )}
//             <div className="mt-4">
//               <span className="text-lg font-bold text-[#152c5b]">
//                 {houses.name}
//               </span>
//               <p className="text-base text-gray-600">{houses.location}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Housesbackyard;

// // const houses = [
// //   {
// //     id: 1,
// //     imgSrc: "src/assets/section (1).png",
// //     title: "Tabby Town",
// //     location: "Gunung Batu, Indonesia",
// //     isPopular: true,
// //   },
// //   {
// //     id: 2,
// //     imgSrc: "src/assets/section(2).png",
// //     title: "Anggana",
// //     location: "Bogor, Indonesia",
// //     isPopular: false,
// //   },
// //   {
// //     id: 3,
// //     imgSrc: "src/assets/section(3).png",
// //     title: "Seattle Rain",
// //     location: "Jakarta, Indonesia",
// //     isPopular: false,
// //   },
// //   {
// //     id: 4,
// //     imgSrc: "src/assets/section(4).png",
// //     title: "Wooden Pit",
// //     location: "Wonosobo, Indonesia",
// //     isPopular: false,
// //   },
// // ];
