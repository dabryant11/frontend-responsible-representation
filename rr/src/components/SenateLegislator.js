import React from "react";
import SenateLegislatorCard from "./SenateLegislatorCard";

function SenateLegislator({ senators, setUserLegislators, userLegislators }) {
  //   console.log(senatorss);
  return (
    <div className="container-fluid padding">
      <h1>Senate Legislators</h1>
      <div className="row padding">
        {senators.map((senator) => {
          //   console.log(senator);
          return (
            <SenateLegislatorCard
              key={senator.id}
              senator={senator}
              setUserLegislators={setUserLegislators}
              userLegislators={userLegislators}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SenateLegislator;
