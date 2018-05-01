import React, { Component } from 'react';

class Composed extends Component {
  render() {
    const { children, ...rest } = this.props;
    return Object.entries(rest).reduce(
      (acc, [key, value]) => ({ __compose = {} }) =>
        React.cloneElement(value, undefined, result =>
          acc({ __compose: { ...__compose, [key]: result } }),
        ),
      ({ __compose }) => children(__compose),
    )({});
  }
}

export default Composed;
