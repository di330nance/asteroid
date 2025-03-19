import {Header} from "../components/Header/Header";
import { useContext } from 'react';
import { AsteroidsContext } from '../components/AsteroidCard/AsteroidsContext/AsteroidsContext';

export const Destroyment = () => {

    const contextValue = useContext(AsteroidsContext)

    console.log("Destroyment",contextValue)


    return <div>
        <Header/>Destroyment page
    </div>

}