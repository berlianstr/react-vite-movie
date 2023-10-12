import React from "react";
import useLandingPageViewModel from "../landing-page-view-model";
import HeroBanner from "../heroBanner/HeroBanner";
import useDetailsPageViewModel from "./details-page-view-model";
import Trending from "../trending/Trending";
import Upcoming from "../upcoming/Upcoming";
import Western from "../western/Western";
import Overview from "./overview/Overview";
import Review from "./review/Review";

export default function Details() {
  const modelLanding = useLandingPageViewModel();
  const modelDetails = useDetailsPageViewModel();

  return (
    <div className="details-page ">
      <HeroBanner image={modelDetails?.data?.backdrop_path} />
      <div className="menu px-[60px] flex flex-col gap-[60px] min-h-screen bg-black pt-[52px]">
        <Overview item={modelDetails.data} itemCast={modelDetails.cast} />
        <Review />
        <Trending data={modelLanding.data} />
        <Upcoming data={modelLanding.dataNewRelease} />
        <Western data={modelLanding.dataWesternMovie} />
      </div>
    </div>
  );
}
