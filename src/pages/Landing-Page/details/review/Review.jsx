import { UserCircle } from "lucide-react";
import React from "react";

export default function Review() {
  return (
    <div className="text-white">
      <p className="text-[32px] font-bold">Reviews</p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[54px] mt-[30px]">
        <div className="bg-[#3A3A3A] rounded-xl p-6">
          <div className="flex items-center gap-[15px]">
            <UserCircle size={42} />{" "}
            <p className="text-xl font-semibold">Atta Halilintar</p>
          </div>
          <p className="mt-4 text-[#BABABA]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            delectus odio veritatis sit inventore, porro, sed rem tempora quam
            voluptas facere quaerat velit libero. Vitae libero iste culpa
            recusandae? Temporibus?
          </p>
        </div>
        <div className="bg-[#3A3A3A] rounded-xl p-6">
          <div className="flex items-center gap-[15px]">
            <UserCircle size={42} />{" "}
            <p className="text-xl font-semibold">Atta Halilintar</p>
          </div>
          <p className="mt-4 text-[#BABABA]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            delectus odio veritatis sit inventore, porro, sed rem tempora quam
            voluptas facere quaerat velit libero. Vitae libero iste culpa
            recusandae? Temporibus?
          </p>
        </div>
        <div className="bg-[#3A3A3A] rounded-xl p-6">
          <div className="flex items-center gap-[15px]">
            <UserCircle size={42} />{" "}
            <p className="text-xl font-semibold">Atta Halilintar</p>
          </div>
          <p className="mt-4 text-[#BABABA]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            delectus odio veritatis sit inventore, porro, sed rem tempora quam
            voluptas facere quaerat velit libero. Vitae libero iste culpa
            recusandae? Temporibus?
          </p>
        </div>
        <div className="bg-[#3A3A3A] rounded-xl p-6">
          <div className="flex items-center gap-[15px]">
            <UserCircle size={42} />{" "}
            <p className="text-xl font-semibold">Atta Halilintar</p>
          </div>
          <p className="mt-4 text-[#BABABA]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            delectus odio veritatis sit inventore, porro, sed rem tempora quam
            voluptas facere quaerat velit libero. Vitae libero iste culpa
            recusandae? Temporibus?
          </p>
        </div>
      </div>
    </div>
  );
}
