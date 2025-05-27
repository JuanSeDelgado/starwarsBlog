import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import ItemCard from "../components/ItemCard";

const Home = () => {
    const context = useContext(GlobalContext);

    const [characterToDetail, setCharacterToDetail] = useState(null);
    const [planetToDetail, setPlanetToDetail] = useState(null);
    const [activeCharIndex, setActiveCharIndex] = useState(0);
    const [activePlanetIndex, setActivePlanetIndex] = useState(0);
    const [activeVehicleIndex, setActiveVehicleIndex] = useState(0);

    const getCharacters = async () => {
        let urlCharacters = `https://swapi.py4e.com/api/people/`;
        let allCharacters = [];

        try {
            while (urlCharacters) {
                const res = await fetch(urlCharacters);
                if (!res.ok) {
                    throw new Error(`HTTP error: ${res.status}`);
                }
                const data = await res.json();
                allCharacters = [...allCharacters, ...data.results];
                urlCharacters = data.next
            }
            context.setCharacters(allCharacters);
        } catch (error) {
            console.error("Error al hacer fetch de personajes:", error.message);
        }
    }

    const getPlanets = async () => {
        let urlPlanets = `https://swapi.py4e.com/api/planets/`;
        let allPlanets = [];

        try {
            while (urlPlanets) {
                const res = await fetch(urlPlanets);
                if (!res.ok) {
                    throw new Error(`HTTP error: ${res.status}`);
                }
                const data = await res.json();
                allPlanets = [...allPlanets, ...data.results];
                urlPlanets = data.next
            }
            context.setPlanets(allPlanets);
        } catch (error) {
            console.error("Error al hacer fetch de planetas:", error.message);
        }
    }

    const getVehicles = async () => {
        let urlVehicles = `https://swapi.py4e.com/api/vehicles/`;
        let allVehicles = [];

        try {
            while (urlVehicles) {
                const res = await fetch(urlVehicles);
                if (!res.ok) {
                    throw new Error(`HTTP error: ${res.status}`);
                }
                const data = await res.json();
                allVehicles = [...allVehicles, ...data.results];
                urlVehicles = data.next
            }
            context.setVehicles(allVehicles);
        } catch (error) {
            console.error("Error al hacer fetch de vehículos:", error.message);
        }
    }

    useEffect(() => {
        console.log('useEffect triggered');
        getCharacters();
        getPlanets();
        getVehicles();
    }, []);

    const nextSlide = (type) => {
        if (type === 'characters') {
            setActiveCharIndex((prev) => 
                prev + 4 >= context.characters.length ? 0 : prev + 4
            );
        } else if (type === 'planets') {
            setActivePlanetIndex((prev) => 
                prev + 4 >= context.planets.length ? 0 : prev + 4
            );
        } else {
            setActiveVehicleIndex((prev) => 
                prev + 4 >= context.vehicles.length ? 0 : prev + 4
            );
        }
    };

    const prevSlide = (type) => {
        if (type === 'characters') {
            setActiveCharIndex((prev) => 
                prev - 4 < 0 ? Math.max(0, context.characters.length - 4) : prev - 4
            );
        } else if (type === 'planets') {
            setActivePlanetIndex((prev) => 
                prev - 4 < 0 ? Math.max(0, context.planets.length - 4) : prev - 4
            );
        } else {
            setActiveVehicleIndex((prev) => 
                prev - 4 < 0 ? Math.max(0, context.vehicles.length - 4) : prev - 4
            );
        }
    };

    return (
        <div className="container py-3">
            {/* Characters Carousel */}
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h2 className="text-light mb-0">Personajes</h2>
                    <div>
                        <button 
                            className="btn btn-sm btn-outline-light me-2"
                            onClick={() => prevSlide('characters')}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            className="btn btn-sm btn-outline-light"
                            onClick={() => nextSlide('characters')}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div className="row g-2">
                    {context.characters
                        .slice(activeCharIndex, activeCharIndex + 4)
                        .map((character) => (
                            <div key={character.created} className="col-3">
                                <ItemCard item={character} />
                            </div>
                        ))}
                </div>
            </div>

            {/* Planets Carousel */}
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h2 className="text-light mb-0">Planetas</h2>
                    <div>
                        <button 
                            className="btn btn-sm btn-outline-light me-2"
                            onClick={() => prevSlide('planets')}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            className="btn btn-sm btn-outline-light"
                            onClick={() => nextSlide('planets')}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div className="row g-2">
                    {context.planets
                        .slice(activePlanetIndex, activePlanetIndex + 4)
                        .map((planet) => (
                            <div key={planet.created} className="col-3">
                                <ItemCard item={planet} />
                            </div>
                        ))}
                </div>
            </div>

            {/* Vehicles Carousel */}
            <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h2 className="text-light mb-0">Vehículos</h2>
                    <div>
                        <button 
                            className="btn btn-sm btn-outline-light me-2"
                            onClick={() => prevSlide('vehicles')}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            className="btn btn-sm btn-outline-light"
                            onClick={() => nextSlide('vehicles')}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div className="row g-2">
                    {context.vehicles
                        .slice(activeVehicleIndex, activeVehicleIndex + 4)
                        .map((vehicle) => (
                            <div key={vehicle.created} className="col-3">
                                <ItemCard item={vehicle} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
