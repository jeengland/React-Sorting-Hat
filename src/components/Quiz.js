import React, { useState, useEffect } from 'react';

const Quiz = (props) => {
    const [results, setResults] = useState(undefined);
    const [notFull, setNotFull] = useState(false);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [q6, setQ6] = useState(undefined);
    const handleChange = (event) => {
        switch (event.target.name) {
            case 'color': 
                setQ1(parseInt(event.target.value));
                break;
            case 'animal': 
                setQ2(parseInt(event.target.value));
                break;
            case 'pattern': 
                setQ3(parseInt(event.target.value));
                break;
            case 'neck': 
                setQ4(parseInt(event.target.value));
                break;
            case 'pizza': 
                setQ5(parseInt(event.target.value));
                break;
            case 'ToD': 
                setQ6(parseInt(event.target.value));
                break;
            default:
                console.error('Error: Invalid question property')
                break;
        }
    }
    useEffect(() => {
        setResults(q1 + q2 + q3 + q4 + q5 + q6)
    }, [q1, q2, q3, q4, q5, q6])
    const handleSubmit = (event) => {
        event.preventDefault();
        if (results) {
            props.sendResults(results);
            setNotFull(false);
        } else {
            setNotFull(true);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>Which color do you most identify with?</p>
            <div className='options'>
                <label htmlFor='red'>
                    <input id='red' type='radio' value='1' name='color' onChange={handleChange}/>
                    Red
                </label>
                <label htmlFor='blue'>
                    <input id='blue' type='radio' value='2' name='color' onChange={handleChange}/>
                    Blue
                </label>
                <label htmlFor='green'>
                    <input id='green' type='radio' value='3' name='color' onChange={handleChange}/>
                    Green
                </label>
                <label htmlFor='yellow'>
                    <input id='yellow' type='radio' value='4' name='color' onChange={handleChange}/>
                    Yellow
                </label>
            </div>
            <p>Which animal do you most identify with?</p>
            <div className='options'>
                <label htmlFor='wolf'>
                    <input id='wolf' type='radio' value='1' name='animal' onChange={handleChange}/>
                    Wolf
                </label>
                <label htmlFor='fox'>
                    <input id='fox' type='radio' value='2' name='animal' onChange={handleChange}/>
                    Fox
                </label>
                <label htmlFor='lion'>
                    <input id='lion' type='radio' value='3' name='animal' onChange={handleChange}/>
                    Lion
                </label>
                <label htmlFor='alpaca'>
                    <input id='alpaca' type='radio' value='4' name='animal' onChange={handleChange}/>
                    Alpaca
                </label>
            </div>
            <p>Pick a pattern to wear:</p>
            <div className='options'>
                <label htmlFor='foxtooth'>
                    <input id='foxtooth' type='radio' value='1' name='pattern' onChange={handleChange}/>
                    Foxtooth
                </label>
                <label htmlFor='checkers'>
                    <input id='checkers' type='radio' value='2' name='pattern' onChange={handleChange}/>
                    Checkers
                </label>
                <label htmlFor='gingham'>
                    <input id='gingham' type='radio' value='3' name='pattern' onChange={handleChange}/>
                    Gingham
                </label>
                <label htmlFor='chevrons'>
                    <input id='chevrons' type='radio' value='4' name='pattern' onChange={handleChange}/>
                    Chevrons
                </label>
            </div>
            <p>Would you rather wear a scarf or an ascot</p>
            <div className='options'>
                <label htmlFor='scarf'>
                    <input id='scarf' type='radio' value='1' name='neck' onChange={handleChange}/>
                    Scarf
                </label>
                <label htmlFor='ascot'>
                    <input id='ascot' type='radio' value='2' name='neck' onChange={handleChange}/>
                    Ascot
                </label>
            </div>
            <p>Would you rather have $1000 or the perfect pizza pie?</p>
            <div className='options'>
                <label htmlFor='money'>
                    <input id='money' type='radio' value='1' name='pizza' onChange={handleChange}/>
                    Money
                </label>
                <label htmlFor='pie'>
                    <input id='pie' type='radio' value='2' name='pizza' onChange={handleChange}/>
                    Pie
                </label>
            </div>
            <p>Truth or Dare?</p>
            <div className='options'>
                <label htmlFor='truth'>
                    <input id='truth' type='radio' value='1' name='ToD' onChange={handleChange}/>
                    Truth
                </label>
                <label htmlFor='dare'>
                    <input id='dare' type='radio' value='2' name='ToD' onChange={handleChange}/>
                    Dare
                </label>
            </div>
            <button type='submit'>Get my result</button>
            {notFull ? <p>You must answer all of the questions!</p> : undefined}
        </form>
    )
}

export default Quiz;