import React from "react";
import Budget from "./0001.jpg"; // with import

function StateBudget() {
  return (
    <div className="center">
      <h1> State Budgets</h1>
      <img src={Budget} width="900" height="auto" />
    </div>
  );
}

export default StateBudget;
