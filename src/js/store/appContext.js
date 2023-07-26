import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    // Lo unico que vamos a modificar es nuestro useEffect
    useEffect(() => {
      // Porque es el modo en que 4geeks structura la plantilla
      state.actions.fetchRickAndMortyCharacters();

      // Lo vamos a utilizar para las cosas que queramos que carguen
      // APENAS CARGUE nuestra aplicacion.
    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
