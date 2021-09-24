import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import GoogleRegister from './pages/GoogleRegister/GoogleRegister';

const  App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/google_register" component={GoogleRegister} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
