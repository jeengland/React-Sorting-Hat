import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Quiz from './components/quiz';

function App() {
  const [wizardNumber, setWizardNumber] = useState(undefined)
  return (
    <div className="App">
      <Quiz sendResults={setWizardNumber}/>
      {wizardNumber}
    </div>
  );
}

export default App;
