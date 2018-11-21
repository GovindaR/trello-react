import React, { Component } from "react";

// for dynaic context
class Nav extends Component {
  render() {

    return (
          <div className={this.props.nameClass2} onClick={this.props.updateNoticeCount}>
            <img src={this.props.src1} className={this.props.nameClass} />
            <span className={this.props.nameClass1}>{this.props.notice}</span>
          </div>
    );
  }
}

export default Nav;
