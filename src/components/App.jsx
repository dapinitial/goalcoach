import React, { Component } from "react";
import { connect } from "react-redux";
import { firebaseApp } from "../firebase";
import AddGoal from "./AddGoal/AddGoal";
import GoalList from "./GoalList/GoalList";
import "./App.css";

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        <h3>Goals</h3>
        <AddGoal />
        <GoalList />
        <button className="btn btn-danger" onClick={() => this.signOut()}>
          Sign Out
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {};
}

export default connect(mapStateToProps, null)(App);
