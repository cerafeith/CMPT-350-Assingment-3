import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  async function fetchRooms() {
    const resp = await fetch(`/chat/all-rooms`);
    const json = await resp.json();

    setRooms(json);
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
          <Link>{room.name}</Link>
        </div>
      );
    });
  }

  return (
    <div>
      <h2>Rooms To Join</h2>
      {renderRooms()}
    </div>
  );
}

export default Rooms;
