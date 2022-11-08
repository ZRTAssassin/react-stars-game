import React from "react";

function StarsDisplay(props) {
    return (
        props.num.map((starId) => (
            <div key={starId} className="star" />
          ))
    )
}

export default StarsDisplay;
