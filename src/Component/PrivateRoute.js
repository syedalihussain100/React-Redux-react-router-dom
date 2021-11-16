import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './Autentication/AuthContext'

function PrivateRoute({ children, ...rest }) {
    const { isLogedin } = useContext(AuthContext);

    return (
        <Route {...rest} render={(props) => {
            return isLogedin ? children : <Redirect path="/" />
        }} />
    )
}

export default PrivateRoute
