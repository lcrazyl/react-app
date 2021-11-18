
import { Component, createContext } from "react";
const counterCtx = createContext();
class Counter extends Component {
  state = {
    count: 0,
  };
  reduce = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <counterCtx.Provider
        value={{
          count: this.state.count,
          add:this.add,
          reduce:this.reduce
        }}
      >
        {this.props.children}
      </counterCtx.Provider>
    );
  }
}

export { Counter, counterCtx };
