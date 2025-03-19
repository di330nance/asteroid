import React, { FC, ReactNode, useState , createContext } from 'react';

import { RouterProvider } from 'react-router-dom';

export const AsteroidsContext = React.createContext(null);

type AsteroidsContextProviderProps = {
    children?: ReactNode;
};

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({
                                                                                children,
                                                                            }) => {
    const [onlyDangerous, setOnlyDangerous] = useState(false);

    const [distanceMode, setDistanceMode] = useState(true);

    const [destroyment, setDestroyment] = useState([]);

    const addAsteroid = (asteroid) => {
        setDestroyment([
            ...destroyment.filter((item) => item.id !== asteroid.id),
            asteroid,
        ]);
    };

    const deleteAsteroid = (asteroid) => {
        setDestroyment([...destroyment.filter((item) => item.id !== asteroid.id)]);
    };

    return (
        <AsteroidsContext.Provider
            value={{
              onlyDangerous,
              setOnlyDangerous,
              distanceMode,
              setDistanceMode,
              addAsteroid,
              destroyment,
            }}
        >
            {children}
        </AsteroidsContext.Provider>
    );
};