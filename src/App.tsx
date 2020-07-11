import React, {useEffect, useState} from 'react';
import "./normalize.css";
import './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import BrowseImagesPage from "./components/BrowseImagesPage/BrowseImagesPage";
import Profile from "./components/ProfilePage/Profile";
import Register from "./components/LoginAndRegisterPage/Register";
import {Login, LoginResponse} from "./components/LoginAndRegisterPage/Login";
import {UserInterface} from './components/UserInterface';
import {makeRequestToTheServer} from "./components/utils";

interface AppState {
    user: null | UserInterface
}


function App() {
    const [currentState, setState] = useState<AppState>({
        user: null,
    });

    const onLogin = (response: LoginResponse) => {
        setState({user: response.user});
    };

    useEffect(() => {
        makeRequestToTheServer('GET', 'http://localhost:3001/api/users/auth').then((response) => {
            setState({user: response.user});
        });
    }, []);

    function clearUser() {
        setState({user: null});
    }

    return (
        <BrowserRouter>
            <NavigationBar user={currentState.user} clearUser={clearUser}/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={BrowseImagesPage}/>
                <Route path="/register" component={Register}/>
                <Route path="/login">
                    {currentState.user ? (<Redirect to="/"/>) : (<Login onLogin={onLogin}/>)}
                </Route>
                <Route path="/profile">
                    {currentState.user ? (<Profile user={currentState.user}/>) : (<Redirect to="/register"/>)}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
