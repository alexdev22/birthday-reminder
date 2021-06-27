import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="list" key={id}>
            <img src={image} className="image"></img>
            <div className="name">
              {name}
              <div className="age">{age} Years</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
