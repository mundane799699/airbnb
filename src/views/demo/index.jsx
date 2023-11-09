import Indicator from "@/base-ui/indicator";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";

const Demo = memo(() => {
  const names = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"];
  const [selectIndex, setSelectIndex] = useState(0);
  function toggleClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) {
      newIndex = names.length - 1;
    } else if (newIndex > names.length - 1) {
      newIndex = 0;
    }
    setSelectIndex(newIndex);
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => toggleClickHandle(false)}>上一个</button>
        <button onClick={(e) => toggleClickHandle(true)}>下一个</button>
        <div className="list">
          <Indicator selectIndex={selectIndex}>
            {names.map((item) => {
              return <button key={item}>{item}</button>;
            })}
          </Indicator>
        </div>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
