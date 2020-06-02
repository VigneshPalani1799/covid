import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Tracker from './TrackerComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './FooterComponent';


class Main extends Component {

    render() {
        return (

            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/tracker" component={Tracker}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Main;