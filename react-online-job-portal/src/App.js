
import Home from './home';
import Add_employee from './admin_component/add_employee';
import Dashbord from './admin_component/admin_dashbord';
import Employee_list from './admin_component/employee_list';

import Job_list from './employee_component/job_list';
import Employee_Dashbord from './employee_component/employee_dashboard';
import Add_job from './employee_component/add_job';

//import { useState } from 'react';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (

    <Router>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/Admin'>
          <Dashbord />
        </Route>

        <Route path='/employee_list'>
          <Employee_list />
        </Route>

        <Route path='/add_employee'>
          <Add_employee />
        </Route>

        <Route path='/Employee'>
          <Employee_Dashbord />
        </Route>

        <Route path='/job_list'>
          <Job_list />
        </Route>

        <Route path='/add_job'>
          <Add_job />
        </Route>


      </Switch>
    </Router>

  );
}
export default App;
