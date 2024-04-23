import React from "react";
import { ListContacts } from "../component/ListContacts";
import { Link } from "react-router-dom";


export const Contacts = () => {
    return (
<div className="container mt-5">
        <Link to="/AddContact" className="">
				<button className="btn btn-success float-end">Add new contact</button>
		</Link>
        <div className="container mt-4">
            <h1 className="text-center">Contact List</h1>
            <ul className="list-group">
                <ListContacts/>
            </ul>
        </div>
</div>
)}