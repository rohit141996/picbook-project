import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css';

const Profile = () => {
    const [friendsearch, setFriendsearch] = useState('')

    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem('user'))
    const welcomeName = JSON.parse(localStorage.getItem('user'))

    if ((data.profilepic)) {
        const base64string = btoa(String.fromCharCode(...new Uint8Array(welcomeName.profilepic.img.data.data)))


        return (
            <div>
                <img style={{ zIndex: '-1', opacity: '0.5', position: 'fixed', width: '100%', height:'100%'}} src="https://whimsical-faloodeh-ffce3d.netlify.app/black.jpg " alt="" />
                <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ width: '80%' }}>
                        <li className='li'><Link className='link' to='/update_profile' >Update-Account</Link></li>
                        <li className='li'><Link className='link' to='/posts' >Posts</Link></li>
                        <li className='li'><Link className='link' to='/friendreq' >Friend-Requests</Link></li>
                        <li className='li'><Link className='link' to='/friend_list' >Friend-List</Link></li>
                        <li className='li'><Link className='link' to='/search_friends' >Search-Friends</Link></li>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '20%' }}>
                        <li className='li'><Link className='link' to='/' onClick={() => { localStorage.clear(); navigate('/'); window.location.reload() }}>Logout</Link></li>
                    </div>
                </div>
                <center>
                    <h1 style={{ color: 'white', marginBottom: '0px' }}>Welcome</h1>
                    <h1 style={{ color: 'white', margin: '0px', textShadow: '0px 0px 3px black' }}>-=]| {(welcomeName.name)} |[=-</h1>
                    <div>
                        <br />
                        <img style={{ width: '200px', height: "170px", border: 'white 2px solid' }} src={`data:img/png;base64,${base64string}`} alt="asd" />
                    </div>
                </center>
                <div style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                    <p style={{ textShadow: '0px 0px 20px black', marginLeft: '45%', zIndex: '-1', color: 'white', position: 'fixed', bottom: '10px', fontWeight: 'bolder', fontSize: '30px' }}>PicBook</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <img style={{ zIndex: '-1', opacity: '0.5', position: 'fixed', width: '100%', height:'100%'}} src="https://whimsical-faloodeh-ffce3d.netlify.app/black.jpg " alt="" />
                <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ width: '80%' }}>
                        <li className='li'><Link className='link' to='/update_profile' >Update-Account</Link></li>
                        <li className='li'><Link className='link' to='/posts' >Posts</Link></li>
                        <li className='li'><Link className='link' to='/friendreq' >Friend-Requests</Link></li>
                        <li className='li'><Link className='link' to='/friend_list' >Friend-List</Link></li>
                        <li className='li'><Link className='link' to='/search_friends' >Search-Friends</Link></li>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '20%' }}>
                        <li className='li'><Link className='link' to='/' onClick={() => { localStorage.clear(); navigate('/'); window.location.reload() }}>Logout</Link></li>
                    </div>
                </div>
                <center>
                    <h1 style={{ color: 'white', marginBottom: '0px' }}>Welcome</h1>
                    <h1 style={{ color: 'white', margin: '0px', textShadow: '0px 0px 3px black' }}>-=]| {(welcomeName.name)} |[=-</h1>
                    <div>
                    </div>
                </center>
                <div style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                    <p style={{ textShadow: '0px 0px 20px black', marginLeft: '45%', zIndex: '-1', color: 'white', position: 'fixed', bottom: '10px', fontWeight: 'bolder', fontSize: '30px' }}>PicBook</p>
                </div>
            </div>
        )
    }
}
export default Profile;