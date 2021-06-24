const React = require('react');
// const DefaultLayout = require('./layouts/Default');

class FoodShow extends React.Component {
  render() {
    return(
      <div>
        <h1>{`${this.props.meal}`}</h1>
        {`${this.props.createdAt}`}
        <p>Entry: {this.props.entry} </p>
        <br/><a href="/foodlog">Back to food log entries</a>
      </div>
    )
  }
}

module.exports = FoodShow;
