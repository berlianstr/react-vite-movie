import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Upcoming from "./upcoming/Upcoming";
import Western from "./western/Western";
import useLandingPageViewModel from "./landing-page-view-model";

export default function LandingPage() {
  const model = useLandingPageViewModel();
  return (
    <div className="landing-page ">
      <HeroBanner image={model.heroBanner} />
      <div className="menu px-[60px] flex flex-col gap-[60px] min-h-screen bg-black pt-[52px]">
        <Trending data={model.data} />
        <Upcoming data={model.dataNewRelease} />
        <Western data={model.dataWesternMovie} />
      </div>
    </div>
  );
}
