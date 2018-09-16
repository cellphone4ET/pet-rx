import React from "react";
import QuickAddform from "../Quickaddform";

export default function Pet(props) {
  return (
    <div className="pet">
      <p>{props.basic_information.name}</p>
      <p>{props.basic_information.species}</p>

      <QuickAddform />

      <br />
    </div>
  );
}
