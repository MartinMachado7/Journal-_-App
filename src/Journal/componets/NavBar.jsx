import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../store/auth";
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { StarnavBart } from "../../store/journal";


export const NavBar = ({DrawerWidth = 240}) => {

    const dispatch =useDispatch();

    // const {open, setOpen} = useSelector( state => state.journalBar)
    const onLogout =() => {
        dispatch(startLogout());
    };
    // const dishandleDrawerOpen =()=>{
    //     dispatch(StarnavBart())
    // };

  return (
    <AppBar
    position="fixed"
    sx={{
        width: {sm: `calc(100% - ${ DrawerWidth}px)`},
        ml: {sm: `${DrawerWidth }px`}
    }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container direction={'row'} justifyContent='space-between' alignItems='center'>
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
