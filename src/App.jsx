import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route, useLocation} from "react-router-dom";
import Home from './routes/Home';
import Books from './routes/Books';
import About from './routes/About';
import LoginPage from './routes/LoginPage';
import SingUp from './routes/SignUp';
import BookDetails from './routes/BookDetails';
import AuthContextProvider from './context/AuthenticationContext';
import Profile from './routes/Profile';


const App = ()=>{
    useEffect(()=>{
        document.querySelector('.header').scrollIntoView();
    },[])
    return(
        <AuthContextProvider>
            <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/books" component={Books}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/sign-up" component={SingUp}/>
                        <Route exact path="/books/book/:id/details/:book_name" component={BookDetails}/>
                        <Route exact path="/user/:id/profile/:f_name" component={Profile}/>
                    </Switch>
            </Router>
        </AuthContextProvider>
    );
}

export default App;