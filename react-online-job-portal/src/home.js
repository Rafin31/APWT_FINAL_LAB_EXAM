import { useState } from "react";
import { useHistory } from "react-router";
function Home() {

    const [varify, setVarify] = useState({
        'user_name': '',
        'password': '',
    });

    const history = useHistory();


    const onchange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setVarify((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (varify.user_name == varify.password) {
            if (varify.user_name == 'admin') {
                history.push('/Admin');
            } else if (varify.user_name == 'employee') {
                history.push('/Employee');
            } else {
                alert("Wrong user Name");
            }
        } else {
            alert("password did not match");
        }

    }

    return (

        <div className="Home_Button">
            <form onSubmit={onSubmit} >
                <table>
                    <tr>
                        <td>User Name</td>
                        <td><input onChange={onchange} name='user_name' type="text" /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input onChange={onchange} name='password' type="password" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input name='login' type="submit" value='login' /></td>
                    </tr>
                </table>
            </form>

        </div>

    );
}

export default Home;