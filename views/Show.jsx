const React = require('react');

class Show extends React.Component {
  render() {
    const loggy = this.props.logs;
    return(
      <div>
        <h1>{`Log Title: ${loggy.title}`}</h1>
        Entry: {loggy.entry}. <br/>
        Ship status:
        {
          loggy.shipIsBroken?
          '  Good to go!':
          '  BROKEN!!!!'
        }
        <br/><a href="/logs">Back to log entries</a>
      </div>
    )
  }
}

module.exports = Show;
