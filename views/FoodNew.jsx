const React = require('react');

class FoodNew extends React.Component{
  render() {
    return(
      <div>
        <h1>New Food Log</h1>
        <form action="/foodlog" method="POST">
          Meal: <input type="text" name="meal" /><br/>
          Entry: <input type="text" name="entry" /><br/>
          Created At: <input type="date" name="date" /><br/>
          <input type="submit" name="" value="Submit Log" /><br/>
        </form>
      </div>
    )
  }
}

module.exports = FoodNew;
