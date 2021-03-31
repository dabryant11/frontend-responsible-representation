import React, { useState } from "react";
import money from "./money.png"; // with import

function CampaignFinance({ finances }) {
  // const [sortBy, setSortBy] = useState("");

  // const sortedListings = finances.sort((listing1, listing2) => {
  //   if (!sortBy) {
  //     return 0;
  //   } else {
  //     console.log(listing1);
  //     return listing1[sortBy].localeCompare(listing2[sortBy]);
  //   }
  // });

  const followDaMoney = finances.map((finance) => {
    return (
      <div>
        <div className="row welcome text-center">
          <div className="col-12">
            <div className="card">
              <h2>{finance.name}</h2>
              <h2>{finance.district}</h2>
              <h2>{finance.num_of_donors} Donors</h2>
              <h2>${finance.total_contribtuions}</h2>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  });

  function sortListings(e) {
    // setSortBy(e.target.value);
  }
  return (
    <div>
      <div className="row welcome text-center">
        <div className="col-12">
          <h1> Campaign Finances</h1>
          <img src={money} />

          <br></br>
          <select onChange={sortListings}>
            <option select hidden>
              Sort By
            </option>
            <option value="finance.num_of_donors"> Donors</option>
            <option value="finance.total_contribtuions"> Contributions</option>
            {/* <option value="price"> price</option> */}
          </select>
          {followDaMoney}
        </div>
      </div>
    </div>
  );
}

export default CampaignFinance;
