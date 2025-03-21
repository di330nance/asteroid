import {Header} from "../components/Header/Header";
import { useContext } from 'react';
import { AsteroidsContext } from '../components/AsteroidCard/AsteroidContext/AsteroidsContext';
import { Asteroids } from './Asteroids';
import { AsteroidCard } from '../components/AsteroidCard/AsteroidCard';

export const Destroyment = () => {

    const contextValue = useContext(AsteroidsContext)
    const {destroyment} = useContext(AsteroidsContext)



    return <div>
        <Header/>
        {destroyment.map(item=><AsteroidCard key={item.id}{...item}/>)}
    </div>

}