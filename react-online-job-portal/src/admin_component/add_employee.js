import React from 'react';
import Back from '../back';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';


const Add_employee = () => {
    //const [return_result, setReturn] = useState([]);
    const history = useHistory();
    const [employee, setEmployee] = useState({
        'employee_name': '',
        'company_name': '',
        'contact': '',
        'user_name': '',
        'password': '',
    });

    const onchange = (e) => {

        const value = e.target.value;
        const name = e.target.name;

        setEmployee((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })




    }

    const onSubmit = async (e) => {
        //console.warn(employee);
        e.preventDefault();
        let result = await fetch("http://127.0.0.1:8000/api/addEmployee", {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        //window.open("/Admin");
        //history.push('/');
        window.location = '/employee_list';

    }

    return (
        <div>

            <form onSubmit={onSubmit} >

                <table>
                    <tr>
                        <td>Employee Name</td>
                        <td><input onChange={onchange} name='employee_name' type="text" /></td>
                    </tr>
                    <tr>
                        <td>Company Name</td>
                        <td><input onChange={onchange} name='company_name' type="text" /></td>
                    </tr>
                    <tr>
                        <td>Contact Number</td>
                        <td><input onChange={onchange} name='contact' type="text" /></td>
                    </tr>
                    <tr>
                        <td>User Name</td>
                        <td><input onChange={onchange} name='user_name' type="text" /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input onChange={onchange} name='password' type="text" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input name='submit' type="submit" value="Add" /> |
                            <Back />
                        </td>
                    </tr>

                </table>
            </form>

        </div>
    );
};

export default Add_employee;