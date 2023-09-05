import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth";


export const NavBar = ({DrawerWidth = 240}) => {

    const dispatch =useDispatch();
    const onLogout =() => {
        dispatch(startLogout());
    }

  return (
    <AppBar
    position="fixed"
    sx={{
        width: {sm: `calc(100% - ${ DrawerWidth}px)`},
        ml: {sm: `${DrawerWidth}px`}
    }}
    >
        <Toolbar>
            <IconButton>
                <MenuOutlined/>
            </IconButton>

            <Grid container direction={'row'} justifyContent='space-around' alignItems='center'>
                    <Typography variant="h6" noWrap component='div'>JournalApp</Typography>

                    <IconButton 
                    color="error"
                    onClick={onLogout}>
                        <LogoutOutlined/>
                    </IconButton>

            </Grid>

        </Toolbar>
    </AppBar>
  )
}
