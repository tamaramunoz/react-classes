function HelloWorld(props) {
    console.log(props)
    return (
      <div id="hello">
        <h3> {props.subtitle}</h3>
        {props.myText}
      </div>
    )
  }

  // se puede hacer como una funcion también las classes