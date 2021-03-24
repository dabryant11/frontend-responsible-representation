import React, { useState } from "react";

function EditNote({
  id,
  note,
  onUpdateMessage,
  setHiddenShowForm,
  legislator_id,
}) {
  const [messageBody, setMessageBody] = useState(note);

  function handleFormSubmit(e) {
    console.log("edittttt", id);
    e.preventDefault();

    // const data = {
    //   messageBody,
    // };
    // console.log("DDDDddddddd", messageBody);
    // console.log("subbbb", id);
    // console.log("leggggg", legislator_id);

    fetch(`http://localhost:3000/user_legislator/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        legislator_id: legislator_id,
        notes: messageBody,
      }),
    }).then((r) => r.json());
    //   .then((data) => onUpdateMessage(data));
    // setHiddenShowForm(true);
  }

  function handleUpdateMessage(updatedCommentObj) {
    // const updatedComments = comments.map((comment) => {
    //   if (comment.id === updatedCommentObj.id) {
    //     return updatedCommentObj;
    //   } else {
    //     return comment;
    //   }
    // });
    // setComments(updatedComments);
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="content"
        autoComplete="off"
        value={messageBody}
        class="form-control"
        id="formGroupExampleInput"
        onChange={(e) => setMessageBody(e.target.value)}
      />
      <input class="btn btn-outline-secondary" type="submit" value="Save" />
    </form>
  );
}

export default EditNote;
