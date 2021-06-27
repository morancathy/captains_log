const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
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
        <p>{loggy.peoplesComments}</p>
        <a id="backLink" href="/logs">Back to log entries</a>  {/*<a id="commentLink" href={`/logs/${loggy._id}/comment`}>Make a Comment</a>*/}
      </DefaultLayout>
    )
  }
}

module.exports = Show;
