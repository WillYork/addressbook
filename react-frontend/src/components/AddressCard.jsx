import React from "react";
import { Link } from "@reach/router";
import RemoveAddress from "./RemoveAddress";

function AddressCard({ addresses, deleteAddress }) {
    const {id, forename, surname, address, postcode, telephone, email, date_of_birth} = addresses
  return (
    <li className="address-card">
      <h2><Link to={`/addresses/${id}`}>
        {forename}
        {" "}{surname}
        </Link>
      </h2>
      <p>Address: {address}</p>
      <p>{postcode}</p>
      <p>Telephone: {telephone}</p>
      <p>Email: {email}</p>
      <p>Date of Birth: {date_of_birth}</p>
      <RemoveAddress id={id} deleteAddress={deleteAddress}/>
    </li>
  );
}

export default AddressCard;
