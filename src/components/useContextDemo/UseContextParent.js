import { useState } from "react";
import UseContextChild from "./UseContextChild";
import { DashboardContext } from "./context";

const UseContextParent = () => {
  const [user] = useState({ firstName: "Pesho", lastName: "Ivanov" });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <UseContextChild />
      </DashboardContext.Provider>
    </div>
  );
};

export default UseContextParent;
