import { singInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, LogoutFirebase } from "../../firebase/Providers"
import { checkingCredentials, logout, login} from "./"

export const checkingAuthentication = () =>{
    
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

    const result = await registerUserWithEmailPassword({email, password, displayName});

    if (!result.ok) return dispatch(logout ({errorMessage}));
    
    dispatch(login(result));
    }    
}

export const startLoginWithEmailPassword =({email, password}) =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
       const result = await loginWithEmailPassword({email, password});
        console.log(result);

        if (!result.ok ) return dispatch(logout(result));
        dispatch(login(result));
    }
}

export const startLogout =()=>{
    return async(dispatch) =>{
        await LogoutFirebase();

        dispatch(logout({}));

    }  
}