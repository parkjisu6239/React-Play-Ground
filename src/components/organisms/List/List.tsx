import React from "react";

interface Props {
  list: {name: string, id: string}[],
  children: (name: string, id: string) => React.ReactChild
}

const List = ({ list, children }: Props) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{children(item.name, item.name)}</li>
    ))}
  </ul>
);

export default List;
