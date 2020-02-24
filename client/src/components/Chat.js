import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Chat({ profile }) {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  async function fetchMessages() {
    const resp = await fetch(`/chat/get-messages/${id}`);
    const json = await resp.json();

    setMessages(json);
  }

  async function submit(event) {
    event.preventDefault();

    const message = event.target.message.value;

    await fetch(`/chat/save-message`, {
      method: "POST",
      body: JSON.stringify({
        message,
        room: { id },
        user: { id: profile.id }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const form = document.getElementById("form");
    form.reset();
    await fetchMessages();
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  console.log(messages);

  function renderMessages() {
    if (messages.length === 0) {
      return <div>There are currently no messages.</div>;
    }

    return messages.map(messages => {
      return (
        <div key={messages.id}>
          {messages.user.username}: {messages.message}
        </div>
      );
    });
  }

  return (
    <div>
      <h2>Messages</h2>
      {renderMessages()}
      <form id="form" onSubmit={submit}>
        <div>
          <input type="text" name="message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Chat;
