import fetch from 'isomorphic-fetch';
import { Link } from "react-router";
import React, { Component } from 'react';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
    }
    goToGithub(){
        fetch('OAuth', {
            method: 'Get',
            headers: {
                
            }
        })
        
    }
    render(){
        return(
            <section className="loginContainer">
                <button type='submit' onClick=""  id="login">Login With GitHub</button>
            </section>
        );
    }
}

export default LoginPage;