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
            this.props.logs.map((logs, i) => {
              return(
                <li>
                  Log Title:  <a href={`/logs/${i}`}>{logs.title}</a>.  Ship status:
                  {
                    logs.shipIsBroken?
                    '  Good to go!':
                    '  BROKEN!!!!'
                  }
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
