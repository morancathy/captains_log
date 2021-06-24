const React = require('react');

//CSS Styling#######################
const divStyle = {
color: '#ffffff',
backgroundColor: '#00BFFF',
margin: '20px',
padding: '15px'
};

const liStyle = {
  fontSize: '20px',
  color: 'black',
  paddingBottom: '10px'
};
const pStyle = {
  marginTop: '2px',
  fontSize: '16px',
};
const aStyle = {
  marginTop: '-12px',
  fontStyle: 'italic',
  fontSize: '15px',
};
//###############################

class Index extends React.Component{
  render(){

    return(
      <div style={divStyle}>
        <h1>Captain's Log Index</h1>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {
            this.props.logs.map((logs) => {
              return(
                <li style={liStyle}>
                  <strong>Title:</strong>  <a href={`/logs/${logs._id}`}>{logs.title}</a>.
                  Ship status:
                  {
                    logs.shipIsBroken?
                    '  BROKEN!!!!':
                    '  Good to go!'
                  }
                  <p style={pStyle}>Date: {`${logs.createdAt}`}</p>
                  <p style={aStyle}>
                    <a href={`/logs/${logs._id}/edit`}>Edit log</a>
                  </p>
                </li>

              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index;
