import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './App.css';

const Friendreq = () => {
    const navigate = useNavigate();
    const reqChecker = JSON.parse(localStorage.getItem('user'))
    const data = reqChecker.friendreq;
    let auth = reqChecker.friendreq.length > 0;

    return (
        <div>
            <img style={{ zIndex: '-1', opacity: '0.5', position: 'fixed', width: '100%', height:'100%'}} src="https://whimsical-faloodeh-ffce3d.netlify.app/black.jpg " alt="" />
            <div style={{ display: 'flex', width:'100%' }}>
                <div style={{width:'80%'}}>
                <li className='li'><Link className='link' to='/update_profile' >Update-Account</Link></li>
                <li className='li'><Link className='link' to='/posts' >Posts</Link></li>
                <li className='li'><Link className='link' to='/' >Profile-Page</Link></li>
                <li className='li'><Link className='link' to='/friend_list' >Friend-List</Link></li>
                <li className='li'><Link className='link' to='/search_friends' >Search-Friends</Link></li>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width:'20%'}}>
                    <li className='li'><Link className='link' to='/' onClick={() => { localStorage.clear(); navigate('/'); window.location.reload() }}>Logout</Link></li>
                </div>
            </div>
            <center>
                <h1 style={{ paddingTop: '30px', color: 'white' }}>Friend Requests.</h1>
                <div>
                    {
                        auth ?
                            (<div>
                                {
                                    data.map(e => {
                                        return <div style={{ border: '2px solid white', maxWidth: '700px', padding: '5px 30px', alignItems: 'center' }}>
                                            <button onClick={async () => {
                                                const username = reqChecker.username
                                                const reqSenderUsername = e.username
                                                const rejectProcess = await fetch('https://picbook-testing-tryone.onrender.com/rejectfriendreq', {
                                                    method: 'post',
                                                    body: JSON.stringify({ username, reqSenderUsername }),
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }
                                                }); const rejectProcess1 = await rejectProcess.json()
                                                localStorage.setItem('user', (JSON.stringify(rejectProcess1)))
                                                window.location.reload();
                                            }}>Reject</button>
                                            <h3 style={{ display: 'inline', padding: '0px 20px', color: 'white' }}>{e.name}</h3>
                                            <p style={{ display: 'inline', padding: '0px 20px', color: 'white' }}>{e.email}</p>
                                            <button onClick={async () => {
                                                const username = reqChecker.username
                                                const reqSenderUsername = e.username
                                                const acceptProcess = await fetch('https://picbook-testing-tryone.onrender.com/acceptfriendreq', {
                                                    method: 'post',
                                                    body: JSON.stringify({ username, reqSenderUsername }),
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }
                                                }); const acceptProcess1 = await acceptProcess.json()
                                                localStorage.setItem('user', JSON.stringify(acceptProcess1))
                                                window.location.reload();
                                            }}>Accept</button>
                                        </div>
                                    })
                                }
                            </div>) :
                            <div>
                                <p style={{ color: 'white' }}>No friend requests to show.</p>
                            </div>
                    }
                </div>
            </center>
            <div style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                <p style={{ textShadow: '0px 0px 20px black', marginLeft: '45%', zIndex: '-1', color: 'white', position: 'fixed', bottom: '10px', fontWeight: 'bolder', fontSize: '30px' }}>PicBook</p>
            </div>
        </div>
    )
}

export default Friendreq;