import React, { useState } from 'react'

import './count.css'

function Count(props) {

    // Start with a count of 0
    const [count, totalCount] = useState(0);

    // click increase or decrease
    const increase = () => {
        totalCount(prevCount => prevCount + 1);
    };

    return (
        <div >
            <div className="counter">
                <h2>Counter</h2>
                <p>The number is <span className="count">{count}</span></p>
                <button onClick={increase}>Increase</button>
                <button onClick={() => totalCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Count