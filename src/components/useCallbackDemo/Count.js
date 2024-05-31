import { memo } from "react";

const Count = ({ text, count }) => {
  console.log("Render Count: ", text);
  return (
    <div>
      <h3>
        {text}: {count}
      </h3>
    </div>
  );
};

export default memo(Count);
