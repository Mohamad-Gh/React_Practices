import Item from "./Item";
import { memo } from "react";

const List = ({ people, removeId }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removeId={removeId} />;
      })}
    </div>
  );
};
export default memo(List);
