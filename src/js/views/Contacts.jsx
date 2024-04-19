import React, { useState, useEffect, useContext } from "react";
import { ListContacts } from "../component/ListContacts";
import { Link } from "react-router-dom";

export const Contacts = () => {

    return (
		<div className="container mt-5">
            <div className="container mt-4">
                <h1 className="text-center">Contact List</h1>
                <ul className="list-group"><ListContacts/></ul>
            </div>

			<Link to="/AddContact">
                <button className="btn btn-success justify-content-center">Add New Contact</button>
			</Link>
		</div>
	);
};