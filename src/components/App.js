import React, { Component } from 'react';
import NumberDisplay from './NumberDisplay';
import NumberInput from './NumberInput';

class App extends Component {

  state = {
    number: '',
    showInput: false,
  };

  handleInput = (input) => {
    const { number } = this.state;

    if(Number.isInteger(input)) {
      this.setState({
        number: ('' + number  + input),
      });
    }

    switch(input) {
      case "delete":
        this.setState({
          number: number.substring(0, number.length - 1),
        });
        return;
      case "done":
        this.setState({ showInput: false });
        return;
      default:
        return;
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
