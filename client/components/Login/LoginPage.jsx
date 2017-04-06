import fetch from 'isomorphic-fetch';
import { Link } from "react-router";
import React, { Component } from 'react';
import axios from 'axios';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    // THIS IS WHEN WE TRIED TO GET TO POST TO THE GITHUB LINK
    // goToGithub(){
    //     console.log('---------YOU PRESSED THE GITHUB BUTTON!!');
    //                 // var myHeaders = new Headers({
    //                 //     "Content-Type": "application/json",
    //                 //     "Access-Control-Allow-Origin": "*",
    //                 //     "Access-Control-Allow-Methods": "GET"
    //                 // })
    //     var URL = "https://github.com/login/oauth/authorize?client_id=35add40e3b7a5d3457eb&redirect_uri=http://localhost:8000/OAuth";
    //                 // var requestParams = {
    //                 //     method: 'Get',
    //                 //     headers: myHeaders
    //                 // }

    //     axios.post(URL)
    //     .then(function(response){
    //         console.log('---------this is the response', response)
    //     })
    //     .catch(function(err){
    //         console.log('------there was an error', err);
    //     })

    //                 //     // fetch(URL, requestParams).then(function(res){
    //                 //     //     console.log("----there was a response");
    //                 //     //     console.log(res);
    //                 //     // }).catch(function(err){
    //                 //     //     console.log('=-------there was an error!!')
    //                 //     // });    
    // }


    /*render(){
        return(
            <section className="loginContainer">
                <button type='submit' onClick={this.goToGithub.bind(this)}  id="login">Login With GitHub</button>
            </section>
        );
    }*/

    render() {
        var URL = "https://github.com/login/oauth/authorize?client_id=35add40e3b7a5d3457eb&redirect_uri=http://localhost:8000/OAuth";

        var logoURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsPRjgvfUwOENDhNPw2kgEDgpHtV1KAM0ZBWEQBuTVAf4ZtPgoA"
        return(
            <section className="loginContainer">
            <a href={URL}>Login With GitHub</a>
            <img src={logoURL} className="github-logo"/>

            </section>
        );
    }
}

export default LoginPage;