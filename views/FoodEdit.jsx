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

class FoodEdit extends React.Component{
  render(){
    return(
      <div style={formStyle}>
        <title>Edit Page</title>
        <h1>Edit Food Log</h1>
        <form action={`/foodlog/${this.props.foodlogs._id}?_method=PUT`} method="POST">
          Meal: <input type="text" name="title" defaultValue={this.props.foodlogs.meal}/><br/>
          Entry: <input style={inputStyle} type="text" name="entry" defaultValue={this.props.foodlogs.entry} />
          <br/><br/>
          <input type="submit" name="" value="Submit Updates" /><br/>
        </form><br/>
        <form style={formStyle} action={`/foodlog/${this.props.foodlogs._id}?_method=DELETE`} method="POST">
          <input type="submit" value="Delete Log"/>
        </form>
      </div>
    )
  }
}

module.exports = FoodEdit;
