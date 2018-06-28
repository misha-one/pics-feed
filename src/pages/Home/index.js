import React, { Component } from "react";
import { connect } from "react-redux";

import { aGetUsers } from "../../store/actions";

class Home extends Component {
  componentWillMount() {
    this.props.aGetUsers();
  }

  render() {
    console.log(this.props.users);
    return <div>Photos</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { aGetUsers }
)(Home);
