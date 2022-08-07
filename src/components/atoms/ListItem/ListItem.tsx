import React from "react";

interface Props {
  name: string,
  id: string
}

const ListItem = ({ name, id }: Props) => (
  <p>{`${id}: ${name}`}</p>
);

export default ListItem;
