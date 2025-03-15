import { Header } from '../components/header/Header';
import { useContext } from 'react';
import {
  AsteroidsContext,
  AsteroidsContextProvider,
} from '../components/asteroids_context/AsteroidsContext';
import {AsteroidCard} from "../components/asteroidCard/AsteroidCard";

export const Destroyment = () => {
  const contextValue = useContext(AsteroidsContext);

  console.log('Destroyment |', contextValue);

  const {destroyment} = useContext(AsteroidsContext);
  return (
    <div>
      <Header />
        {destroyment.map(item => <AsteroidCard key = {item.id} {...item} />)}
    </div>
  );
};
