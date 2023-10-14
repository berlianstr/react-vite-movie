import React from "react";
import Card from "../../../components/Card/Card";

export default function Trending({ data }) {
  return (
    <div className="trending">
      <p className="text-[32px] font-bold text-white mb-6">Trending Now</p>
      <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-11">
        {data?.results?.slice(0, 6)?.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
