import React, { memo } from "react";

type ChildCompProps = {
  onClick: () => void;
};
const ChildComp = ({ onClick }: ChildCompProps) => {
  console.log("ChildComp render");
  return (
    <>
      <h2>Child component</h2>

      <button onClick={onClick}>child comp click</button>
    </>
  );
};

export default memo(ChildComp);
