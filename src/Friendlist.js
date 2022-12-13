import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css'

const user = JSON.parse(localStorage.getItem('user'))
let checker;
if (user) {
    checker = (user.friend.length > 0)
}
console.log(checker)



const Friendlist = () => {
    const navigate = useNavigate()
    return (
        <div>
            <img style={{ zIndex: '-1', opacity: '0.5', position: 'fixed', width: '100%' }} src="https://whimsical-faloodeh-ffce3d.netlify.app/black.jpg " alt="" />
            <div style={{ display: 'flex', width:'100%' }}>
                <div style={{width:'80%'}}>
                <li className='li'><Link className='link' to='/update_profile' >Update-Account</Link></li>
                <li className='li'><Link className='link' to='/posts' >Posts</Link></li>
                <li className='li'><Link className='link' to='/friendreq' >Friend-Requests</Link></li>
                <li className='li'><Link className='link' to='/' >Profile-Page</Link></li>
                <li className='li'><Link className='link' to='/search_friends' >Search-Friends</Link></li>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width:'20%'}}>
                    <li className='li'><Link className='link' to='/' onClick={() => { localStorage.clear(); navigate('/'); window.location.reload() }}>Logout</Link></li>
                </div>
            </div>
            <center>
                <h1 style={{ color: 'white', marginTop: '40px' }}>Friend-List</h1>
                {
                    checker ?
                        (<div style={{ maxWidth: '500px' }}>
                            {
                                user.friend.map(e => {
                                    return <div style={{ color: 'white' }}>
                                        <p style={{ marginRight: '20px', fontSize: '22px', margin: '0px' }} onClick={async () => {
                                            const specificFriendUsername = e.username;
                                            const ownUsername = user.username
                                            const friendProfile = await fetch('https://picbook-testing-tryone.onrender.com/friendprofile', {
                                                method: 'post',
                                                body: JSON.stringify({ ownUsername, specificFriendUsername }),
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                }
                                            }); const friendProfile1 = await friendProfile.json()
                                            sessionStorage.setItem('friendposts', JSON.stringify(friendProfile1))
                                            navigate('/friendprofile')
                                        }}>{e.name}</p>
                                    </div>
                                })
                            }
                            <button onClick={() => { navigate('/deletefriend') }}
                                style={{ height: '40px', fontSize: '30px', color: 'red', marginBottom: '10px', border: '4px white solid', backgroundColor: 'black', borderRadius: '5px', fontWeight: 'bold' }}
                            >Remove a Friend</button>
                        </div>)
                        :
                        (<p style={{ color: 'white' }}>You dont have any friends yet. try searching and then sending request to add some.</p>)
                }
            </center>
            <div style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                <p style={{ textShadow: '0px 0px 20px black', marginLeft: '45%', zIndex: '-1', color: 'white', position: 'fixed', bottom: '10px', fontWeight: 'bolder', fontSize: '30px' }}>PicBook</p>
            </div>
        </div>
    )
}

export default Friendlist;
