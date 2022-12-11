//we are working on lifeCycle-component methods they only valid for class component
import React from 'react';

class App extends React.Component {

  constructor(props) {
    //console.log("inside constructor");
    super(props);

    //creating this.state variables 
    this.state = {
      hello: "hello mahi"
    };
    //here we binding methods using bind method to access state varibles i.e. hello or etc...
    this.changeState = this.changeState.bind(this);

  }
  render() {
    return (
      <div>
        <h3>Hello{this.state.hello}</h3>
        <button onClick={this.changeState}>ClickUpdate</button>
      </div>
    )
  }

  //lifecycle method 1: mounting-phase
  componentWillMount() {
    console.log("component will mount: Mounting Phase method");
  }

  componentDidMount() {
    console.log("component did mount: MountingPhase Method");
  }

  //here we creating function which will update this.state variables
  changeState() {
    this.setState(
      {
        hello: "its varibelof state where we updating using this.setSate()"
      }
    )
  }

  //updating-phase methods
  componentWillReceiveProps(newProps){
    console.log("component will recived props");
  }

  shouldComponentUpdate(newProps, newState){
    return true;
  }

  componentWillUpdate(nextProps,nextState){
    console.log("component will get update");
  }

  //unmounting-phase methods
  componentWillUnmount(){
    console.log("Component will unmount");
  }
}
export default App;