import React, { Component } from "react";
import { connect } from "react-redux";

import { aGetUsers } from "../../store/actions";

class Home extends Component {
  componentWillMount() {
    this.props.aGetUsers();
  }

  render() {
    console.log(this.props.users);
    const { users } = this.props;

    if (users.loading) {
      return <div>loading</div>;
    }

    if (users.success) {
      return users.data.map(user => {
        return <div key={user.id}>{user.name}</div>;
      });
    }

    return null;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { aGetUsers }
)(Home);
