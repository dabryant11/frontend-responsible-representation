import React, { useEffect, useState } from "react";
// import StateAgencyCard from "./StateAgencyCard";

function StateAgency() {
  const [stateAgencies, setStateAgencies] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/state_agencies")
      .then((r) => r.json())
      .then((stateAgencies) => {
        setStateAgencies(stateAgencies);
      });
  }, []);
  // console.log(stateAgencies);

  let StateAgencies = stateAgencies.map((agency) => {
    return (
      <div className="col-md-4">
        <div className="card">
          <img
            className="card-img-top"
            src={agency.image}
            // style={{ width: "50px", height: "auto" }}
          />
          <div className="card-body">
            <h4 className="card-title">{agency.name}</h4>
            <p className="card-text"> {agency.director}</p>
            <a target="_blank" href={agency.website}>
              Website
            </a>
          </div>
        </div>
      </div>
    );
  });

  // {
  //   return (
  //     <StateAgencyCard
  //       key={agency.id}
  //       name={agency.name}
  //       website={agency.website}
  //       image={agency.image}
  //       director={agency.director}
  //     />
  //   );
  // });

  return (
    <div className="container-fluid padding">
      <h1>State Agencies</h1>
      <div className="row padding">
        {/* <h1> State Agencies</h1> */}
        {StateAgencies}
      </div>
    </div>
  );
}

export default StateAgency;
