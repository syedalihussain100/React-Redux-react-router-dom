import { useContext } from 'react';
import { AuthContext } from './Autentication/AuthContext';
import { Redirect } from "react-router-dom";

function Admin() {
    const { isLogedin } = useContext(AuthContext);
    if (!isLogedin) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <h1> Admin </h1>
        </div>
    )
}



export default Admin