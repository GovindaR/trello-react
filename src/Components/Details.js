import React, { Component } from 'react';

import user1 from '../assets/img/user-1.jpg';
import user2 from '../assets/img/user-2.jpg';
import user3 from '../assets/img/user-3.jpg';
import user4 from '../assets/img/user-4.jpg';
import user5 from '../assets/img/user-5.jpg';
import user6 from '../assets/img/user-6.jpg';

import Content from './Content';

// for static context
const Details = props =>{
    return (
      // jsx
       <div className="detail">
            <div className="description">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                </p>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                </p>
                <ul className="list">
                    <li className="list__item">Close to thr beach</li>
                    <li className="list__item">Breakfast included</li>
                    <li className="list__item">Free airport shuttle</li>
                    <li className="list__item">Free wifi in all rooms</li>
                    <li className="list__item">Air conditioning and heating</li>
                    <li className="list__item">Pets allowed</li>
                    <li className="list__item">We speak all language</li>
                    <li className="list__item">Perfect for families</li>
                </ul>
                <div className="recommand">
                    <p className="recommand__count">
                        Lucy and 3 other friends recommand this hotel. 
                    </p>
                    <div className="recommand__friends">
                        <img src={user3} className="recommand__photo" alt="friend 1"></img>
                        <img src={user4} className="recommand__photo" alt="friend 2"></img>
                        <img src={user5} className="recommand__photo" alt="friend 3"></img>
                        <img src={user6} className="recommand__photo" alt="friend 4"></img>
                    </div>
                </div>
            </div>
            <div className="user-reviews">
                <Content usrImg={user1} contentName="Nick Smith" contentDate="Feb 23rd, 2017" contentRate="7.8" contentPara="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate."/>
                <Content usrImg={user2} contentName="MARY THOMAS" contentDate="Sept 13th, 2017" contentRate="9.3" contentPara="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi."/>
                <button className="btn-inline">Show all <span>→</span></button>
            </div>
       </div>
    );
  }


export default Details;


