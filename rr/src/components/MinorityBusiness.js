import React, { useState } from "react";
import Piggy from "./hk.jpeg"; // with import
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MinorityBusiness({ businesses, setBusinesses }) {
  console.log("MB", businesses);
  const [minorityBusinessFormState, setMinorityBusinessFormState] = useState({
    name: "",
    address: "",
    rating: "",
    image: "",
    hours: "",
    website: "",
    twitter: "",
    ig: "",
    facebook: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/minority_businesses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(minorityBusinessFormState),
    })
      .then((r) => r.json())
      // .then(setBusinesses);
      .then((bizData) => {
        const newBusiness = [...businesses, bizData];
        setBusinesses(newBusiness);
        setMinorityBusinessFormState({
          name: "",
          address: "",
          rating: "",
          image: "",
          hours: "",
          website: "",
          twitter: "",
          ig: "",
          facebook: "",
        });
      });
  }

  function updateFormState(e) {
    const updatedFormState = { ...minorityBusinessFormState };
    updatedFormState[e.target.name] = e.target.value;
    setMinorityBusinessFormState(updatedFormState);
    // console.log(updatedFormState);
  }

  const allBusinesses = businesses.map((business) => {
    return (
      <div>
        <h1>{business.name}</h1>
        <h5>{business.address}</h5>
        <h6>hours: {business.hours}</h6>
        <h7>{business.website}</h7>
        <br></br>
        {/* <p>{business.ig}</p> */}
        <a target="_blank" href={business.ig}>
          <img
            src=" http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
            width="25"
            height="auto"
          />
        </a>
        {/* <p>{business.facebook}</p> */}
        <a target="_blank" href={business.facebook}>
          <img
            src=" https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
            width="25"
            height="auto"
          />
        </a>
      </div>
    );
  });
  return (
    <div className="center">
      {/* <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
      <img src={Piggy} />
      <h1> Add a New Minority Business</h1>
      <div className="center">
        <form onSubmit={handleSubmit}>
          {/* <input
          type="text"
          name="name"
          value={minorityBusinessFormState.name}
          placeholder="Biz name"
          onChange={updateFormState}
        /> */}
          <input
            type="text"
            name="name"
            value={minorityBusinessFormState.name}
            placeholder="biz name"
            onChange={updateFormState}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            name="address"
            value={minorityBusinessFormState.address}
            placeholder="address"
            onChange={updateFormState}
          />
          {/* <br></br> <br></br>
        <input
          type="text"
          name="rating"
          value={minorityBusinessFormState.rating}
          placeholder="biz rating"
          onChange={updateFormState}
        /> */}
          {/* <br></br> <br></br>
        <input
          type="text"
          name="image"
          value={minorityBusinessFormState.image}
          placeholder="image URL"
          onChange={updateFormState}
        /> */}
          <br></br> <br></br>
          <input
            type="text"
            name="hours"
            value={minorityBusinessFormState.hours}
            placeholder="hours"
            onChange={updateFormState}
          />
          <br></br> <br></br>
          <input
            type="text"
            name="website"
            value={minorityBusinessFormState.website}
            placeholder="website"
            onChange={updateFormState}
          />
          {/* <br></br> <br></br>
        <input
          type="text"
          name="twitter"
          value={minorityBusinessFormState.twitter}
          placeholder="twitter"
          onChange={updateFormState}
        /> */}
          <br></br> <br></br>
          <input
            type="text"
            name="ig"
            value={minorityBusinessFormState.ig}
            placeholder="ig"
            onChange={updateFormState}
          />
          <br></br> <br></br>
          <input
            type="text"
            name="facebook"
            value={minorityBusinessFormState.facebook}
            placeholder="facebook"
            onChange={updateFormState}
          />
          <br></br>
          <br></br>
          <button type="submit">Add Business</button>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      {allBusinesses}
    </div>
  );
}

export default MinorityBusiness;
