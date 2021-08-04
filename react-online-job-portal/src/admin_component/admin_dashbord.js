import { Link } from 'react-router-dom';
import Back from '../back';

function Dashbord() {
    return (
        <div>
            <h1>Welcome to Dashbord || ADMIN</h1>
            <div className="links">
                <Link to='/employee_list'>Employee List</Link> |
                <Link to='/add_employee'>Add Employee</Link> |
                <Back />
            </div>

        </div>
    );
}

export default Dashbord;