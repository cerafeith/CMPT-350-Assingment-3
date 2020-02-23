import React from "react";
import history from '../utilities/history';

function SetUsername({ setProfile }) {
  async function submit(event) {
    event.preventDefault();

    const username = event.target.username.value;

    const resp = await fetch(`/chat/get-user/${username}`);
    const json = await resp.json();

    setProfile(json);

    history.push("/rooms")
  }

  return (
    <div>
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

export default SetUsername;
