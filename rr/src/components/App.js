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
import HORBill from "./HORBill";
import HORCommittee from "./HORCommittee.js";
import Senate from "./Senate";
import SenateCommittee from "./SenateCommittee";
import SenateLegislator from "./SenateLegislator";
import StateAgency from "./StateAgency";
import StateBudget from "./StateBudget";
import Chambers from "./Chambers";
import MinorityBusiness from "./MinorityBusiness";

function App() {
  const [legislators, setLegislators] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [userLegislators, setUserLegislators] = useState([]);
  const [bills, setBills] = useState([]);
  const [committees, setCommittees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user_legislators")
      .then((r) => r.json())
      .then((data) => setUserLegislators(data));
    // .then((data) => (data));
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

  useEffect(() => {
    fetch("http://localhost:3000/bills")
      .then((r) => r.json())
      .then((bills) => {
        setBills(bills);
      });
  }, []);
  // console.log("aghhhhhhh", legislators);

  useEffect(() => {
    fetch("http://localhost:3000/committees")
      .then((r) => r.json())
      .then((committees) => {
        setCommittees(committees);
      });
  }, []);

  const senateCommittees = committees.filter(
    (committee) => committee.chamber === "Senate"
  );
  const houseOfRepresentativesCommittees = committees.filter(
    (committee) => committee.chamber === "House of Representatives"
  );
  // console.log(houseOfRepresentativesCommittees);
  const senators = legislators.filter(
    (legislator) => legislator.title === "Senator"
  );

  const representatives = legislators.filter(
    (legislator) => legislator.title === "Representative"
  );
  // console.log("hello", userLegislators);
  // const favLegislators = userLegislators.filter((legislator) =>
  //   legislator.includes(legislators)
  // );

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
          <HOR representatives={representatives} bills={bills} />
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
        {/* <Link to={`/HOR/bills`}> Bills</Link> */}
        <Route exact path="/HOR/bills">
          <HORBill bills={bills} />
        </Route>
        <Route exact path="/HOR/committees">
          <HORCommittee committees={houseOfRepresentativesCommittees} />
        </Route>
        <Route exact path="/senate/committees">
          <SenateCommittee committees={senateCommittees} />
        </Route>
        <Route exact path="/HOR/legislators">
          <HORLegislator
            representatives={representatives}
            setUserLegislators={setUserLegislators}
            userLegislators={userLegislators}
          />
        </Route>
        <Route exact path="/senate/legislators">
          <SenateLegislator
            senators={senators}
            setUserLegislators={setUserLegislators}
            userLegislators={userLegislators}
          />
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
