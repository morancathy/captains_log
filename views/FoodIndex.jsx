const React = require('react');
const DefaultLayout = require('./layouts/Default');

class FoodIndex extends React.Component{
  render(){  
    return(
      <DefaultLayout
      title={"Captain's Food Log Index"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/foodindexpage.css'}]}>
        <nav>
          <a id="mealLog" href="/foodlog/new">Log a New Meal</a><a id="logLink" href="/logs">Visit Captain's Log</a>
        </nav>
        <ul>
          {
            this.props.foodlogs.map((foodlogs) => {
              return(
                <li>
                  <p><strong>Date:</strong> {`${foodlogs.createdAt}`}</p>
                  <p id="mealP"><strong>Meal: </strong><a href={`/foodlog/${foodlogs._id}`}>{foodlogs.meal}</a></p>
                  <a id="edit" href={`/foodlog/${foodlogs._id}/edit`}>Edit log</a>
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = FoodIndex;
