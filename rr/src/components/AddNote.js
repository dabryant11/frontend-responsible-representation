import React, { useState } from "react";

function AddNote({
  id,
  note,
  legislator_id,
  userLegislators,
  setUserLegislators,
}) {
  const [commentForm, setCommentForm] = useState({
    user_id: 1,
    legislator_id: "",
    content: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("could this be", id);

    // console.log("postyyyy", legislator.id);
    fetch(`http://localhost:3000/user_legislators/${legislator_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        legislator_id: legislator_id,
        notes: commentForm.content,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("office hhours", data);
        const newUserLegislator = userLegislators.map((legislator) => {
          if (legislator.id === data.id) {
            return data;
          } else {
            return legislator;
          }
        });
        setUserLegislators(newUserLegislator);
      });
    // .then((r) => r.json())
    // .then((data) => {
    //   const newComments = [...comments, data];
    //   setComments(newComments);
    //   setHiddenForm(true);
    //   setHiddenShowForm(false);
    // });
  }

  function updateFormState(e) {
    const updatedFormState = { ...commentForm };
    updatedFormState[e.target.name] = e.target.value;
    setCommentForm(updatedFormState);
    console.log(updatedFormState);
    console.log(updatedFormState.content);
    console.log(id);
    console.log(legislator_id);
    // console.log(id["legislator"]);
    console.log(e);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          {/* <label for="formGroupExampleInput">Label</label> */}
          <input
            type="text"
            name="content"
            value={commentForm.content}
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Add/edit note here..."
            onChange={updateFormState}
          />
          <button type="submit" class="btn btn-outline-secondary submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddNote;
