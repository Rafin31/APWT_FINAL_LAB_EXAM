import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const Back = () => {
    const history = useHistory();
    return (
        <Link onClick={history.goBack} >Back</Link>
    );

}
export default Back;