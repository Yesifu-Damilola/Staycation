/* eslint-disable react/prop-types */

export const CustomSpan = ({
  className = "",
  onClick,
  text = "",
  type = "button",
}) => (
  <span
    onClick={onClick}
    type={type}
    className={`${className} text-base bg-[#ff498b] py-1 px-[5px] text-white border-none rounded-tr-[13px] rounded-bl-[12px]`}
  >
    {text}
  </span>
);
