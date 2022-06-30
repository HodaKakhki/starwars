import React from "react";

export const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>Person</h3>
      <p>Gender-{person.gender}</p>
      <p> Birth year-{person.Birth_year}</p>
    </div>
  );
};

export default Person;
