import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (item) => {
        if (!favorites.some(fav => fav.created === item.created)) {
            setFavorites([...favorites, item]);
        }
    };

    const removeFromFavorites = (item) => {
        setFavorites(favorites.filter(fav => fav.created !== item.created));
    };

    const isFavorite = (item) => {
        return favorites.some(fav => fav.created === item.created);
    };

    return (
        <GlobalContext.Provider value={{
            characters,
            setCharacters,
            planets,
            setPlanets,
            vehicles,
            setVehicles,
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite
        }}>
            {children}
        </GlobalContext.Provider>
    );
};