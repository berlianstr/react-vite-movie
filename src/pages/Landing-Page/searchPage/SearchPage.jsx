import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Trending from "../trending/Trending";
import Upcoming from "../upcoming/Upcoming";
import Western from "../western/Western";
import { fetchDataFromApi } from "../../../utils/https/api";
import Card from "../../../components/Card/Card";
import { Loader2 } from "lucide-react";
import useLandingPageViewModel from "../landing-page-view-model";

export default function SearchPage() {
  const model = useLandingPageViewModel();
  const { query } = useParams();
  const [loading, setLoading] = useState(false);
  const [dataQuery, setDataQuery] = useState([]);

  const fetchByQuery = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=1`).then((res) => {
      setDataQuery(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchByQuery();
  }, [query]);

  //   console.log(query);

  return (
    <div className="min-h-[700px] flex flex-col gap-[70px] bg-black text-white px-[60px] py-10">
      <div className="border border-[#FF6161] mt-20 "></div>
      <div className="mt-[70px]">
        <p className="text-2xl">
          The result <span className="font-bold">{`"${query}"`}</span>
        </p>
        {!loading ? (
          <div className="grid grid-cols-6 gap-11">
            {dataQuery?.results?.slice(0, 6)?.map((item, index) => {
              return <Card item={item} key={index} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center">
            <Loader2 className={`animate-spin`} size={40} />
          </div>
        )}
      </div>
      <Trending data={model.data} />
      <Upcoming data={model.dataNewRelease} />
      <Western data={model.dataWesternMovie} />
    </div>
  );
}
