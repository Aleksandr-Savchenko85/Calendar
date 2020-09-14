import React from 'react'

const Lines = () => {
    let arrLines = [];
    for (let i = 0; i < 25; i++) {
        arrLines.push(<div id="1" className="lines__line" key={i}></div>)

    }
    return (
        <div className="lines">
            {arrLines}
        </div>

    )
};

export default Lines;