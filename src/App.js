import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom'
// import {connect} from 'react-redux'
import NavigationBar from "./component/NavigationBar";
import Home from './pages/Home'
// import Login from "./pages/Login";

export default class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <BrowserRouter>
                    <Route path='/' component={Home} exact/>
                    {/* <Route path='/login' component={Login} exact/> */}
                </BrowserRouter>
            </div>
        )
    }
}
