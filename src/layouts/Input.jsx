import React, { useId } from "react";

const Input = React.forwardRef(
  (
    {
      label,
      type = "text",
      className = "",
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <div className="flex flex-col">
        {label && (
          <label className="inline-block mb-1 pl-1 text-[#196d5b]" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          className={`py-3 px-2 bg-[#d5f2ec] rounded-lg ${className}`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
