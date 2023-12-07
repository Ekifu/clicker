import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    if (count === 20) {
      const timer = setTimeout(() => {
        setCount(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  const handleIncrement = () => {
    // setCount(prevCount => prevCount + 1);
    if (count < 20) {
      setCount(prevCount => prevCount + 1);
    }
  };

  let countColor = 'black';
  if (count > 15) {
    countColor = 'red';
  } else if (count > 10) {
    countColor = 'orange';
  } else if (count > 5) {
    countColor = 'green';
  }

  return (
    <div>
      <h1 style={{ color: countColor }}>Counter: {count}</h1>
      <button onClick={handleIncrement}>Dodaj</button>
    </div>
  );
};

export default Counter;
