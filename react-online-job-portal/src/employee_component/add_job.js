import React from 'react';
import Back from '../back';

const Add_job = () => {
    return (
        <div>
            <table>
                <tr>
                    <td>Product Name</td>
                    <td><input name='prodyct_name' type="text" /></td>
                </tr>
                <tr>
                    <td>Quantity</td>
                    <td><input name='quantity' type="number" /></td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td><input name='price' type="number" /></td>
                </tr>
                <tr>

                    <td></td>
                    <td>
                        <button name='submit' type="submit">Add</button> |
                        <Back />
                    </td>

                </tr>

            </table>
        </div>
    );
};

export default Add_job;