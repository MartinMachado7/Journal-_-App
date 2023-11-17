import { Box, Toolbar } from "@mui/material"
import { NavBar, SsideBar } from "../componets";

export const JournalLayout = ({children}) => {

    const DrawerWidth = 240;

  return (
    <Box sx={{display: 'flex'}}>
       
        <NavBar DrawerWidth={DrawerWidth}/>            
        <SsideBar DrawerWidth={DrawerWidth}/>
        {/* <Drawer
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
              // open={open}
        > */}
            

        {/* </Drawer> */}

    
        <Box 
        component={'main'}
        sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar/>
            {children}
        </Box>
    </Box>
)
}
