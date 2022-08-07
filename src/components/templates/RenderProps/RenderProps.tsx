import React from "react";
import Mouse from "src/components/molecules/Mouse";
import Cat from "src/components/atoms/Cat";
import List from "src/components/organisms/List";
import ListItem from "src/components/atoms/ListItem";

import useToggle from "src/hooks/useToggle";

import { list } from "./constants";

const RenderProps = () => {
  const { toggle, switchToggle } = useToggle();

  return (
    <div>
      <button onClick={switchToggle}>{toggle ? "리스트 보기" : "고앵이 보기"}</button>
      {toggle ? (
        <Mouse>
          {(pos) => <Cat pos={pos} />}
        </Mouse>
      ) : (
        <List list={list}>
          {(name, id) => <ListItem name={name} id={id} />}
        </List>
      )}
    </div>
  );
};

export default RenderProps;
