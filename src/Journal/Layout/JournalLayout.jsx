import { Box, Toolbar } from "@mui/material"
import { NavBar, SsideBar } from "../componets";

export const JournalLayout = ({children}) => {

    const DrawerWidth = 240;

  return (
    <Box sx={{display: 'flex'}}>
        
        <NavBar DrawerWidth={DrawerWidth}/>

        <SsideBar DrawerWidth={DrawerWidth}/>
    
        <Box 
        component={'main'}
        sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar/>
            {/* toolbar */}
            {children}
        </Box>
    </Box>
)
}
