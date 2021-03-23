import "./App.css";

import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import Activism from "./Activism";
import UserLegislator from "./UserLegislator";
import HOR from "./HOR";
import HORLegislator from "./HORLegislator";
import Senate from "./Senate";
import StateAgency from "./StateAgency";
import StateBudget from "./StateBudget";
import Chambers from "./Chambers";
import MinorityBusiness from "./MinorityBusiness";

function App() {
  const [legislators, setLegislators] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [userLegislators, setUserLegislators] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user_legislators")
      .then((r) => r.json())
      .then((data) => setUserLegislators(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/minority_businesses")
      .then((r) => r.json())
      .then((data) => setBusinesses(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/legislators")
      .then((r) => r.json())
      .then((legislators) => {
        setLegislators(legislators);
      });
  }, []);

  // console.log("aghhhhhhh", legislators);

  const senators = legislators.filter(
    (legislator) => legislator.title === "Senator"
  );

  const representatives = legislators.filter(
    (legislator) => legislator.title === "Representative"
  );

  return (
    <div className="app">
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Complete Bootstrap 4 Website Layout</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link href="style.css" rel="stylesheet" />
      </div>
      <Header />

      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/activism">
          <Activism />
        </Route>
        <Route exact path="/HOR">
          <HOR representatives={representatives} />
        </Route>
        <Route exact path="/senate">
          <Senate senators={senators} />
        </Route>
        <Route exact path="/state_agencies">
          <StateAgency />
        </Route>
        <Route exact path="/state_budgets">
          <StateBudget />
        </Route>
        <Route exact path="/user_legislators">
          <UserLegislator
            userLegislators={userLegislators}
            setUserLegislators={setUserLegislators}
          />
        </Route>
        <Route exact path="/minority_businesses">
          <MinorityBusiness
            businesses={businesses}
            setBusinesses={setBusinesses}
          />
        </Route>
        <Route exact path="/HOR/legislators">
          <HORLegislator representatives={representatives} />
        </Route>
        <Route exact path="/chambers">
          <Chambers
            senators={senators}
            representatives={representatives}
            legislators={legislators}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
