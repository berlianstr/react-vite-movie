import React from "react";
import Button from "../../../../components/Button/Button";
import { BookmarkIcon, PlayIcon } from "lucide-react";

export default function Overview({ item, itemCast }) {
  const date = new Date(item?.release_date);
  return (
    <div className="flex md:flex-row flex-col gap-8 w-full text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
        className="rounded-[20px] w-3/12"
        alt="poster"
      />
      <div className="flex flex-col gap-4">
        <p className="text-[32px] font-bold">
          {item?.title}
          <span className="font-normal">({date.getFullYear()})</span>
        </p>
        <p className="text-[32px] font-bold">
          {item?.vote_average.toFixed(1)} /{" "}
          <span className="font-normal">10</span>
        </p>
        <p className="text-2xl text-[#BABABA]">{item?.overview}</p>
        <div className="flex text-sm">
          <p className="text-[#BABABA] w-1/12">Cast : </p>
          {itemCast?.cast.map((item, index) => (
            <p key={index}>{item.name},</p>
          ))}
        </div>
        <div className="flex text-sm">
          <p className="text-[#BABABA] w-1/12">Genres : </p>
          {item?.genres.map((item, index) => (
            <p key={index} className="mr-2">
              {item.name},{" "}
            </p>
          ))}
        </div>
        <div className="flex gap-8">
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
      </div>
    </div>
  );
}
