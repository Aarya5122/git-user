import React, { useState } from "react";

//Reactstrap and BootStrap
import "bootstrap/dist/css/bootstrap.min.css"

//React-Router v5
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//React-Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"


//Firebase
import { initializeApp } from "firebase/app"
import "firebase/auth"

//Components
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"

//Context
import UserContext from "./context/UserContext"

//Header and Footer
import Header from "./layout/Header"
import Footer from "./layout/Footer";

//FirecaseConfig
import { FirebaseConfig } from "./Config/FirebaseConfig";

//Initialize Firebase
initializeApp(FirebaseConfig)


const App = () => {

  //null, not empty object coz it makes errors while checking authentication
  const [user, setUser] = useState(null)

  return(
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={ { user, setUser } }>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer/>
      </UserContext.Provider>
    </Router>
  )

}

export default App