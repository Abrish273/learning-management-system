import React, { useState } from "react";
import { Button, DialogActions, TextField } from "@material-ui/core";
import { useLocalContext } from "../../context/context";
import { v4 as uuidV4 } from "uuid";
import db from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

const Form = () => {
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [room, setRoom] = useState("");
  const [subject, setSubject] = useState("");

  const { loggedInMail, setCreateClassDialog } = useLocalContext();

  const addClass = async (e) => {
    e.preventDefault();
    const id = uuidV4();

    await setDoc(doc(db, "CreatedClass", id), {
      owner: loggedInMail,
      className: className,
      section: section,
      room: room,
      id: id,
    });
    setCreateClassDialog(false);
  };

  return (
    <div className="form">
      <p className="class__title">Create Class</p>

      <div className="form__inputs">
        <TextField
          id="filled-basic"
          label="Class Name (required)"
          className="form__input"
          variant="filled"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Section"
          className="form__input"
          variant="filled"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Subject"
          className="form__input"
          variant="filled"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Room"
          className="form__input"
          variant="filled"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <DialogActions>
        <Button onClick={addClass} color="primary">
          Create
        </Button>
      </DialogActions>
    </div>
  );
};

export default Form;

{
  /*disabled={!className} onClick={addClass}*/
}
