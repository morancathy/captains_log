const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx')

class FoodEdit extends React.Component{
  render(){
    return(
      <DefaultLayout
      title={"Edit Food Log"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/foodeditpage.css'}]}>
        <form action={`/foodlog/${this.props.foodlogs._id}?_method=PUT`} method="POST">
          Meal: <input type="text" name="title" defaultValue={this.props.foodlogs.meal}/><br/>
          Entry: <input id="entry" type="text" name="entry" defaultValue={this.props.foodlogs.entry} />
          <br/><br/>
          <input type="submit" name="" value="Submit Updates" /><br/>
        </form><br/>
        <form id="form" action={`/foodlog/${this.props.foodlogs._id}?_method=DELETE`} method="POST">
          <input type="submit" value="Delete Log"/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = FoodEdit;
