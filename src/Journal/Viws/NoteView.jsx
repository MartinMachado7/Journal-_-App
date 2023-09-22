import { useSelector } from "react-redux"
import { UseForm } from "../../Hooks/useForm"
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../componets"
import { useMemo } from "react"


export const NoteView = () => {
    
    const{ active:note }=useSelector( state => state.journal);
    
    const {body, title, date ,onInputChange, formState}=UseForm( note );

    const dateString = useMemo(()=> {
        const newDate = new Date(date);

        return newDate.toUTCString();
    },[date])

   return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center'
        sx={{mb: 1}}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>

            <Grid item>
                <Button color="secondary" sx={{padding: 2}}>
                  <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                     Guardar  
                </Button>
                
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresar texto"
                    label="Título"
                    sx={{ border: 'none', mb:1 }}     
                    name="title"
                    value={title}
                    onChange={onInputChange}

                    />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió el día de hoy? "
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                    />
            </Grid>

            <ImageGallery/>
            {/* <Typography> Todos los hombre desean saber por naturaleza </Typography> */}

        </Grid> 
   )
}
 