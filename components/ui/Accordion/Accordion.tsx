import React, { FC } from "react";
import s from "./Accordion.module.css";
import { RightArrow } from "@components/icons";
import cn from "classnames";

interface Props {
  className?: string;
  headline: string;
  description: string;
}

const Accordion: FC<any> = ({ headline, description }) => {
  return (
    <details className="pb-5 border-b md:w-120 hover:cursor-pointer">
      <summary
        className={cn(
          "flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red",
          s.summary
        )}
      >
        {headline}
      </summary>
      <p className="text-dark-grayish-blue text-xs font-normal">
        {description}
      </p>
    </details>
  );
};

export default Accordion;
