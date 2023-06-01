import React, { useState } from "react";

const ParentComponent = () => {
  const [number, setNumber] = useState(10);

  const increaseNumber = () => {
    setNumber(number + 5);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Number: {number}</p>
      <ChildComponent increaseNumber={increaseNumber} />
    </div>
  );
};

const ChildComponent = ({ increaseNumber }) => {
  return (
    <div>
      <button onClick={increaseNumber}>Increase Number by 5</button>
    </div>
  );
};

export default ParentComponent;
