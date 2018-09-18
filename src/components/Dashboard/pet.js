import React from "react";

export default function Pet(props) {
  return (
    <div className="pet">
      <p>{props.basic_information.name}</p>
      <p>{props.basic_information.species}</p>
      <br />
      <p>{props.vaccinations}</p>
      <p>{props.checkups}</p>
      <p>{props.weight_history}</p>

      <br />
    </div>
  );
}
