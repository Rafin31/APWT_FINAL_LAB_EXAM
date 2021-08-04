import { Link } from 'react-router-dom';
import { useState } from 'react';
import Back from '../back';
import List from './list';

const Employee_list = ({ data }) => {

    return (
        <div>

            <Back />
            <table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Employee Name</th>
                    <th>Comapany Name</th>
                    <th>Contact</th>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                {

                    data.map((user) => {
                        return <List key={user.id} {...user} />
                    })
                }
            </table>
        </div>
    );
};

export default Employee_list;