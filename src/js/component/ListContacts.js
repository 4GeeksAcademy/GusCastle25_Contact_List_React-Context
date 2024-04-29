import React, {useContext, useEffect,}  from "react";
import { object } from "prop-types";
import { Context } from "../store/appContext";
import { Link,  } from "react-router-dom";

export const ListContacts =()=>{

  const {store, actions} = useContext(Context);
 
  const handleEliminate = (id) => {
    actions.DeleteContact(id)
    .then(() => actions.Contacts());
  };
  
    const handleEdit = (idtwo) => {
     actions.EditContact(idtwo)
  };
  

  useEffect ( ()=> {
    actions.Contacts()
    console.log(store)
  }, [])
    return(
<>
{store.contacts && store.contacts.map((contact, index) => (
  <div className="row py-2  align-middle">
          <div className="col-3" key={index}>
            <img src="https://us.123rf.com/450wm/moremar/moremar2305/moremar230500007/222721918-una-cara-de-un-hombre-calvo-latinoamericano-con-barba-oscura-vector-ilustraci%C3%B3n-plana.jpg?ver=6" 
            alt="User" 
            className="img-fluid w-75 rounded-circle"/>
          </div>
          <div className="col-7 d-flex flex-column justify-content-center">
            <h5>{contact.name}</h5>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>
          </div>
          <div className="col-2 text-right align-content-center">
            <div className="row d-flex flex-column">
              <div className="col py-2">
              <Link to={`/EditContact/${contact.id}`}>
                <button className="btn btn-primary cielo w-50">
                    <i className="fas fa-pencil-alt"></i>
                </button>   
              </Link>
              </div>
              <div className="col py-2">
                <button onClick={() => handleEliminate(contact.id)} 
                  type="button" 
                  className="btn btn-danger w-50">
                  <i className="fas fa-trash-alt"></i>
                </button>
            </div>
            </div>
          </div>
          </div>
    ))}
</>
   )
}
