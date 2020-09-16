import React from 'react';
import './index.css'

class HelloWorld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3> {this.props.subtitle}</h3>
          {this.props.myText}
          <button onClick={this.toggleShow}> Toggle Show</button>
        </div>
      )

    } else {
      return (
        <div>
          <h1>There are no elements</h1>
          <button onClick={this.toggleShow}> Toggle Show</button>
        </div>)
    }
  }
}

function App() {
  return (
    <div>
      <h1>This is my component:
        <HelloWorld myText="hello ratsi" subtitle="lorem ipsum" />
        <HelloWorld myText="hello puppy" subtitle="mi chico" />
        <HelloWorld myText="hello ipi" subtitle="bello" />
      </h1>
    </div>
  );
}

export default App;