import React from "react";

export default function Pet(props) {
  return (
    <div className="pet">
      <p>{props.basic_information.name}</p>
      <p>{props.basic_information.species}</p>
      <p>{props.vaccinations.vaccination}</p>

      <br />
    </div>
  );
}
