const React = require('react');
// const DefaultLayout = require('./layouts/Default.jsx')

//CSS Styling#######################
const formStyle = {
  // textAlign: 'center',
};
const inputStyle = {
  marginTop: '5px',
  marginBottom: '5px'
};
//###############################

class Edit extends React.Component{
  render(){
    return(
      <div style={formStyle}>
        <title>Edit Page</title>
        <h1>Edit Log</h1>
        <form action={`/logs/${this.props.logs._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={this.props.logs.title}/><br/>
          Entry: <input style={inputStyle} type="text" name="entry" defaultValue={this.props.logs.entry} /><br/>
          Ship is Broken:
            { this.props.logs.shipIsBroken
              ? <input type="checkbox" name="shipIsBroken" defaultChecked />
              : <input type="checkbox" name="shipIsBroken"/>
            }
          <br/><br/>
          <input type="submit" name="" value="Submit Updated Log" /><br/>
        </form><br/>
        <form style={formStyle} action={`/logs/${this.props.logs._id}?_method=DELETE`} method="POST">
          <input type="submit" value="Delete Log"/>
        </form>
      </div>
    )
  }
}

module.exports = Edit;
