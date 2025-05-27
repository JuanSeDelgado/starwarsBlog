import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const ItemCard = (props) => {
    const context = useContext(GlobalContext);
    const isFavorite = context.isFavorite(props.item);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            context.removeFromFavorites(props.item);
        } else {
            context.addToFavorites(props.item);
        }
    };

    const renderItemDetails = () => {
        if (props.item.gender) {
            return (
                <>
                    <div className="text-light">Gender: {props.item.gender}</div>
                    <div className="text-light">Mass: {props.item.mass}</div>
                    <div className="text-light">DOB: {props.item.birth_year}</div>
                </>
            );
        } else if (props.item.gravity) {
            return (
                <>
                    <div className="text-light">Gravity: {props.item.gravity}</div>
                    <div className="text-light">Diameter: {props.item.diameter}</div>
                    <div className="text-light">Population: {props.item.population}</div>
                </>
            );
        } else {
            return (
                <>
                    <div className="text-light">Model: {props.item.model}</div>
                    <div className="text-light">Manufacturer: {props.item.manufacturer}</div>
                    <div className="text-light">Crew: {props.item.crew}</div>
                </>
            );
        }
    };

    return (
        <div className="mt-3">
            <div className="card bg-dark text-light border-secondary" style={{width:'18rem'}}>
                {props.item.image_url ? (
                    <img src={props.item.image_url} alt={props.item.name} className="card-img-top" />
                ) : null}
                <div className="card-body">
                    <h5 className="card-title text-warning">{props.item.name}</h5>
                    <div className="card-text">
                        {renderItemDetails()}
                    </div>
                    <button 
                        className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-outline-danger'} position-absolute top-0 end-0 m-2`}
                        onClick={handleFavoriteClick}
                    >
                        <i className={`fas fa-heart ${isFavorite ? 'text-white' : ''}`}></i>
                    </button>
                    <Link 
                        to={`/${props.item.url.split('/')[4]}/${props.item.url.split('/')[5]}`} 
                        state={{ item: props.item }}
                        className="btn btn-outline-warning"
                    >
                        Go to detail
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;