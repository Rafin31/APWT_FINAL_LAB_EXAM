import { Link } from 'react-router-dom';


const List = ({ id, Company_Name, Employee_Name, Contact }) => {
    return (
        <>
            <tr>
                <td> {id} </td>
                <td> {Employee_Name} </td>
                <td> {Company_Name} </td>
                <td> {Contact} </td>
                <td>  <button >Delete</button> </td>
                <td> <Link to={`/edit/${id}`}> Edit </Link>  </td>
            </tr>
            {/* onClick=() => deletecallback(id) */}

        </>
    );
}

export default List;