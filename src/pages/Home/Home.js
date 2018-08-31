import React, { Component } from "react";
import { connect } from "react-redux";

import { aGetPhotos } from "../../store/actions";

class Home extends Component {
  componentWillMount() {
    this.props.aGetPhotos();
  }

  render() {
    const { photos } = this.props;
    console.log(photos);

    // render error if response.error
    if (photos.error) {
      return (
        <div>
          <h6>error</h6>
        </div>
      );
    }

    return (
      <div>
        <h1>Photos</h1>
        {/* show preloader while request */}
        {photos.loading ? (
          <div>loading...</div>
        ) : // render data if data !== undefinde || null
        photos.data ? (
          photos.data.map(photo => {
            // map photos
            return <img src={photo.urls.small} key={photo.id} />;
          })
        ) : (
          // render empty state
          <h3>Not photos</h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos
  };
};

export default connect(
  mapStateToProps,
  { aGetPhotos }
)(Home);
