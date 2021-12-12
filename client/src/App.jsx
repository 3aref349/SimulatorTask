//
// ─── REACT ──────────────────────────────────────────────────────────────────────
//

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
// ─── UI ─────────────────────────────────────────────────────────────────────────
//

import "./App.css";
import { MediaContextProvider } from "./utilities/Artsy";

//
// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
//
import Navbar from "./shared/Navbar";



//
// ─── CUSTOM ROUTES ──────────────────────────────────────────────────────────────
//

import RouteUser from "./routes/RouterUser";
import RouteGuest from "./routes/RouteGuest";

import Landing from "./components/Landing";


//
// ─── ACTIONS ────────────────────────────────────────────────────────────────────
//

import { loadUser } from "./redux/auth";

import Simulator from "./components/Simulator/Simulator";


function App() {
  const dispatch = useDispatch();
  // ────────────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // ────────────────────────────────────────────────────────────────────────────────

  return (
    <Router>
      <MediaContextProvider>
        <Navbar>
          <Switch>
            {/* NORMAL ROUTES */}
            <Route path="/" component={Simulator} exact />
            {/* GUEST ROUTES */}
            {/* <RouteGuest path="/login" component={Login} exact />
            <RouteGuest path="/register" component={Register} exact /> */}

            {/* USER ROUTES
            <RouteUser path="/addarchive" component={Simulator} exact /> 
            <RouteUser path="/thanks" component={Finish} exact /> 
            <RouteUser path="/actualcost" component={ActualCost} exact /> 
            <RouteUser component={Actual} path="/actual/:id" exact/>
     
     <RouteUser component={Input} path="/input/:id" exact/>

     <RouteUser component={ReslultByProject} path="/resultbyproject/:id" exact/> 
     <RouteUser path="/test" component={Finish} exact />  */}

     {/* <RouteUser path="/ac" component={Test} exact /> 
     <RouteUser component={Actual} path="/actual/:id" exact/>
     <RouteUser path="/test" component={TestTwo} exact /> 
     <RouteUser component={Input} path="/input/:id" exact/>
     <RouteUser path="/dashboard" component={DashboardInputs} exact /> 
     <RouteUser path="/result" component={Result} exact /> 
     <RouteUser component={ReslultByProject} path="/resultbyproject/:id" exact/> */}
            {/* <RouteUser path="/dashboard" component={Main} exact />
            <RouteUser component={Edit} path="/edit/:id" exact/> */} 
          </Switch>
        </Navbar>
      </MediaContextProvider>
    </Router>
  );
}

export default App;
