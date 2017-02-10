import React, { Component } from 'react';
import NumberDisplay from './NumberDisplay';
import NumberInput from './NumberInput';

class App extends Component {

  state = {
    number: 1234,
    showInput: false,
  };

  handleInput = (input) => {
    if(Number.isInteger(input)) {
      this.setState({
        number: parseInt('' + this.state.number  + input),
      });
    }
    switch(input) {
      case "delete":
        this.setState({
          number: Math.floor(this.state.number / 10),
        });
        return;
      case "done":
        this.setState({ showInput: false });
    }
  }

  render() {
    const { number, showInput } = this.state;

    return (
      <div className="flex-auto flex flex-column justify-center items-center w-100">
        <NumberDisplay number={number}
          className="flex-auto"
          onClick={() => this.setState({
            showInput: true,
          })}
        />
        {showInput && <NumberInput onClick={this.handleInput} />}
      </div>
    );
  }
}

export default App;
