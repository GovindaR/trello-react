import React, { Component } from 'react';

class Banner extends Component {
  render() {

    return (
      // jsx
        <li onClick={()=>this.props.menuClick(this.props.menuIndex)} className={this.props.bannerClass}>
            <a className="side-nav__link">
            <span>{this.props.menuName}</span>
            </a>
        </li>
    );
  }
}

export default Banner;


