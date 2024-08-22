import React from 'react';

// This is a functional component called Greeting
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

export default Greeting;
