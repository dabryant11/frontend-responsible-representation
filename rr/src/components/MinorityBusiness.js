import React, { useState } from "react";

function MinorityBusiness({ businesses, setBusinesses }) {
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
        const newBusinesses = [...businesses, bizData];
        setBusinesses(newBusinesses);
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
    return <h1>{business.name}</h1>;
  });
  return (
    <div className="new-plant-form">
      <h1> New Minority Businesses</h1>;
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={minorityBusinessFormState.name}
          placeholder="Biz name"
          onChange={updateFormState}
        />
        <input
          type="text"
          name="address"
          value={minorityBusinessFormState.address}
          placeholder="Address"
          onChange={updateFormState}
        />
        <input
          type="text"
          name="rating"
          value={minorityBusinessFormState.rating}
          placeholder="Biz rating"
          onChange={updateFormState}
        />
        <input
          type="text"
          name="image"
          value={minorityBusinessFormState.image}
          placeholder="Image URL"
          onChange={updateFormState}
        />
        <input
          type="text"
          name="hours"
          value={minorityBusinessFormState.hours}
          placeholder="hours"
          onChange={updateFormState}
        />
        <input
          type="text"
          name="website"
          value={minorityBusinessFormState.website}
          placeholder="website"
          onChange={updateFormState}
        />
        <input
          type="text"
          name="twitter"
          value={minorityBusinessFormState.twitter}
          placeholder="twitter"
          onChange={updateFormState}
        />
        <input
          type="text"
          name="ig"
          value={minorityBusinessFormState.ig}
          placeholder="ig"
          onChange={updateFormState}
        />
        <input
          type="text"
          name="facebook"
          value={minorityBusinessFormState.facebook}
          placeholder="facebook"
          onChange={updateFormState}
        />

        <button type="submit">Add Business</button>
      </form>
      {allBusinesses}
    </div>
  );
}

export default MinorityBusiness;
