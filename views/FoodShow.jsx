const React = require('react');
const DefaultLayout = require('./layouts/Default');

class FoodShow extends React.Component {
  render() {
    return(
      <DefaultLayout
      title={`${this.props.foodlogs.meal}`}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/foodshowpage.css'}]}>
        <p>Entry: {`${this.props.foodlogs.entry}`}</p>
        {`${this.props.foodlogs.createdAt}`}<br/>
        <br/><a href="/foodlog">Back to food log entries</a>
      </DefaultLayout>
    )
  }
}

module.exports = FoodShow;
