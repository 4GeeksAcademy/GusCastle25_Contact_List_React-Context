import React, { useContext, useState, useEffect } from "react";
import { Link,  } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const AddContact =() => {
    const {store, actions} = useContext(Context);
    const [userInput, setUserInput] = useState([]);
    const navigate = useNavigate() 

    const handleSubmit = e => {
        e.preventDefault();
            actions.CreateContact(userInput);
            console.log(userInput)
            navigate("/")
    };

    return (        
<><form onSubmit={handleSubmit}>
    
    <h1 className="text-center mt-5">Add Contact</h1>
    <div className="container mt-5">
        <div className="mt-5">        
            <label className="form-label d-flex text-start">
            <i className="fa fa-user bigicon mx-2" style={{color: "#B197FC",fontSize : 24}}></i>  
            Full Name
            </label>
            <input type="text" 
            className="form-control" 
            minLength={3} 
            required={true} 
            value={userInput.nombre}
            onChange={(e) => setUserInput({ ...userInput, nombre: e.target.value })}
            placeholder="full Name" />
        </div>
        <div className="my-3">
            <label  className="form-label d-flex text-start">
                <i className="fas fa-envelope mx-2" style={{color: "#B197FC",fontSize : 24}}></i>
                Email
            </label>
            <input type="email" 
            className="form-control" 
            minLength={3} 
            required={true}
            value={userInput.correo}
            onChange={(e) => setUserInput({ ...userInput, correo: e.target.value })}
            placeholder="name@example.com" />
        </div>
        <div className="my-3">
            <label  className="form-label d-flex text-start">
                <i className="fas fa-phone-square mx-2" style={{color: "#B197FC",fontSize : 24}}></i>
                Phone
            </label>
            <input type="text" 
            className="form-control"
            minLength={3} 
            required={true}
            value={userInput.telefono}
            onChange={(e) => setUserInput({ ...userInput, telefono: e.target.value })}
            placeholder="+34-666-66-66-66" />
        </div>
        <div className="my-3">
            <label className="form-label d-flex text-start">
                <i className="fas fa-map-marker-alt mx-2" style={{color: "#B197FC", fontSize : 24}}></i>
                Address
            </label>
            <input type="text" 
            className="form-control" 
            minLength={3} 
            required={true}
            value={userInput.direccion} 
            onChange={(e) => setUserInput({ ...userInput, direccion: e.target.value })}
            placeholder="Address" />
    </div>
    </div>
    <div class="d-grid gap-2 col-2 justify-content-md-end">

        <button class="btn btn-primary" type="submit" value={"save"}>Save</button>
        <Link to="/" className="ml-auto">
            <button className="btn btn-primary">Back home</button>
        </Link>

    </div>
</form>
</>      

    )
}