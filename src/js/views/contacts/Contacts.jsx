import React from "react";
import { ListContacts } from "../../component/ListContacts";
import { Link } from "react-router-dom";


export const Contacts = () => {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row mt-4">
                    <div className="col"></div>
                    <div className="col">
                        <h1 className="text-center">Contact List</h1>
                    </div>
                    <div className="col text-center">
                        <Link to="/AddContact" className="">
                            <button className="btn btn-success">Add new contact</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <ListContacts />
            </div>
        </div>
    )
}


