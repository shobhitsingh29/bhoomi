import React, { FC } from "react";
import s from "./Accordion.module.css";

interface Props {
  className?: string;
  headline: string;
  description: string;
}

const Accordion: FC<any> = ({ headline, description }) => {
  return (
    <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
      <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
        {headline}
      </summary>
      <p className="text-dark-grayish-blue text-xs font-normal">
        {description}
      </p>
    </details>
  );
};

export default Accordion;
