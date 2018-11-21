import React, { Component } from "react";

import sprite from "../assets/img/sprite.svg";

class Search extends Component {
    render() {
      return (
          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="search hotels"
            />
            <button className="search__button">
              <img className="search__icon" src={sprite} />
            </button>
          </form>
      );
    }
  }
  
  export default Search;