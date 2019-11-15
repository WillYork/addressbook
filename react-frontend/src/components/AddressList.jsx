import React, { Component } from "react";
import * as api from "../api";
import AddressCard from "./AddressCard";
import { Link } from "@reach/router";

class AddressList extends Component {
  state = { addresses: null };

  render() {
    const { addresses } = this.state;
    return (
      <>
        <Link to="/new_entry">
          <button>Enter Address</button>
        </Link>
        <ul className="address-list">
          {addresses &&
            addresses.map(address => {
              return (
                <AddressCard
                  key={address.id}
                  addresses={address}
                  deleteAddress={this.deleteAddress}
                />
              );
            })}
        </ul>
      </>
    );
  }

  componentDidMount() {
    return this.fetchAddresses();
  }

  fetchAddresses = () => {
    api.getAddresses().then(({ data: addresses }) => {
      this.setState({
        addresses
      });
    });
  };

  deleteAddress = () => {
    return this.fetchAddresses();
  };
}

export default AddressList;
