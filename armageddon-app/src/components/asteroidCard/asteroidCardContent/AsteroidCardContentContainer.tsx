
import {useContext} from "react";
import {AsteroidsContext} from "../../asteroids_context/AsteroidsContext";
import {AsteroidCardContent} from "./AsteroidCardContent";


export const AsteroidCardContentContainer = (props) =>{
    const {selectedDistance} = useContext(AsteroidsContext);
    return <AsteroidCardContent {...props} selectedDistance={selectedDistance} />
}