import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css'

const user = JSON.parse(localStorage.getItem('user'))
let checker;
if (user) {
    checker = (user.friend.length > 0)
}
console.log(checker)



const Deletefriend = () => {
    const navigate = useNavigate()
    return (
        <div>
            <img style={{ zIndex: '-1', opacity: '0.5', position: 'fixed', width: '100%', height:'100%'}} src="https://whimsical-faloodeh-ffce3d.netlify.app/black.jpg " alt="" />
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ width: '80%' }}>
                    <li className='li'><Link className='link' to='/update_profile' >Update-Account</Link></li>
                    <li className='li'><Link className='link' to='/posts' >Posts</Link></li>
                    <li className='li'><Link className='link' to='/friendreq' >Friend-Requests</Link></li>
                    <li className='li'><Link className='link' to='/' >Profile-Page</Link></li>
                    <li className='li'><Link className='link' to='/search_friends' >Search-Friends</Link></li>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '20%' }}>
                    <li className='li'><Link className='link' to='/' onClick={() => { localStorage.clear(); navigate('/'); window.location.reload() }}>Logout</Link></li>
                </div>
            </div>
            <center>
                <h1 style={{ color: 'white', marginTop: '40px' }}>Remove friends</h1>
                <p style={{ color: 'white', backgroundColor: 'black', display:'inline-block', margin:'0px'}}>click on a friend to remove him/her from your friend-list.</p>
                {
                    checker ?
                        (<div style={{ maxWidth: '500px' }}>
                            {
                                user.friend.map(e => {
                                    return <div style={{ color: 'white' }}>
                                        <p style={{ marginRight: '20px', fontSize: '22px', margin: '0px' }} onClick={async () => {
                                            const specificFriendUsername = e.username;
                                            const ownUsername = user.username
                                            const friendProfile = await fetch('https://picbook-testing-tryone.onrender.com/remove_friend', {
                                                method: 'post',
                                                body: JSON.stringify({ ownUsername, specificFriendUsername }),
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                }
                                            }); const friendProfile1 = await friendProfile.json()
                                            localStorage.setItem('user', JSON.stringify(friendProfile1))
                                            sessionStorage.removeItem('friendposts')
                                            window.location.reload();
                                        }}>{e.name}</p>
                                    </div>
                                })
                            }
                            <button onClick={() => { navigate('/friend_list') }}
                                style={{ height: '40px', fontSize: '30px', color: 'white', marginBottom: '10px', border: '4px white solid', backgroundColor: 'black', borderRadius: '5px', fontWeight: 'bold' }}
                            >Back to Friend-List</button>
                        </div>)
                        :
                        (<div><p style={{ color: 'white' }}>You dont have any friends yet. try searching and then sending request to add some.</p><br />
                            <button onClick={() => { navigate('/friend_list') }}
                                style={{ height: '40px', fontSize: '30px', color: 'white', marginBottom: '10px', border: '4px white solid', backgroundColor: 'black', borderRadius: '5px', fontWeight: 'bold' }}
                            >Back to Friend-List</button>
                        </div>)
                }
            </center>
            <div style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                <p style={{ textShadow: '0px 0px 20px black', marginLeft: '45%', zIndex: '-1', color: 'white', position: 'fixed', bottom: '10px', fontWeight: 'bolder', fontSize: '30px' }}>PicBook</p>
            </div>
        </div>
    )
}

export default Deletefriend;
