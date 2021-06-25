const React = require('react');
const DefaultLayout = require('./layouts/Default');

class CommentNew extends React.Component {
  render() {
    const loggy = this.props.logs;
    return(
      <DefaultLayout
      title={loggy.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
        <p>Entry: {loggy.entry} </p>
        <p>Ship status:
        {
          loggy.shipIsBroken?
          '  BROKEN!!!!':
          '  Good to go!'
        }</p>
        {`${loggy.createdAt}`}<br/><br/>

        <form action="/logs" method="POST">
        <h4>Name:</h4>
          <input type="text" name="name" /><br/>
        <h4>Entry:</h4>
          <input type="textarea" name="entry" /><br/>
        <h4>Date</h4><input type="date" name="date" /><br/>
        <input type="submit" name="" value="Submit Comment" /><br/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = CommentNew;
