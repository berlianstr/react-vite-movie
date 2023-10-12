import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-full cursor-pointer"
      onClick={() => {
        navigate(`/details/${item.id}`);
        window.scrollTo(0, 0);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
        className="rounded-[20px]"
        alt="poster"
      />
      <div className=" text-white mt-[14px]">
        <p className="font-semibold">{item?.title}</p>
        <p className="text-sm">{item?.year}</p>
      </div>

      <p className="text-white text-sm">
        Rating{" "}
        <span className="text-sm text-[#FFED4E]">{item.vote_average} / 10</span>
      </p>
    </div>
  );
}
