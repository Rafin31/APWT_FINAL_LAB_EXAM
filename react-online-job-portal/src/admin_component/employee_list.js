
import Back from '../back';

const Employee_list = ({ data }) => {



    console.log(data);
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
                    data.map((item) =>
                        <tr>
                            <td> {item.id} </td>
                            <td> {item.Employee_Name} </td>
                            <td> {item.Company_Name} </td>
                            <td> {item.Contact} </td>
                            <td>  <a href="http://">Edit</a> </td>
                            <td> <a href="http://">Delete</a>  </td>
                        </tr>

                    )
                }
            </table>
        </div>
    );
};

export default Employee_list;