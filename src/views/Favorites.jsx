import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import ItemCard from "../components/ItemCard";

const Favorites = () => {
    const context = useContext(GlobalContext);

    return (
        <div className="container py-3">
            <h1 className="text-light text-center mb-3">Mis Favoritos</h1>
            
            {context.favorites.length === 0 ? (
                <div className="text-center text-light">
                    <h3>No tienes favoritos aún</h3>
                    <p>Agrega algunos personajes o planetas a tus favoritos</p>
                </div>
            ) : (
                <div className="row g-2">
                    {context.favorites.map((item) => (
                        <div key={item.created} className="col-3">
                            <ItemCard item={item} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites; 