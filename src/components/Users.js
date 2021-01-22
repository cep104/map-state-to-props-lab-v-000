import React, { Component } from "react";
import { connect } from "react-redux";
//add connect
// add any needed imports here
class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.numberOfUsers} Users!
          {this.props.users.map((user) => (
            <li>{user.username}</li>
          ))}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    );
  }
}
//it wants up to pass it users length through the mapStateToProps.
//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, numberOfUsers: state.users.length };
};
// connect this component to Redux
export default connect(mapStateToProps)(Users);
