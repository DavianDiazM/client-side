import React from "react";

interface ButtonAccessProps {
  text: string;
  handleClick: () => void;
}

const ButtonAccess: React.FC<ButtonAccessProps> = ({ text, handleClick }) => {
  return (
    <section
      onClick={handleClick}
      className="w-48 h-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg flex items-center justify-center"
    >
      <p className="text-white text-center text-lg font-semibold">{text}</p>
    </section>
  );
};

export default ButtonAccess;
