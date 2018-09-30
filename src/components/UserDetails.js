import React, { Component } from "react";
import { connect } from "react-redux";

const UserDetails = props => (
  <div>
    <p>
      <h2>view user details</h2>
    </p>
    <p>username: {props.username}</p>
    <p>age: {props.age}</p>
  </div>
);

/*
class UserDetails extends Component {
  render() {
    //console.log('props',this.props);
    return (
      <div>
        <p>
          <h2>view user details</h2>
        </p>
        <p>username: {this.props.username}</p>
        <p>age: {this.props.age}</p>
      </div>
    );
  }
}
*/

const mapStateToProps = state => ({
  username: state.username,
  age: state.age
});

export default connect(mapStateToProps)(UserDetails);
