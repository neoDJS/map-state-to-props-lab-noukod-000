import React, { Component } from 'react';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user=><li>{user.username}</li>)}
          Users!
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users, userCount: state.users.count}
}

export default connect(mapStateToProps)(Users);
