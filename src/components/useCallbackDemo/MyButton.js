import { memo } from "react";

const MyButton = ({ children, handleClick }) => {
  console.log("Render button: ", children);
  return <button onClick={handleClick}>{children}</button>;
};

export default memo(MyButton);
