import React, { FC} from "react";

const Avatar: FC<any> = ({src}) => {
  return (
    <img src={src}
         alt={''}
      className="inline-block h-10 w-10 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition linear-out duration-150"
    >
    </img>
  );
};

export default Avatar;
