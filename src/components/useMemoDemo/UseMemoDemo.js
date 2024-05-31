import { useEffect, useMemo, useState } from "react";
import { initialItems } from "./initialItems";

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () =>
      items.find((item) => {
        // при промяна на count се пре-рендерира компонента и find.items ще се  извиква,
        // когато ползваме useMemo ако нямаме промяна в тойността на items, find.items няма да се извиква
        // !!! най-често се използва когато се задава стойност на променлива от функция
        console.log(item);
        return item.isSelected;
      }),
    [items]
  );

  return (
    <div>
      <h2>USE MEMO DEMO {count}</h2>
      <h3>Selected Item: {selectedItem?.id}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        INCREMENT
      </button>
    </div>
  );
};

export default UseMemoDemo;
