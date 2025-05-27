import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const { type, id } = useParams();
  const { state } = useLocation();
  const { item } = state;

  return (
    <div className="container">
      <Link to={`/`} className="btn btn-outline-warning mb-3">
        Go to Back
      </Link>

      <div className="card bg-dark text-light border-secondary">
        <div className="card-body">
          <h1 className="card-title text-warning">{item.name}</h1>
          
          {type === "people" ? (
            // Información para personajes
            <div className="mt-4">
              <h3 className="text-warning">Información del Personaje</h3>
              <ul className="list-group">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Gender: {item.gender}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Mass: {item.mass}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Birth Year: {item.birth_year}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Height: {item.height}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Eye Color: {item.eye_color}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Hair Color: {item.hair_color}
                </li>
              </ul>
            </div>
          ) : type === "planets" ? (
            // Información para planetas
            <div className="mt-4">
              <h3 className="text-warning">Información del Planeta</h3>
              <ul className="list-group">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Population: {item.population}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Diameter: {item.diameter}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Gravity: {item.gravity}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Climate: {item.climate}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Terrain: {item.terrain}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Rotation Period: {item.rotation_period}
                </li>
              </ul>
            </div>
          ) : (
            // Información para vehículos
            <div className="mt-4">
              <h3 className="text-warning">Información del Vehículo</h3>
              <ul className="list-group">
                <li className="list-group-item bg-dark text-light border-secondary">
                  Model: {item.model}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Manufacturer: {item.manufacturer}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Cost in Credits: {item.cost_in_credits}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Length: {item.length}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Crew: {item.crew}
                </li>
                <li className="list-group-item bg-dark text-light border-secondary">
                  Max Atmosphering Speed: {item.max_atmosphering_speed}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
