import React, { Component } from "react";
import { SET_USER, SET_AGE } from "../reducers/ActionTypes";
import { connect } from "react-redux";

const handleSubmit = (e, props) => {
  e.preventDefault();
  const username = e.target.username.value;
  const age = e.target.age.value;
  //console.log("new user is", username);
  //console.log("new age is ", age);
  props.setUser(username);
  props.setAge(age);
};

const UserForm = props => {
  return (
    <div>
      <p>
        <h2>save user details</h2>
      </p>
      <form onSubmit={e => handleSubmit(e, props)}>
        <p>
          username:{" "}
          <input
            type="text"
            required
            name="username"
            defaultvalue={props.username}
          />
        </p>
        <p>
          age:{" "}
          <input type="number" required name="age" defaultvalue={props.age} />
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.username,
  age: state.age
});

const mapDispatchToProps = dispatch => ({
  setUser: username => {
    dispatch({
      type: SET_USER,
      payload: username
    });
  },

  setAge: age => {
    dispatch({
      type: SET_AGE,
      payload: age
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
