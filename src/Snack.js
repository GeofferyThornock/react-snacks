import React from "react";

function Snack({ name }) {
    const pStyle = {
        fontFamily: "Zen Dots, cursive",
    };

    const list = name.map((i, index) => (
        <li key={index} className="list-group-items">
            <img
                alt="this is the product named"
                src={i.imageUrl}
                style={{ width: 100 }}
            ></img>
            <p style={pStyle}>{i.name}</p>
        </li>
    ));
    return <ul className="list-group ">{list}</ul>;
}

export default Snack;
