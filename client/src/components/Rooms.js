import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  async function fetchRooms() {
    const resp = await fetch(`/chat/all-rooms`);
    const json = await resp.json();

    setRooms(json);
  }

  async function submit(event) {
    event.preventDefault();

    const name = event.target.name.value;

    try {
      await fetch(`/chat/save-room`, {
        method: "POST",
        body: JSON.stringify({
          name
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (e) {
      // IF room already exists, then ignore
    }
    await fetchRooms();
  }

  useEffect(() => {
    fetchRooms();
  }, []);

  function renderRooms() {
    if (rooms.length === 0) {
      return <div>There are currently no rooms</div>;
    }

    return rooms.map(room => {
      return (
        <div key={room.id}>
          <Link to={`/rooms/${room.id}`}>{room.name}</Link>
        </div>
      );
    });
  }

  return (
    <div>
      <h2>Rooms To Join</h2>
      {renderRooms()}
      <form onSubmit={submit}>
        <div>
          <label>New Chatroom: </label>
          <input type="text" name="name" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Rooms;
