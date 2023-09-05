import { useSelector } from "react-redux"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot,  } from "@mui/icons-material"

export const SsideBar= ({DrawerWidth}) => {

    const {displayName} =useSelector(state => state.auth);

  return (
    <Box
        component='nav'
        sx={{width: {sm: DrawerWidth}, flexShrink:{sm:0}}}
    >
        <Drawer
            variant="permanent" // temporary
            open
            sx={{
                display: {xs:'block' },
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: DrawerWidth}
            }}
        >
            <Toolbar>
                 <Typography variant="h6" noWrap component='div'>
                    {displayName}
                 </Typography>
            </Toolbar>
           <Divider />

           <List>
            {
                ['january', 'febrary', 'march', 'april'].map(Text => (
                    <ListItem key={Text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={Text} />
                                <ListItemText secondary ={'martin master of masters.'} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
           </List>

        </Drawer>
    </Box>
  )
}
