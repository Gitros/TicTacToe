import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    let content = <span className="player-name">{name}</span>;

    const nameEditHandler = () => {
        setIsEditing(!isEditing);
    }
    if (isEditing) {
        content = <input type="text" required value={name} />;
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