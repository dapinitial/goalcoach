import React, { Component } from 'react';
import { goalRef } from '../../firebase';

class AddGoal extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: ''
      }
  }

  addGoal() {
    console.log('this.state', this.state);
    const { title } = this.state;
    goalRef.push({email: 'test@test.com', title: this.state.title});
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a Goal"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title: event.target.value})}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addGoal()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default AddGoal;