import React, { MouseEventHandler } from "react";

const CustomButton = ({
 title,
 handleClick,
 buttonStyles,
}: {
 title: string;
 handleClick: MouseEventHandler;
 buttonStyles: string;
}) => {
 return (
  <button className={buttonStyles} onClick={handleClick}>
   {title}
  </button>
 );
};

export default CustomButton;
