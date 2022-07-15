import React, { useEffect, useState } from "react";

function Homes() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      {players?.map((p) => {
        return (
          <div key={p._id} className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={p.img}
                className="max-w-sm w-full h-80 rounded-lg shadow-2xl"
              />
              <div className="ml-20">
                <h1 className="text-5xl font-bold">{p.name}</h1>
                <p className="py-6">{p.pera}</p>
                <button className="text-red-600">Read More...</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Homes;
