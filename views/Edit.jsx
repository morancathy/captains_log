const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx')

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
      <DefaultLayout
      title={"Edit Log"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/foodnewpage.css'}]}>
        <form action={`/logs/${this.props.logs._id}?_method=PUT`} method="POST">
        <h4>Title:</h4>
          <input type="text" name="title" defaultValue={this.props.logs.title}/><br/>
        <h4>Entry:</h4>
          <input style={inputStyle} type="text" name="entry" defaultValue={this.props.logs.entry} /><br/>
          Ship is Broken:
            { this.props.logs.shipIsBroken
              ? <input type="checkbox" name="shipIsBroken" defaultChecked />
              : <input type="checkbox" name="shipIsBroken"/>
            }
          <br/><br/>
        <input id="submit" type="submit" name="" value="Submit Updated Log" /><br/>
        </form><br/>
        <form style={formStyle} action={`/logs/${this.props.logs._id}?_method=DELETE`} method="POST">
          <input type="submit" value="Delete Log"/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;
