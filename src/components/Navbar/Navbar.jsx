import React, { useEffect, useState } from "react";

import imgUser from "../../assets/images/user-img.png";
import InputSearch from "../Input/InputSearch";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`search/${query}`);
    }
  };
  return (
    <div className={`flex justify-between navbar navbar-${show}  `}>
      <div className="md:block hidden w-2/12">
        <p
          className="text-white text-[42px] font-semibold italic cursor-pointer"
          onClick={() => {
            navigate("/");
            setQuery("");
          }}
        >
          FILM.ID
        </p>
      </div>
      <div className="md:flex hidden xl:w-full lg:w-6/12 justify-end  gap-[42px]">
        <InputSearch
          className={"bg-transparent"}
          placeholder={"Search your favourites"}
          onKeyUp={searchQueryHandler}
          handleOnChange={(e) => setQuery(e.target.value)}
        />
        <img src={imgUser} alt="user-image" />
      </div>
      <div className="md:hidden  w-full block">
        <InputSearch
          className={"bg-transparent"}
          placeholder={"Search your favourites"}
          onKeyUp={searchQueryHandler}
          handleOnChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
