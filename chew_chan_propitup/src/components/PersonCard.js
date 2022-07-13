import React from "react";

const PersonCard = (props) => {
    const {firstName, lastName,age,hairColor} = props;
    return(
        <div className ="container">
            <h1 className="title">{lastName}, {firstName} </h1>
            <h4 className="list">Age: {age}</h4>
            <h4 className="list">Hair Color: {hairColor}</h4>
        </div>
    );
}

export default PersonCard;