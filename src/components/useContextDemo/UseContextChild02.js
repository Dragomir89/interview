import { useUserContext } from "./context";

const UseContextChild02 = () => {
  const user = useUserContext();
  return <div>{user.lastName}</div>;
};

export default UseContextChild02;
