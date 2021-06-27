const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component{
  render(){
    return(
      <DefaultLayout
      title={"Captain's Log Index"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/index.css'}]}>
        <nav>
          <a id="createLink" href="/logs/newlog">Create a New Log</a><a id="foodLink" href="/foodlog">Visit Food Log</a>
        </nav>
        <ul>
          {
            this.props.logs.map((logs) => {
              return(
                <li>
                  <strong>Title:</strong>  <a href={`/logs/${logs._id}`}>{logs.title}</a>.
                  Ship status:
                  {
                    logs.shipIsBroken?
                    '  BROKEN!!!!':
                    '  Good to go!'
                  }
                  <p id="date">Date: {`${logs.createdAt}`}</p>
                  <p id="editLink">
                    <a href={`/logs/${logs._id}/edit`}>Edit log</a>
                  </p>
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = Index;
