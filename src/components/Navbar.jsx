import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

const Navbar = () => {
    const context = useContext(GlobalContext);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Star Wars Blog</Link>
                
                <div className="dropdown">
                    <button 
                        className="btn btn-outline-warning dropdown-toggle" 
                        type="button" 
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <i className="fas fa-heart me-1"></i>
                        Favoritos ({context.favorites.length})
                    </button>
                    {showDropdown && (
                        <div 
                            className="dropdown-menu dropdown-menu-dark p-3 show" 
                            style={{
                                width: '300px',
                                position: 'absolute',
                                right: 0,
                                marginTop: '0.5rem'
                            }}
                        >
                            {context.favorites.length === 0 ? (
                                <div className="text-light text-center">
                                    <p className="mb-0">No hay favoritos</p>
                                </div>
                            ) : (
                                <div className="favorites-list">
                                    {context.favorites.map((item) => (
                                        <div key={item.created} className="mb-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-0 text-warning">{item.name}</h6>
                                                    <small className="text-light">
                                                        {item.gender ? 'Personaje' : 'Planeta'}
                                                    </small>
                                                </div>
                                                <button 
                                                    className="btn btn-sm btn-outline-danger ms-2"
                                                    onClick={() => context.removeFromFavorites(item)}
                                                >
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="text-center mt-2">
                                        <Link 
                                            to="/favorites" 
                                            className="btn btn-sm btn-warning"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            <i className="fas fa-list me-1"></i>
                                            Ver todos los favoritos
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 