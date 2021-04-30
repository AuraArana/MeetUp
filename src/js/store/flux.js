const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			events: [],
			groups: []
		},
		actions: {
			// Use getActions to call a function within a fuction
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
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getEvents: () => {
				fetch("https://api.jsonbin.io/b/6042fc4a5e29de07fcec3cfd")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ events: response });
					});
			},
			getGroups: () => {
				fetch("https://api.jsonbin.io/b/6042fcf85e29de07fcec3d53")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ groups: response });
					});
			}
		}
	};
};

export default getState;
