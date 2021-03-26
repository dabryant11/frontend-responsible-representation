import React, { useState } from "react";

function SenateLegislatorCard({
  senator,
  id,
  setUserLegislators,
  userLegislators,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  //   console.log(senator.id);

  function toggleFav(e) {
    setIsFavorite(!isFavorite);
    // console.log(e);
    handleSubmit(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("fetchhhhhh", senator.id);
    fetch("http://localhost:3000/user_legislators", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: 1, legislator_id: senator.id }),
    })
      .then((r) => r.json())
      .then((data) => {
        const newUserLegislator = [...userLegislators, data];
        setUserLegislators(newUserLegislator);
      });
  }

  return (
    <div className="col-md-4">
      <div className="card">
        <img
          className="card-img-top"
          src={senator.image}
          // style={{ width: "50px", height: "auto" }}
        />
        <div className="card-body">
          <h1>
            {senator.first_name} {senator.first_name}{" "}
          </h1>
          <h2>{senator.name}</h2>
          <h4 className="card-title">District: {senator.district}</h4>
          <h5>{senator.party}</h5>
          <h7>{senator.email}</h7>
          <br></br>

          <br></br>
          {isFavorite ? (
            <button
              value={senator.id}
              onClick={toggleFav}
              className="btn btn-outline-secondary"
            >
              ★
            </button>
          ) : (
            <button onClick={toggleFav} className="btn btn-outline-secondary">
              ☆
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SenateLegislatorCard;
