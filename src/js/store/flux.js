import { Form } from "../views/form";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			createContats: ({nombre, dirección, teléfono, correo})=> {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"name": "nombre",
					"phone": "teléfono",
					"email": "correo",
					"address": "dirección",
					"id": 0
				};

				const requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/GusCastle25/contacts", requestOptions)
				.then((response) => response.json())
				.then((result) => console.log(result.contacts));
				.catch((error) => console.error(error));
			},

			contacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/GusCastle25/contacts", {method:"GET"})
					.then((response) => response.json())
					.then((result) => { 
						setStore({contactos:result.contacts});
						console,log(result)
					})
					.catch((error) => console.error(error));
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const form = store.form.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ form: form });
			}
		}
	};
};

export default getState;
