import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const [userInput, setUserInput] = useState([]);
    const navigate = useNavigate()
    let { id } = useParams();


    useEffect(() => {
        setUserInput(store.contacts.find((contact) => contact.id == id))
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        actions.EditContact(userInput);
        console.log(userInput)
        navigate("/")
    };

    return (
        <><form onSubmit={handleSubmit}>

            <h1 className="text-center mt-5">Edit Contact</h1>
            <div className="container mt-5">
                <div className="mt-5">
                    <label className="form-label d-flex text-start">
                        <i className="fa fa-user bigicon mx-2" style={{ color: "#B197FC", fontSize: 24 }}></i>
                        Full Name
                    </label>
                    <input type="text"
                        className="form-control"
                        minLength={3}
                        required={true}
                        value={userInput.name}
                        onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                        placeholder="full Name" />
                </div>
                <div className="my-3">
                    <label className="form-label d-flex text-start">
                        <i className="fas fa-envelope mx-2" style={{ color: "#B197FC", fontSize: 24 }}></i>
                        Email
                    </label>
                    <input type="email"
                        className="form-control"
                        minLength={3}
                        required={true}
                        value={userInput.email}
                        onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                        placeholder="name@example.com" />
                </div>
                <div className="my-3">
                    <label className="form-label d-flex text-start">
                        <i className="fas fa-phone-square mx-2" style={{ color: "#B197FC", fontSize: 24 }}></i>
                        Phone
                    </label>
                    <input type="text"
                        className="form-control"
                        minLength={3}
                        required={true}
                        value={userInput.phone}
                        onChange={(e) => setUserInput({ ...userInput, phone: e.target.value })}
                        placeholder="+34-666-66-66-66" />
                </div>
                <div className="my-3">
                    <label className="form-label d-flex text-start">
                        <i className="fas fa-map-marker-alt mx-2" style={{ color: "#B197FC", fontSize: 24 }}></i>
                        Address
                    </label>
                    <input type="text"
                        className="form-control"
                        minLength={3}
                        required={true}
                        value={userInput.address}
                        onChange={(e) => setUserInput({ ...userInput, address: e.target.value })}
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