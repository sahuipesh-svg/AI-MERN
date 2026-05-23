import React from "react";
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Home from './pages/Home'
import useGetCurrentUser from './hooks/useGetCurrentUser'
import {useSelector} from 'react-redux'
import dashboard from './pages/Dashboard'
import WebsiteEditor from "./pages/Editor";
import Generate from './pages/Generate'
import LiveSite from "./pages/LiveSite";

export const serverUrl="http://localhost:8000"
function App(){
  useGetCurrentUser()
  const {userData}=useSelector(state=>state.user)
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={userData?<DashBoard/>:<Home/>}/>
        <Route path='/generate'element={userData?<Generate/>:<Home/>}/>
        <Route path='/editor/:id' element={userData?<WebsiteEditor/>:<HOme/>}/>
        <Route path='/site/:id' element={<LiveSite/>}/>
      </Routes>
     </BrowserRouter>
  );
  
}

export default App;