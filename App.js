import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('');

  const appendToDisplay = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(display);
      setDisplay(String(result));
    } catch (error) {
      alert('Invalid calculation');
    }
  };

  return (
    <div className="calculator">
      <input type="text" id="display" value={display} disabled />
      <div className="buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', 'C', '=', '/'].map((item) => (
          <button
            key={item}
            onClick={() => {
              if (item === 'C') {
                clearDisplay();
              } else if (item === '=') {
                calculateResult();
              } else {
                appendToDisplay(item);
              }
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;