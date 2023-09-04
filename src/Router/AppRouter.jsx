import { Navigate, Route, Routes } from "react-router-dom";
import { AothRoutes } from "../Auth/routes/AothRoutes";
import { JournalRoutes } from "../Journal/routes/JournalRoutes";
import { ChekingAuth } from "../Ui/";
import { useCheckAuth } from "../Hooks";


export const AppRouter = () => {

  const status =useCheckAuth()
    

    if (status=== 'checking'){
    return <ChekingAuth/>}
  return (
    <>
<Routes>
        {
         (status==='authenticated')
          ?<Route path="/*" element ={<JournalRoutes/>}/>
        
          :<Route path="/auth/*" element ={<AothRoutes />}/>
        
        }
            <Route path="/*" element={<Navigate to='/auth/login'/> }/>
            {/* <Route path="/auth/*" element ={<AothRoutes />}/> */}
            {/* <Route path="/*" element ={<JournalRoutes/>}/> */}
        </Routes>
    </>    
)
}
