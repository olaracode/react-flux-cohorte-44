import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

/**
 * Para utilizar nuestro contexto en cualquier parte de la aplicacion
 * necesitamos importar desde react el hook useContext Y
 * necesitamos importar el contexto desde appContext:
 *
 * import { useContext } from "react";
 * import { Context } from "../store/appContext";
 */

export const Home = () => {
  const { actions, store } = useContext(Context);
  actions.saluda();

  return (
    <div className="text-center mt-5">
      <h1>Bienvenido a flux {store.userProfile.username}!</h1>
      {store.characters.map((character) => {
        return <h2>{character.name}</h2>;
      })}
    </div>
  );
};
