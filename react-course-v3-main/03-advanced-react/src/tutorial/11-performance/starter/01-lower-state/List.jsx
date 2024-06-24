import Person from "./Person";
import { useState } from "react";
import { data } from "../../../../data";

const List = () => {
  const [people, setPeople] = useState(data);

  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
