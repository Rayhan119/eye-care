import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//auht provider
import AuthProvider from "./Context/AuthProvider";
//private route
import PrivateRoute from "./Context/PrivateRoute/PrivateRoute";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Doctor from "./Pages/Doctors/Doctor";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Details from "./Pages/Services/DynamicDetails/Details";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SignUp from "./Pages/signUp/SignUp";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/doctor">
              <Doctor></Doctor>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
