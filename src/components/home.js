import React, { Component } from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';
import { authenticationUrl } from '../unsplash/unsplash';
import '../styles/index.scss';
import { withRouter, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Home extends React.Component {
 
    handleClick() {
        location.assign(authenticationUrl);
    }

    render() {
        const token = localStorage.getItem('token');
        var button = null;

        if (token)
            button = <NavLink to={`/auth`} className='but_auth'>Перейти</NavLink>;
        else
            button = <button className='but_auth' onClick={this.handleClick.bind(this)}>Authorization</button>;


        return (
            <div className='block-home'>
                <div className='registration-form'>
                    <h1 className='title'><span>Wel</span>come in my <span>App</span></h1>
                    <p className='subtitle'>Aplication for view photos</p>
                    {button}
                </div>
            </div>
        )
    }
}

export default Home;