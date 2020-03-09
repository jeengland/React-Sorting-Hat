import React from 'react';

const Results = (props) => {
    const wizardNumber = props.wizardNumber;
    if (wizardNumber === Math.floor(Math.random() * 11) + 6) {
        return (
            <h1>You got Hufflepuff!</h1>
        )
    } else if (wizardNumber === 8) {
        return (
            <h1>You got Gryffindor!</h1>
        )
    } else if (wizardNumber === 13) {
        return (
            <h1>You got Ravenclaw!</h1>
        )
    } else {
        return (
            <h1>You got Slytherin!</h1>
        )
    }
}

export default Results;