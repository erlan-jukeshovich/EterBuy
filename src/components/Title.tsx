import type { FC } from "react";

interface TitleProps {
  text1: string;
  text2: string;
}

const Title: FC<TitleProps> = ({ text1, text2 }) => {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-2xl md:3xl font-medium tracking-[3px] text-gray-500 uppercase">
        {text1}
      </span>
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black">
        {text2}
      </span>
    </div>
  );
};

export default Title;
