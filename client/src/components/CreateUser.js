import React from "react";
import history from "../utilities/history";

function CreateUser({ setProfile }) {
  async function submit(event) {
    event.preventDefault();

    const username = event.target.username.value;

    try {
      await fetch(`/chat/save-user`, {
        method: "POST",
        body: JSON.stringify({
          username
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (e) {
      // IF user already exists, then ignore
    }

    const resp = await fetch(`/chat/get-user/${username}`);
    const json = await resp.json();

    setProfile(json);

    history.push("/rooms");
  }

  return (
    <div>
      <h2>Create A Profile</h2>
      <form onSubmit={submit}>
        <div>
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateUser;
