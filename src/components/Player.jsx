import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);

    const [isEditing, setIsEditing] = useState(false);

    let content = <span className="player-name">{playerName}</span>;

    const nameEditHandler = () => {
        setIsEditing((editing) => !editing);
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    if (isEditing) {
        content = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return (
        <li>
            <span className="player">
                {content}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={nameEditHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}