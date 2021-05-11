import React from 'react';
import '../App.css';

const Hello = (props) => {
    return(
        <div className="pageContainer">
            <div>
                <h1>{props.hello}</h1>
            </div>
        </div>
    )
}


export default Hello;