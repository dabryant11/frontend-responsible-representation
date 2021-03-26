import React, { useState } from "react";
import HORBillCard from "./HORBillCard";

function HORBill({ bills }) {
  const [searchQuery, setSearchQuery] = useState("");
  //   console.log(bills);
  const searchedBills = bills.filter((bill) =>
    // console.log("topppppp", bill.subject[0])
    bill.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log("midddd", searchedBills);
  return (
    <div className="container-fluid padding">
      <h1> Bills</h1>
      <div className="searchbar">
        <label htmlFor="search">Search Bills By Subject:</label>
        <input
          type="text"
          // value={search}
          id="search"
          placeholder="Type a subject..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="row padding">
        {searchedBills.map((bill) => {
          // console.log(bill);
          // const newSub = bill.subject;
          // console.log(newSub);
          // const jsxSub = newSub.slice(1, -1);
          // console.log(jsxSub);
          // const newerSub = newSub.replace("", "");
          // console.log(newerSub[0]);
          // const newestSub = jsxSub.replace("", "");
          // console.log(newestSub[0]);
          // const splat = newerSub.split(", ");
          // console.log(splat[0]);
          // const jsxsplat = newestSub.split(", ");
          // console.log(jsxsplat[0]);
          return (
            <HORBillCard
              key={bill.id}
              bill={bill}
              // bill={bills.filter((bill) =>
              //   bill.name.toLowerCase().includes(searchQuery.toLowerCase()
            />
          );
        })}
      </div>
    </div>
  );
}

export default HORBill;
