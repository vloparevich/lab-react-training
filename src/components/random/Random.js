import React from 'react';
import './Random.css';

class Random extends React.Component {
  state = {
    min: this.props.min,
    max: this.props.max,
    randomValue: 0,
  };

  render() {
    console.log(typeof this.state.min);
    return (
      <div>
        Random value between {this.state.min} and {this.state.max} is{' '}
        {Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
          this.state.min}
      </div>
    );
  }
}

export default Random;
