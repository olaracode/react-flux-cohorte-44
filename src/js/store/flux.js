const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      userProfile: {
        username: "josemi19",
        name: "Jose",
        lastname: "Morrone",
      },
      characters: [],
    },
    actions: {
      saluda: () => {
        console.log("Hola que tal :)");
      },
      fetchRickAndMortyCharacters: async () => {
        const store = getStore();
        console.log(store);
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (response.ok) {
          const data = await response.json();
          const apiCharacters = await data.results;
          // -> modificando el store, con todos los valores anteriores, y el valor que quiero modificar
          setStore({ ...store, characters: apiCharacters });
          // El metodo anterior ya no es necesario
          // actualmente se puede solamente referenciar el valor que queremos cambiar
          // setStore({ valorAModificar: valorNuevo })
        }
      },
    },
  };
};

export default getState;
