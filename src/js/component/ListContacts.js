import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Contacts } from "../views/Contacts";

export const ListContact = () => {
    const {store, actions} =useContext(Context);

    useEffect ( () => {
        actions.Contacts()
        console.log(store  )
    }, [])

    return (
<>
(store.contactos && store.contactos.map(contact, index) => (
    <li key={index} className="list-group-item">
        <div className="row align-items-center">
            <div className="col-3">
                <img src="" alt="user" className="img-fluid rounded-circle"/>
            </div>
            <div className="col-6">
                <h5>{contact.name}</h5>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.address}</p>
            </div>
            <div className="col-3 text-right">
                <button type="eliminar" className="btn btn-danger float-end"><i className="fas fa-trash-alt"></i></button>
                <button type="modificar" className="btn btn-primary float-end"><i className="fas fa-pencil-alt"></i></button>
            </div>
        </div>
    </li> 
))
</>
    )
