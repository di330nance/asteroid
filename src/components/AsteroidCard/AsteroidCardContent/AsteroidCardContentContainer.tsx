import { useContext } from 'react';
import { AsteroidsContext } from '../AsteroidsContext/AsteroidsContext';
import { AsteroidCardContent } from './AsteroidCardContent';

export const  AsteroidCardContentContainer = (props)=>{
  const {distanceMode} = useContext(AsteroidsContext);
  return <AsteroidCardContent{...props} distanceMode={distanceMode}/>
}