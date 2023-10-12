import React from "react";

export default function InputBox({
  id,
  type,
  name,
  onChange,
  value,
  children,
  ref,
  restLabelClass,
  ...rest
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={`font-semibold mb-1 ${restLabelClass}`}>
        {children}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        ref={ref}
        {...rest}
      />
    </div>
  );
}
