import React, { Component } from 'react';


class Gallery extends Component {
  render() {
    return (
      // jsx
        <figure className="gallery__item">
            <img src={this.props.hotel} alt="Photo of hotel 1" className="gallery__photo"/>
        </figure>
    );
  }
}

export default Gallery;


