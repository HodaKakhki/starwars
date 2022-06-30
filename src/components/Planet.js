import React from "react";

export const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3>Planet</h3>
      <p>Population-{planet.population}</p>
      <p>Terrain-{planet.terrain}</p>
    </div>
  );
};
