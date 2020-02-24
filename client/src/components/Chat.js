import React, {useState} from "react";
import history from "../utilities/history";

function Chat() {
    const [messages, setMessages] = useState([]);

    async function submit(event) {
        event.preventDefault();

        const message = event.target.message.value;

        try {
            await fetch(`/chat/save-message`, {
                method: "POST",
                body: JSON.stringify({
                    message
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } catch (e) {
            // IF user already exists, then ignore
        }

        const resp = await fetch(`/chat/get-messages/${chat}`);
        const json = await resp.json();

        setMessages(json);

        history.push("/rooms");
    }

    function renderMessages() {
        if (messages.length === 0) {
            return <div>There are currently no messages.</div>;
        }

        return messages.map(messages => {
            return (
                <div key={messages.id}>
                    {messages.message}
                </div>
            );
        });
    }

    return (
        <div>
            <h2>Rooms To Join</h2>
            {renderMessages()}
        </div>
    );
}