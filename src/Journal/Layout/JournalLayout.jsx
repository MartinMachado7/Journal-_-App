import { useState } from "react";
import { Box, Drawer, IconButton, Toolbar, useTheme } from "@mui/material"
import { NavBar, SsideBar } from "../componets";
import { MenuOutlined } from "@mui/icons-material";



export const JournalLayout = ({children}) => {
  const DrawerWidth = 240;
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {

    setOpen(false);
  };
  

    return (
      <Box sx={{display: 'flex'} }>
       
        <NavBar 
        DrawerWidth={DrawerWidth}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        sx={{
          width: {sm: `calc(100% - ${ DrawerWidth}px)`},
          ml: {sm: `${DrawerWidth }px`}
          }}
         >

        </NavBar>            
        <Drawer
            sx={{
              width: DrawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DrawerWidth,
                boxSizing: 'border-box',
              },
            }}
              // variant="persistent"
              anchor="left"
              open={open}
        >
            
            <SsideBar 
            DrawerWidth={DrawerWidth}
            handleDrawerClose={handleDrawerClose}
            >

            </SsideBar>
        </Drawer>

    
        <Box 
        open={open}
        component={'main'}
        sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar/>
            {children}
        </Box>
    </Box>
)
}
