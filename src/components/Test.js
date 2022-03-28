import React from "react";

const Test = (props) => {

    return (
        <div>
            <button onClick={props.updater('toto')}>Click me</button>
        </div>
    )
}

export default Test;