import {ComponentType, FC, PropsWithChildren, useContext, useEffect} from "react";
import AuthContext from "authContext";
import {useNavigate} from "react-router-dom";

const WithAuth = <P extends any>(WrappedComponent: ComponentType<P>): FC<P> => (props) => {
    const navigate = useNavigate()
    const {authenticated, setAuthenticated} = useContext(AuthContext)
    useEffect(() => {
        if (!authenticated) {
            navigate('/')
        }
    }, [authenticated])

        // @ts-ignore
    return <WrappedComponent {...props}/>
}

export default WithAuth
