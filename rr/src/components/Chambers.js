import React from "react";
import { Link } from "react-router-dom";

function Chambers({ senators, legislators }) {
  //   console.log("chammmm", legislators);

  //   const senators = legislators.filter(
  //     (legislator) => legislator.title === "Senator"
  //   );

  //   const representatives = legislators.filter(
  //     (legislator) => legislator.title === "Representative"
  //   );

  //   console.log(representatives);
  //   console.log(senators);

  return (
    <div className="container-fluid padding">
      <h1> Chambers</h1>
      <div className="row padding">
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Seal_of_the_Ohio_Senate.svg/1200px-Seal_of_the_Ohio_Senate.svg.png"
              // style={{ width: "400px", height: "auto", margin-left: auto,
              // margin-right: auto }}
            />
            {/* <img className="card-img-top" src="img/team1.png" /> */}
            <a href="#" className="btn btn-outline-secondary">
              {/* <Link to={`/sites/electronics`}> See Drop-Off Sites</Link> */}
              <Link to="/senate">Senate</Link>
            </a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Seal_of_the_Ohio_House_of_Representatives.svg/1200px-Seal_of_the_Ohio_House_of_Representatives.svg.png"
              // style={{ width: "400px", height: "auto", margin-left: auto,
              // margin-right: auto }}
            />
            {/* <img className="card-img-top" src="img/team3.png" /> */}
            <a href="#" className="btn btn-outline-secondary">
              {/* <Link to={`/sites/electronics`}> See Drop-Off Sites</Link> */}
              <Link to="/HOR">House of Representatives</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chambers;
