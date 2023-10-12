import React from "react";
import Button from "../../../components/Button/Button";
import { BookmarkIcon, PlayIcon } from "lucide-react";

export default function HeroBanner({ image }) {
  return (
    <>
      <section
        className="relative flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30 px-[60px] py-10"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`,
        }}
      >
        {!window.location.pathname.includes("/details") && (
          <>
            <div className="flex flex-1  justify-center items-end">
              <p className="text-center font-bold text-5xl">
                Laughter. Tears. Thrills. Find it all on Film.Id <br />
                <span className="text-sm font-normal">
                  Explore the magic of movies like never before on our immersive
                  movie website, where stories come to life and dreams take
                  flight.
                </span>
              </p>
            </div>
            <div className="flex flex-1 justify-center gap-9 items-end">
              <Button
                children={
                  <div className="flex gap-[10px]">
                    <PlayIcon /> <p>Play Now</p>
                  </div>
                }
                className={"px-4"}
              />
              <Button
                children={
                  <div className="flex gap-[10px] ">
                    <BookmarkIcon /> <p>Watch Now</p>
                  </div>
                }
                className={"px-4 text-black font-bold"}
                buttonStyle={"btn--secondary"}
              />
            </div>
          </>
        )}
      </section>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// // import "./style.scss";
// // import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
// import useFetch from "../../../hooks/useFetch";
// import Img from "../../../components/LazyLoadImage/Img";
// import { BookmarkIcon, PlayIcon } from "lucide-react";
// import Button from "../../../components/Button/Button";

// const HeroBanner = () => {
//   const [background, setBackground] = useState("");
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
//   const { url } = useSelector((state) => state.landing);
//   const { data, loading } = useFetch("/movie/popular");

//   console.log(url);

//   useEffect(() => {
//     const bg =
//       "https://image.tmdb.org/t/p/w500" +
//       data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
//     setBackground(bg);
//   }, [data]);

//   const searchQueryHandler = (event) => {
//     if (event.key === "Enter" && query.length > 0) {
//       navigate(`/search/${query}`);
//     }
//   };

//   return (
//     <div className="heroBanner w-full h-[450px] bg-black flex items-center relative">
//       {!loading && (
//         <div className="backdrop-img w-[100vw] h-screen absolute top-0 left-0">
//           <Img src={background} />
//         </div>
//       )}

//       {/* <div className="opacity-layer"></div> */}
//       <div className="heroBannerContent">
//         <Button
//           children={
//             <div className="flex gap-[10px]">
//               <PlayIcon /> <p>Play Now</p>
//             </div>
//           }
//           className={"px-4"}
//         />
//         <Button
//           children={
//             <div className="flex gap-[10px] ">
//               <BookmarkIcon /> <p>Watch Now</p>
//             </div>
//           }
//           className={"px-4 text-black font-bold"}
//           buttonStyle={"btn--secondary"}
//         />
//         {/* <div className="flex justify-center gap-9 h-[90%]  items-end">
//           <Button
//             children={
//               <div className="flex gap-[10px]">
//                 <PlayIcon /> <p>Play Now</p>
//               </div>
//             }
//             className={"px-4"}
//           />
//           <Button
//             children={
//               <div className="flex gap-[10px] ">
//                 <BookmarkIcon /> <p>Watch Now</p>
//               </div>
//             }
//             className={"px-4 text-black font-bold"}
//             buttonStyle={"btn--secondary"}
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;
