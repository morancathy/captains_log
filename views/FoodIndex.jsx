const React = require('react');

class FoodIndex extends React.Component{
  render(){

    return(
      <div>
        <h1>Captain's Food Log Index</h1>
        <nav>
          <a href="/foodlog/new">Create a New Food Log</a>
        </nav>
        <ul>
          {
            this.props.foodlogs.map((foodlogs) => {
              return(
                <li>
                  Meal:  <a href={`/foodlog/${foodlogs._id}`}>{foodlogs.meal}</a>.
                  Date: {`${foodlogs.createdAt}`} <br/>
                  <a href={`/foodlog/${foodlogs._id}/edit`}>Edit log</a>
                </li>

              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = FoodIndex;
