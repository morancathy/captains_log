const React = require('react');
// const DefaultLayout = require('./layouts/Default');

//CSS Styling#######################
const divStyle = {
color: '#ffffff',
backgroundColor: '#FF69B4',
textAlign: 'center',
margin: '20px',
padding: '15px'
};
const pStyle = {
  fontSize: '20px',
};
//###############################

class Show extends React.Component {
  render() {
    const loggy = this.props.logs;
    return(
      <div style={divStyle}>
        <h1>{`${loggy.title}`}</h1>
        <p style={pStyle}>Entry: {loggy.entry} </p>
        <p style={pStyle}>Ship status:
        {
          loggy.shipIsBroken?
          '  BROKEN!!!!':
          '  Good to go!'
        }</p>
        {`${loggy.createdAt}`}<br/>
        <br/><a href="/logs">Back to log entries</a>
      </div>
    )
  }
}

module.exports = Show;
