import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      // jsx
      <figure className="review">
        <blockquote className="review__text">
            {this.props.contentPara}
        </blockquote>
        <figcaption className="review__user">
            <img src={this.props.usrImg} alt="User 2" className="review__photo"/>
            <div className="review__user-box">
                <p className="review__user-name">{this.props.contentName}</p>
                <p className="review__user-date">{this.props.contentDate}</p>
            </div>
            <div className="review__rating">{this.props.contentRate}</div>
        </figcaption>
    </figure>
    );
  }
}

export default Content;


