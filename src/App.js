import React from 'react';
import './index.css'

function HelloWorld(props) {
  console.log(props)
  return (
    <div id="hello">
      <h3> {props.subtitle}</h3>
      {props.myText}
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>This is my component:
        <HelloWorld myText="hello ratsi" subtitle="lorem ipsum" />
        <HelloWorld myText="hello puppy" subtitle="mi chico" />
        <HelloWorld myText="hello ipi" subtitle="bello"/>
      </h1>
    </div>
  );
}

export default App;
