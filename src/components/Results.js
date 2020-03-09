import React from 'react';

import History from './History';

const Results = (props) => {
    const wizardNumber = props.wizardNumber;
    if (wizardNumber === Math.floor(Math.random() * 11) + 6 && wizardNumber === Math.floor(Math.random() * 11) + 6) {
        return (
            <React.Fragment>
                <h1>You got the Secret Wizard House!</h1>
                <History house='the Secret House' number={wizardNumber}/>
            </React.Fragment>
        )
    } else if (wizardNumber === Math.floor(Math.random() * 11) + 6) {
        return (
            <React.Fragment>
                <h1>You got Hufflepuff!</h1>
                <History house='Hufflepuff' number={wizardNumber}/>
            </React.Fragment>
        )
    } else if (wizardNumber === 8) {
        return (
            <React.Fragment>
                <h1>You got Gryffindor!</h1>
                <History house='Gryffindor' number={wizardNumber}/>
            </React.Fragment>
        )
    } else if (wizardNumber === 13) {
        return (
            <React.Fragment>
                <h1>You got Ravenclaw!</h1>
                <History house='Ravenclaw' number={wizardNumber}/>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h1>You got Slytherin!</h1>
                <History house='Slytherin' number={wizardNumber}/>
            </React.Fragment>
        )
    }
}

export default Results;