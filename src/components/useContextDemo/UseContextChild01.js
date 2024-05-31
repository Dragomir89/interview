import { DashboardContext, useUserContext } from "./context";

const UseContextChild01 = ({}) => {
  const user = useUserContext(DashboardContext);

  return <div>{user.firstName}</div>;
};

export default UseContextChild01;
