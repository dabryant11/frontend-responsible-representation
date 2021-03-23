import React from "react";
import HORLegislatorCard from "./HORLegislatorCard";

function HORLegislator({ representatives }) {
  //   console.log(representatives);
  return (
    <div className="container-fluid padding">
      <h1>HOR Legislators</h1>
      <div className="row padding">
        {representatives.map((representative) => {
          //   console.log(representative);
          return (
            <HORLegislatorCard
              key={representative.id}
              representative={representative}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HORLegislator;
