import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Planet } from "./Planet";

const fetchPlanets = async (page) => {
  const res = await axios.get(`http://swapi.dev/api/planets/?page=${page}`);
  return res;
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, latestData, status } = useQuery(
    "planet",
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );
  console.log(page);
  return (
    <div>
      <h2>Planets</h2>

      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            // disabled={page === 1}
          >
            Previous Page
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              setPage((old) =>
                !latestData || !latestData.next ? old : old + 1
              )
            }
            // disabled={!latestData || !latestData.next}
          >
            Next page
          </button>

          <div>
            {data.data.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
