const React = require('react');
// const DefaultLayout = require('./layouts/Default.jsx')

class Edit extends React.Component{
  render(){
    return(
      <div>
        <title>Edit Page</title>
        <form action={`/logs/${this.props.logs._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={this.props.logs.title}/><br/>
          Entry: <input type="text" name="entry" defaultValue={this.props.logs.entry} /><br/>
          Ship is Broken:
            { this.props.logs.shipIsBroken
              ? <input type="checkbox" name="shipIsBroken" defaultChecked />
              : <input type="checkbox" name="shipIsBroken"/>
            }
          <br/>
          <input type="submit" name="" value="Submit Log" /><br/>
        </form>
      </div>
    )
  }
}

module.exports = Edit;
