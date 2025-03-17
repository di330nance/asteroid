import React from "react";

export function Button() {
    const test = "test";

    const handleClick = () => {
        console.log("click", test);
    };

    return <button onClick={handleClick}>Just button</button>;
}
