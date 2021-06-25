const React = require('react');
const DefaultLayout = require('./layouts/Default');

class CommentShow extends React.Component {
  render() {

    const commenty = this.props.comments;
    return(
      <DefaultLayout>

        <p>Comment: {commenty.entry}</p>
        <p>Created by: {commenty.name}</p>
      </DefaultLayout>
    )
  }
}

module.exports = CommentShow;
