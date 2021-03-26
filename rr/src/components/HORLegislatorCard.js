import React, { useState } from "react";

function HORLegislatorCard({
  representative,
  id,
  setUserLegislators,
  userLegislators,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  //   console.log(representative.id);

  function toggleFav(e) {
    setIsFavorite(!isFavorite);
    // console.log(e);
    handleSubmit(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("fetchhhhhh", representative.id);
    fetch("http://localhost:3000/user_legislators", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: 1, legislator_id: representative.id }),
    })
      .then((r) => r.json())
      .then((data) => {
        const newUserLegislator = [...userLegislators, data];
        setUserLegislators(newUserLegislator);
      });
  }

  // const templateParams = {
  //   to_name: trip.traveler.name,
  //   to_email: trip.traveler.email,
  //   from_name: trip.owner.name,
  //   from_email: trip.owner.email,
  //   trip_name: trip.name,
  // };
  const favorite = userLegislators.find((userLegislator) => {
    return userLegislator.id === representative.id;
  });

  return (
    <div className="col-md-4">
      <div className="card">
        <img
          className="card-img-top"
          src={representative.image}
          // style={{ width: "50px", height: "auto" }}
        />
        <div className="card-body">
          <h1>
            {representative.first_name} {representative.first_name}{" "}
          </h1>
          <h2>{representative.name}</h2>
          <h4 className="card-title">District: {representative.district}</h4>
          <h5>{representative.party}</h5>
          <h7>{representative.email}</h7>
          <br></br>

          <br></br>
          {isFavorite ? (
            <button
              value={representative.id}
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

export default HORLegislatorCard;
