import { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import MyButton from "./MyButton";

const UseCallbackClickDemoParent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  // най-често се ползва когато когато фунцията се предава на дръг компонент
  // не създава нова инстанция на ф-ята и не пререндерира компонентите на които се предава
  const incrAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <MyButton handleClick={incrAge}> Add Age </MyButton>
      <Count text="Salary" count={salary} />
      <MyButton handleClick={incrSalary}> Add Salary </MyButton>
    </div>
  );
};

export default UseCallbackClickDemoParent;
