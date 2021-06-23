const React = require('react');

class Index extends React.Component{
  render(){
    return(
      <div>
        <h1>Captain's Log Index</h1>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {
            this.props.logs.map((logs) => {
              return(
                <li>
                  Log Title:  <a href={`/logs/${logs._id}`}>{logs.title}</a>.
                  Ship status:
                  {
                    logs.shipIsBroken?
                    '  Good to go!':
                    '  BROKEN!!!!'
                  }
                  <form action={`/logs/${logs._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE"/>
                  </form>
                </li>

              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index;
