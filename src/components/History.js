import React, { useState, useEffect } from 'react';

import names from '../assets/wizard_names.json';

import './History.css'

const History = (props) => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [name3, setName3] = useState('');
    const [name4, setName4] = useState('');
    const [name5, setName5] = useState('');
    const [name6, setName6] = useState('');
    useEffect(() => {
        setName1(names[Math.floor(Math.random() * 33) ].name)
        setName2(names[Math.floor(Math.random() * 33) + 33].name)
        setName3(names[Math.floor(Math.random() * 33) + 66].name)
        setName4(names[Math.floor(Math.random() * 33) + 99].name)    
        setName5(names[Math.floor(Math.random() * 33) + 132].name)
        setName6(names[Math.floor(Math.random() * 33) + 167].name)
    }, [props.number])
    return (
        <React.Fragment>
            <p>Quite the prestigious house! Some famous wizards from {props.house} include:</p>
            <ul>
                <li>{name1}</li>
                <li>{name2}</li>
                <li>{name3}</li>
                <li>{name4}</li>
                <li>{name5}</li>
                <li>{name6}</li>
            </ul>
            <button onClick={() => props.reset(undefined)}>Take the quiz again!</button>
        </React.Fragment>
    )
}

export default History;