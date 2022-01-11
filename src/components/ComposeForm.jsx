import { useState } from "react";
import Avatar from "./Avatar";
import "./ComposeForm.css";

function ComposeForm() {
  // As we've seen before, useState() returns an array
  // of [getter, setter] that we can name as we want.
  // We set the initial value of editorValue to an empty string.
  const [editorValue, setEditorValue] = useState("");

  // Before we return anything, we log the current value
  console.log(editorValue);

  // We define a handler for the onChange event of our textarea
  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value);
  };

  return (
    <form className="compose-form">
      <div className="compose-form-container">
        <Avatar />
        <textarea
          value={editorValue}
          onChange={handleEditorValueChange}
          className="compose-form-textarea"
          placeholder="What's happening?"
        />
      </div>
      <button className="compose-form-submit">Tweet</button>
    </form>
  );
}

export default ComposeForm;
