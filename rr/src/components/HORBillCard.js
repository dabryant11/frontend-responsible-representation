import React, { useState } from "react";

function HORBillCard({ bill, id }) {
  //   const [isFavorite, setIsFavorite] = useState(false);
  //   console.log(bill.id);

  //   function toggleFav(e) {
  //     setIsFavorite(!isFavorite);
  //     // console.log(e);
  //     handleSubmit(e);
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     console.log("fetchhhhhh", bill.id);
  //     fetch("http://localhost:3000/user_Bills", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ user_id: 1, Bill_id: bill.id }),
  //     })
  //       .then((r) => r.json())
  //       .then((data) => console.log(data));
  //   }

  const newSub = bill.subject.slice(1, -1);
  console.log(newSub);
  const newerSub = newSub.replace(/[',"]+/g, "");
  console.log("yoooooo", newerSub[0]);
  const splat = newSub.split(", ");
  console.log("hahahah", splat);
  const subjectLi = splat.map((sub) => {
    return <li>{sub}</li>;
  });
  // console.log(bill.bill_number);
  return (
    <div className="col-md-4">
      <div className="card">
        {/* <img
          className="card-img-top"
          src={bill.image}
          // style={{ width: "50px", height: "auto" }}
        /> */}
        <div className="card-body">
          {/* <h1>
            {bill.first_name} {bill.first_name}{" "}
          </h1> */}
          <h2>{bill.bill_number}</h2>
          {/* <h4 className="card-title">District: {bill.district}</h4> */}
          <h5>{bill.title}</h5>
          {/* <h5>{bill.subject}</h5> */}
          <ul>{subjectLi}</ul>
          <h7>{bill.status}</h7>
          <br></br>
          <br></br>
          {/* {isFavorite ? (
            <button
              value={bill.id}
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
}

export default HORBillCard;
