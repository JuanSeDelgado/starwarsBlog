import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-dark text-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-warning mb-4">404</h1>
        <h2 className="h3 mb-4">These aren't the droids you're looking for...</h2>
        <div className="mb-4">
          <img 
            src="https://media.giphy.com/media/3o7TKqnN349PBUtGFG/giphy.gif" 
            alt="Obi-Wan Kenobi" 
            className="img-fluid rounded"
            style={{ maxHeight: '300px' }}
          />
        </div>
        <p className="lead mb-4">The page you're looking for has been moved to a galaxy far, far away.</p>
        <Link to="/" className="btn btn-warning btn-lg">
          Return to the Light Side
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 