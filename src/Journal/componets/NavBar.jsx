import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"


export const NavBar = ({DrawerWidth}) => {
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

                    <IconButton color="error">
                        <LogoutOutlined/>
                    </IconButton>

            </Grid>

        </Toolbar>
    </AppBar>
  )
}
