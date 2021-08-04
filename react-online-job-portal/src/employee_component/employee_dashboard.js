import { Link } from 'react-router-dom';
import Back from '../back';


function Employee_Dashbord() {
    return (
        <div>
            <h1>Welcome to Dashbord || Employee</h1>
            <div className="links">
                <Link to='/job_list'>Job List</Link> |
                <Link to='/add_job'>Add Job</Link> |
                <Back />
            </div>

        </div>
    );
}

export default Employee_Dashbord;