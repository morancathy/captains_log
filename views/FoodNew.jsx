const React = require('react');
const DefaultLayout = require('./layouts/Default');

class FoodNew extends React.Component{
  render() {
    return(
      <DefaultLayout
      title={"New Food Log"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/foodnewpage.css'}]}>
        <form action="/foodlog" method="POST">
          <h4>Choose Your Meal</h4>
            <input type="radio" value="Breakfast" id="breakfast" name="meal" />
            <label for="breakfast">Breakfast</label><br/>
            <input type="radio" value="Lunch" id="lunch" name="meal" />
            <label for="breakfast">Lunch</label><br/>
            <input type="radio" value="Dinner" id="dinner" name="meal" />
            <label for="breakfast">Dinner</label><br/>
          <h4>Entry</h4>
            <input type="textarea" name="entry" /><br/>
          <h4>Date</h4><input type="date" name="date" /><br/>
          <input id="submit" type="submit" name="" value="Submit Log" /><br/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = FoodNew;
