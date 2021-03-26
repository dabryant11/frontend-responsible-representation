import React, { useState } from "react";
import EditNote from "./EditNote";
import AddNote from "./AddNote";

function UserLegislator({ userLegislators, setUserLegislators }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [hiddenForm, setHiddenForm] = useState(true);

  // const [commentForm, setCommentForm] = useState({
  //   user_id: 1,
  //   legislator_id: "",
  //   content: "",
  // });

  // console.log(userLegislators[0].id);
  // console.log(userLegislators[1]);
  // console.log(userLegislators[2].id);
  // console.log(userLegislators[0].legislator);
  // console.log(userLegislators[0].legislator.name);
  // const mapLegislators = userLegislators[0];

  function handleDeleteClick(id) {
    console.log("maybe", id);
    // console.log(e);
    // console.log(e.target.attributes[1].nodeValue);
    // console.log("yooooo", legislator);
    // console.log(e.target.parentNode);
    // console.log(e.target);
    // console.log(e.target.value);
    // console.log(e.value);
    // console.log(e.target.__reactProps$ts7i81b1slc);
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/user_legislator/${id}`, requestOptions);
    setUserLegislators(
      userLegislators.filter((legislator) => legislator.id !== id)
    );
  }

  // function handleSubmit(id) {
  //   // e.preventDefault();
  //   console.log("um", commentForm.content);

  //   // console.log("postyyyy", legislator.id);
  //   fetch("http://localhost:3000/user_legislators", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       user_id: 1,
  //       legislator_id: 1,
  //       notes: commentForm.content,
  //     }),
  //   });
  //   // .then((r) => r.json())
  //   // .then((data) => {
  //   //   const newComments = [...comments, data];
  //   //   setComments(newComments);
  //   //   setHiddenForm(true);
  //   //   setHiddenShowForm(false);
  //   // });
  // }

  // function updateFormState(e) {
  //   const updatedFormState = { ...commentForm };
  //   updatedFormState[e.target.name] = e.target.value;
  //   setCommentForm(updatedFormState);
  //   console.log(updatedFormState);
  // }

  function hideForm() {
    setHiddenForm(!hiddenForm);
  }

  // console.log("fiddy", userLegislators);
  const favLegislators = userLegislators.map((legislator) => {
    // return <h1>{legislator.legislator.name}</h1>;
    // console.log("hasssssss", legislator.id);
    return (
      <div className="col-md-4">
        <div className="card" data-id={legislator.id}>
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
            {/* <form onSubmit={handleSubmit(legislator.id)}>
              <div class="form-group">
                <label for="formGroupExampleInput">Add a Note</label>
                <input
                  type="text"
                  name="content"
                  value={commentForm.content}
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Add a note..."
                  onChange={updateFormState}
                />
                <button type="submit" class="btn btn-outline-secondary submit">
                  Submit
                </button>
              </div>
            </form> */}
            {/* {isAdding ? (
              <AddNote
                key={legislator.id}
                id={legislator.id}
                legislator_id={legislator.legislator.id}
                note={legislator.notes}
              />
            ) : ( */}
            {/* // <p>why not add?</p> */}
            <br></br>
            <button onClick={hideForm} className="btn btn-outline-secondary">
              {hiddenForm ? "Add/edit note" : "Nah nevermind"}
            </button>
            {hiddenForm ? null : (
              <AddNote
                key={legislator.id}
                id={legislator.id}
                legislator_id={legislator.legislator.id}
                note={legislator.notes}
                setHiddenForm={setHiddenForm}
                userLegislators={userLegislators}
                setUserLegislators={setUserLegislators}
              />
              // <NewCommentForm
              //   site={site}
              //   setComments={setComments}
              //   comments={comments}
              //   setHiddenForm={setHiddenForm}
              //   setHiddenShowForm={setHiddenShowForm}
              // />
            )}
            <h6>{legislator.notes}</h6>

            {/* {isEditing ? (
              <EditNote
                // onUpdateMessage={handleUpdateMessage}
                key={legislator.id}
                id={legislator.id}
                legislator_id={legislator.legislator.id}
                note={legislator.notes}
              />
            ) : (
              // <p>yooooooo</p>
              // <p>edittttt</p>
              <h6>{legislator.notes}</h6>
            )}
            <button
              className="btn btn-outline-secondary"
              onClick={() => setIsEditing((isEditing) => !isEditing)}
            >
              <span role="img" aria-label="edit">
                ✏️
              </span>
            </button> */}
            {/* <h6>{legislator.notes}</h6> */}
            <br></br>
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                handleDeleteClick(legislator.id);
              }}
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
