import React from "react";

function UserLegislator({ userLegislators }) {
  // console.log(userLegislators[0].id);
  // console.log(userLegislators[1]);
  // console.log(userLegislators[2].id);
  // console.log(userLegislators[0].legislator);
  // console.log(userLegislators[0].legislator.name);
  // const mapLegislators = userLegislators[0];

  function handleDeleteClick(e) {
    console.log(e);
    console.log(e.target.parentNode);
    console.log(e.target);
    // console.log(e.target.__reactProps$ts7i81b1slc);
    // const requestOptions = {
    //   method: "DELETE",
    // };
    // fetch(`http://localhost:3000/user_legislators/${id}`, requestOptions);
    // setComments(comments.filter((fav) => comment.id !== id));
  }

  const favLegislators = userLegislators.map((legislator) => {
    // return <h1>{legislator.legislator.name}</h1>;
    return (
      <div className="col-md-4">
        <div className="card">
          <img
            className="card-img-top"
            src={legislator.legislator.image}
            // style={{ width: "50px", height: "auto" }}
          />
          <div value={legislator.id} className="card-body">
            <h1>{legislator.legislator.name}</h1>
            {/* <h2>{representative.name}</h2> */}
            <h4 className="card-title">
              District: {legislator.legislator.district}
            </h4>
            <h5>{legislator.legislator.party}</h5>
            <h7>{legislator.legislator.email}</h7>
            <br></br>
            <button
              className="btn btn-outline-secondary"
              onClick={handleDeleteClick}
            >
              <span role="img" value={legislator.id} aria-label="delete">
                🗑
              </span>
            </button>
            {/* {isFavorite ? (
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
            )} */}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container-fluid padding">
      {/* <h1>HOR Legislators</h1> */}
      <div className="row padding"></div>
      <div>
        <h1> User Legislators</h1>
        {favLegislators}
      </div>
    </div>
  );
}

export default UserLegislator;
