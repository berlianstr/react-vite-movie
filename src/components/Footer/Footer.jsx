import { CopyrightIcon } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer  h-auto  md:px-[60px] px-4 bg-black py-[52px]">
      <div className="flex gap-5 h-full items-center">
        <p className="text-white text-[48px] font-semibold italic cursor-pointer">
          FILM.ID
        </p>
        <CopyrightIcon color="white" size={30} />
        <p className="text-white text-[48px]">2021</p>
      </div>
      <p className="text-white text-4xlxl">
        powered by <span className="underline">ASIAPMOVIE</span>
      </p>
    </footer>
  );
}
