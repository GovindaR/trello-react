import React, { Component } from "react";
import { FacebookProvider, CustomChat } from 'react-facebook';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import PropTypes from 'prop-types';

import logo from "./logo.png";

import user from "./assets/img/user.jpg";
import chat from "./assets/img/SVG/chat.svg";
import hotel1 from "./assets/img/hotel-1.jpg";
import hotel2 from "./assets/img/hotel-2.jpg";
import hotel3 from "./assets/img/hotel-3.jpg";
import bookmark from "./assets/img/SVG/bookmark.svg";

import Cta from "./Components/Cta";
import Nav from "./Components/Nav";
import {getJson,postJson} from './service/user';
import Odometer from 'react-odometerjs';
import Search from "./Components/Search";
import Banner from "./Components/Banner";
import Gallery from "./Components/Gallery";
import Details from "./Components/Details";
import Overview from "./Components/Overview";
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Flight from "./Components/Flight";
import Tours from "./Components/Tours";
import Carrental from "./Components/Carrental";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        profilePic: ""
      },
      noticeValue: 0,
      messValue: 0,
      selectedMenu: 0,
      isClassToggle: false,
      date: new Date().getFullYear(),
      users:[]
      // odometerValue: 0
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState({
        user: {
          firstName: "John",
          lastName: "Smith",
          profilePic:
            "https://cdn1.iconfinder.com/data/icons/unique-round-blue/93/user-512.png"
        }
      });
    }, 4000);
    postJson({
      firstName:'Hari',
      lastName:'Rai'
    });
  const result = await getJson();
    this.setState({users:result});
    this.setState({ odometerValue:8.6 });
   
  }
 
  noticeClick = () => {
    this.setState({
      noticeValue: (this.state.noticeValue += 1)
    });
  };
  messClick = () => {
    this.setState({
      messValue: (this.state.messValue += 1)
    });
  };
  menuClick = menuKey => {
    this.setState({
      selectedMenu: menuKey,
      isClassToggle: !this.state.isClassToggle
    });
  };

  render() {
    
    const { selectedMenu, user } = this.state;
    let hotelimg = [
      {
        hotelImg: hotel1
      },
      {
        hotelImg: hotel2
      },
      {
        hotelImg: hotel3
      }
    ];
    const { odometerValue } = this.state;
    return (
      // jsx
      <Router>
      <div className="App">
        <div className="container">
          <header className="header">
            <img src={logo} alt="trillo logo1" className="logo" />
            <Search />
            <nav className="user-nav">
              <Nav
                src1={bookmark}
                updateNoticeCount={this.noticeClick}
                notice={this.state.noticeValue}
                nameClass="user-nav__icon"
                nameClass1="user-nav__notification"
                nameClass2="user-nav__icon-box"
              />
              <Nav
                src1={chat}
                updateNoticeCount={this.messClick}
                notice={this.state.messValue}
                nameClass="user-nav__icon"
                nameClass1="user-nav__notification"
                nameClass2="user-nav__icon-box"
              />
              {user.firstName ? (
                <Nav
                  src1={user.profilePic}
                  notice={`${user.firstName} ${user.lastName}`}
                  nameClass="user-nav__user-photo"
                  nameClass1="user-nav__user-name"
                  nameClass2="user-nav__user"
                />
              ) : (
                <div>Loading</div>
              )}
            </nav>
          </header>
          <div className="content">
            <nav className="sidebar">
              <ul className="side-nav">
              <Link to="/">
                <Banner
                  menuIndex={0}
                  bannerClass={
                    selectedMenu === 0
                      ? "side-nav__item side-nav__item--active"
                      : "side-nav__item"
                  }
                  menuClick={this.menuClick}
                  menuName="Hotel"
                />
                </Link>
                <Link to="/Flight">
                <Banner
                  menuIndex={1}
                  bannerClass={
                    selectedMenu === 1
                      ? "side-nav__item side-nav__item--active"
                      : "side-nav__item"
                  }
                  menuClick={this.menuClick}
                  menuName="Flight"
                />
                </Link>
                <Link to="/Car-Rental">
                <Banner
                  menuIndex={2}
                  bannerClass={
                    selectedMenu === 2
                      ? "side-nav__item side-nav__item--active"
                      : "side-nav__item"
                  }
                  menuClick={this.menuClick}
                  menuName="Car Rental"
                />
                </Link>
                <Link to="/Tours">
                <Banner
                  menuIndex={3}
                  bannerClass={
                    selectedMenu === 3
                      ? "side-nav__item side-nav__item--active"
                      : "side-nav__item"
                  }
                  menuClick={this.menuClick}
                  menuName="Tours"
                />
                </Link>
              </ul>
              <div className="legal">
                © {this.state.date} by trillo.All rights reserved.
              </div>
            </nav>
            <main className="hotel-view">
            <div className="gallery"> 
              {hotelimg.map(image => {
                return (
                    <Gallery hotel={image.hotelImg} />
                );
              })}
               </div>
              {/* <Route exact path="/" render ={()=> <Overview />} /> */}
              <Overview />

              {/* Home */}
              <Route exact path="/" component={Details} />

              {/* Flight */}
              <Route exact path="/Flight" component={Flight}/>
              
              {/* Car Rental */}
              <Route exact path="/Car-Rental" component={Carrental}/>

              {/* Tours */}
              <Route exact path="/Tours" component={Tours}/>
              {/* <Route exact path="/" component={Cta} /> */}
              <Cta/>
            </main>
          </div>
        </div>
        {/* json data taneko */}
        {/* {this.state.users.map(name =>{
                return(
                  <div>{name.firstName}</div>
                );





              })} */}
               
                <MessengerCustomerChat
                pageId="<230266714506246>"
                appId="<086325798190381>"
              />
      </div>
    
      </Router> 
    );
  }
}

export default App;
