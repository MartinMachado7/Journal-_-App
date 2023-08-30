import { Route, Routes } from "react-router-dom";
import { AothRoutes } from "../Auth/routes/AothRoutes";
import { JournalRoutes } from "../Journal/routes/JournalRoutes";


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/auth/*" element ={<AothRoutes />}/>
            <Route path="/*" element ={<JournalRoutes/>}/>
            
        </Routes>
    </>    
)
}
