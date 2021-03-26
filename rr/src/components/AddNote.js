import React, { useState } from "react";

function AddNote({
  id,
  note,
  onUpdateMessage,
  setHiddenShowForm,
  legislator_id,
}) {
  const [commentForm, setCommentForm] = useState({
    user_id: 1,
    legislator_id: "",
    content: "",
  });
  function handleSubmit(e) {
    // e.preventDefault();
    console.log("could this be", id);

    // console.log("postyyyy", legislator.id);
    // fetch("http://localhost:3000/user_legislators", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user_id: 1,
    //     legislator_id: id,
    //     notes: commentForm.content,
    //   }),
    // });
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
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}
export default AddNote;
