const React = require('react');
const DefaultLayout = require('./layouts/Default');

class New extends React.Component{
  render() {
    return(
      <DefaultLayout
      title={"New Log"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/foodnewpage.css'}]}>
        <form action="/logs" method="POST">
        <h4>Title:</h4>
          <input type="text" name="title" /><br/>
        <h4>Entry:</h4>
          <input type="textarea" name="entry" /><br/>
          Ship is Broken: <input type="checkbox" name="shipIsBroken" /><br/>
        <h4>Date</h4><input type="date" name="date" /><br/>
        <input id="submit" type="submit" name="" value="Submit Log" /><br/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New;
