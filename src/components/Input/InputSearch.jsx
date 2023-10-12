import React from "react";
import { SearchIcon } from "lucide-react";
import InputBox from "./Input";
import { twMerge } from "tailwind-merge";

export default function InputSearch({
  id,
  name,
  handleOnChange,
  input,
  className,
  placeholder,
  ...props
}) {
  return (
    <div className="xl:w-5/12 w-full flex border-2 border-gray-200  items-center justify-center rounded-lg ">
      <div className="w-[10%] mt-3 ml-3">
        <button type="submit" cursor={"pointer"}>
          <SearchIcon className="h-7 w-7 mr-3 cursor-pointer" color="#FFFFFF" />
        </button>
      </div>
      <div className="w-full">
        <InputBox
          id={id}
          value={input}
          name={name}
          className={twMerge(
            `w-full focus:outline-none text-white placeholder:text-white`,
            className
          )}
          placeholder={placeholder}
          type="text"
          onChange={handleOnChange}
          {...props}
        />
      </div>
    </div>
  );
}
