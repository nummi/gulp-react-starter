let React = require('react');

module.exports = React.createClass({
  getInitialState() {
    return { name: 'Squanch' };
  },
  render() {
    return <div>Hello, {this.state.name}</div>;
  }
});
