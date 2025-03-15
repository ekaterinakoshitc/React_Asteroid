import {Header} from "../components/header/Header";
import { useContext } from "react";
import {AsteroidsContext, AsteroidsContextProvider} from "../components/asteroids_context/AsteroidsContext";



export const Destroyment = () => {
    const contextValue = useContext(AsteroidsContext);

    console.log('Destroyment |', contextValue);

    return (
        <div>
            <Header />
            Destroyment page
        </div>
    );
};