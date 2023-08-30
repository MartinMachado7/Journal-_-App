import { singInWithGoogle, registerUserWithEmailPassword } from "../../firebase/Providers"
import { checkingCredentials, logout, login} from "./"

export const checkingAuthentication = (email, Password) =>{
    
    return async( dispatch )=> {
        dispatch( checkingCredentials() );
    }
} 

export const startGoogleSingIn = () => {
    return async(dispatch) =>{
        dispatch( checkingCredentials() );
 
       const result = await singInWithGoogle();
        if (!result.ok ) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
 
    }
}
export const  startCreatingUserWithEmailPassword = ({email, password,displayName}) => {
return async(dispatch) => {

    dispatch(checkingCredentials());

    const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

    if (!ok) return dispatch(logout ({errorMessage}))
    
    dispatch(login({uid, email, displayName, photoURL}));
    }    
}