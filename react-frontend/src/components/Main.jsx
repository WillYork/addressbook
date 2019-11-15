import React from "react";
import { Router } from "@reach/router";
import AddressList from "./AddressList";
import AddressMain from "./AddressMain"
import NewEntry from "./NewEntry";

function Main() {
    return (
        <section>
            <Router>
                <AddressList path="/"/>
                <AddressList path="/addresses"/>
                <AddressMain path="/addresses/:id" />
                <NewEntry path="/new_entry" />
            </Router>
        </section>
    )
}

export default Main