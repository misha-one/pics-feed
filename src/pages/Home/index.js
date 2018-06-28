import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    console.log(this.props.users);
  }

  render() {
    return <div>Photos</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps)(Home);
