import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    let content = <span className="player-name">{name}</span>

    const nameEditHandler = () => {
        setIsEditing(true);
    }
    if (isEditing === true) {
        content = <input type="text" />
    }

    return (
        <li>
            <span className="player">
                {content}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={nameEditHandler}>Edit</button>
        </li>
    );
}