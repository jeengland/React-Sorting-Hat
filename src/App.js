import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Quiz from './components/Quiz';
import Results from './components/Results';

function App() {
  const [wizardNumber, setWizardNumber] = useState(undefined)
  return (
    <div className="App">
      {wizardNumber ? undefined : <Quiz sendResults={setWizardNumber}/>}
      {wizardNumber ? <Results wizardNumber={wizardNumber} /> : undefined}
    </div>
  );
}

export default App;
