import React from "react";
import { Link } from "react-router-dom";

export default function Pet(props) {
  return (
    <div>
      <Link to="/singlepetview">
        <img
          src={props.basic_information.photo_url}
          alt={props.basic_information.breed}
          className="pet-avatar"
        />
      </Link>
      <ul className="pet">
        <li>Name: {props.basic_information.name}</li>
        <li>Breed: {props.basic_information.breed}</li>
        <li>Preferred Vet: {props.veterinary_information.name}</li>
        <li>Vet Contact: {props.veterinary_information.phone}</li>
        <li>Allergies: {props.health_conditions.allergies}</li>
        <li>
          Chronic Conditions: {props.health_conditions.chronic_conditions}
        </li>
        <li>Checkup History: {props.checkups}</li>
        <li>Vaccination Reccords: {props.vaccinations}</li>
        <li>Weight History: {props.weight_history}</li>
        <li>Notes: {props.notes}</li>

        <br />
      </ul>
    </div>
  );
}
