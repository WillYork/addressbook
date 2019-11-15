import React, { Component } from "react";
import * as api from "../api";

class RemoveAddress extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.handleDelete}>Remove Entry</button>
      </div>
    );
  }

  handleDelete = () => {
    api.deleteAddress(this.props.id).then(() => {
      this.props.deleteAddress(this.props.id);
    });
  };
}

export default RemoveAddress;
