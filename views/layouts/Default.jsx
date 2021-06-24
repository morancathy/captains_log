const React = require('react');

const h1Style = {
  // color: '#ffffff',
  // backgroundColor: '#000000',
};

class DefaultLayout extends React.Component {
  render() {
    return (
      <html lang="en" dir="ltr">
          <head>
            <meta charSet="utf-8" />
            <title>{this.props.title}</title>
          </head>
          <body>
            <h1 style={h1Style}>{this.props.title}</h1>
            {this.props.children}
          </body>
      </html>
    )
  }
}

module.exports = DefaultLayout;
