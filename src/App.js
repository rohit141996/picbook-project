import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Createaccount from './Createaccount';
import Deletepost from './Deletepost';
import Deletefriend from './Detelefriend';
import Friendlist from './Friendlist';
import Friendprofile from './Friendprofile';
import Friendreq from './Friendreq';
import Home from './Home';
import Login from './Login';
import Posts from './Posts';
import Profile from './Profile';
import Searchfriends from './Searchfriends';
import Updateprofile from './Updateprofile';
const asd = './friendsimage.jpg'

function App() {
  const auth = localStorage.getItem('user')

  return (
    <div style={{width:'100%'}}>
      <div>
        <img className='main-image' src="https://whimsical-faloodeh-ffce3d.netlify.app/friendsimage.jpg" alt="" />
      </div>
      <BrowserRouter>
        {
          (!auth) ?
            (<Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/create_account' element={<Createaccount />} />
            </Routes>)
            :
            (<Routes>
              <Route path='/search_friends' element={<Searchfriends />}/>
              <Route path='/' element={<Profile />} />
              <Route path='/update_profile' element={<Updateprofile />} />
              <Route path='/posts' element={<Posts/>} />
              <Route path='/deletepost' element={<Deletepost/>} /> 
              <Route path='/friendreq' element={<Friendreq/>}/> 
              <Route path='/friend_list' element={<Friendlist/>}/>
              <Route path='/friendprofile' element={<Friendprofile/>}/>
              <Route path='/deletefriend' element={<Deletefriend/>}/>
            </Routes>)
        }
      </BrowserRouter>
    </div>
  )
}

export default App;
