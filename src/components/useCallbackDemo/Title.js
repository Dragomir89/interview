import { memo } from "react";

const Title = () => {
  console.log("Render Title");
  return <h2>UseCallback</h2>;
};

export default memo(Title); /// спира презареждането на компонента ако няма нови пропс
