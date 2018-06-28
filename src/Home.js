import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestHelloWorld();
  }

  render() {
    return <h1>whatever</h1>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
