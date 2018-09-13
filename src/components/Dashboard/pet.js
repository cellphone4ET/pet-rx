import React from "react";

export default function Pet(props) {
  return (
    <div className="pet">
      <h1>{props.Basic_Information.name}</h1>
      <div>{props.Health_Conditions.Allergies}</div>
    </div>
  );
}
