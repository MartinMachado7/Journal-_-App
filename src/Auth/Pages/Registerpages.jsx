import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as Routerlink  } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../Layout/AuthLayout";
import { UseForm } from "../../Hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formDate = {
  email:'',
  password:'',
  displayName:'',
}

const formValidations = {
  email: [ (value)=> value.includes('@'), 'el correo no tiene @.'],
  password: [ (value)=> value.length >= 6, 'el numero de caracteres no es igual a 6.'],
  displayName: [ (value)=> value.length >= 1, 'no sé puede tener la casilla vacía.'],
}

export const Registerpages = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage}=  useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, displayName, email, password, onInputChange, 
    isFormvalid, displayNameValid, emailValid, passwordValid, 
   } = UseForm(formDate, formValidations);
 
  const onSubmit = (event) =>{
  event.preventDefault();
  setFormSubmitted(true); 

  if (!isFormvalid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
    console.log(formState);
}
  return (
    
    <AuthLayout title="Crear Cuenta">
        <form onSubmit={onSubmit}>
        <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
              label ='Nombre de usuario'
              type="text"
              placeholder="Name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
              label ='CORREO'
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}              
              />
            </Grid>

              <Grid item xs={12} sx={{mt: 2}}>
                <TextField
                label ='CONTRASEÑA'
                type="password"
                placeholder="contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
                />
              </Grid>
              
              <Grid container spacing={ 2 } sx={{ mb: 2, mt:1}}>
                <Grid 
                   item 
                   xs={ 12 }
                   display={!!errorMessage ? '': 'none'} 
                   >
                      <Alert severity="error">{errorMessage}</Alert>
                </Grid>

                <Grid item xs={ 12 } >
                  <Button 
                  disabled={isCheckingAuthentication}
                  type="submit"
                  variant='contained' 
                  fullWidth>
                    Crear cuenta
                  </Button>
                </Grid>

                {/* <Grid item xs={ 12 } sm={6}>
                  <Button variant='contained' fullWidth>
                    <Google/>
                    <Typography sx={{ml:1}}>Google</Typography>
                  </Button>
                </Grid> */}
               </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Typography sx={{ mr: 1}}>¿ya tienes cuenta?</Typography>
                  <Link component={ Routerlink } color ='inherit' to='/Auth/Login'>
                  Ir al login
                  </Link>
                </Grid>
            
          </Grid>
        </form>

    </AuthLayout>


  )
}
