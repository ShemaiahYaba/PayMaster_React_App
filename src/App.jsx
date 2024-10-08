// import React from 'react';
import Verification from "./Verification/Verification.jsx"
import Welcome from "./Welcome/Welcome.jsx"
import {BrowserRouter as  Router, Routes,Route }from 'react-router-dom'
import Pin from './Pin/Pin.jsx';
import Retype from './Pin/Retype.jsx';
import Setup from './Setup/Setup.jsx';
import Start from './Begin/Start.jsx';
import Account from './Account/Account.jsx';
import Set from './Set/Set.jsx';
import Home from './Hom/Home.jsx';
import History from './Historiy/History.jsx';
import Transfer from './Transfer/Transfer.jsx';
import Top from './TopUp/Top.jsx';
import TopUp from './TopUp/TopUp.jsx';
import Profile from './Profile/Profile.jsx';


function App() {
  

  return (
    <>
      
      <Router>
      <Routes>

       <Route path='/' element={ <Welcome/> }/> 
       <Route path='/Verify' element={ <Verification/> }/>
       <Route path='/pin' element={<Pin/>}/>
       <Route path='/retype' element={<Retype/>}/>
       <Route path='/setup' element={<Setup/>}/>
       <Route path='/start' element={<Start/>}/>
       <Route path ='/account' element={<Account/> }/>
       <Route path ='/set' element={<Set/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/history' element={<History/>}/>
       <Route path='/transfer' element={<Transfer/>}/>
       <Route path='/Top' element={<Top/>}/>
       <Route path='/Topup' element={<TopUp/>}/>
       <Route path='/profile' element={<Profile/>}/>

      </Routes>
     
     </Router>



     
    </>
  )
}

export default App
