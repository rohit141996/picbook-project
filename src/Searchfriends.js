import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './App.css'

const Searchfriends = () => {
    const navigate = useNavigate
    const auth1 = sessionStorage.getItem('searched')
    const [friendSearch, setFriendSearch] = useState('');

    const searchFriend = async () => {
        let result = await fetch('https://picbook-testing-tryone.onrender.com/searchfriends', {
            method: 'post',
            body: JSON.stringify({ friendSearch }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result1 = await result.json();
        sessionStorage.setItem('searched', (JSON.stringify(result1)))
        window.location.reload();
    }

    const data = JSON.parse(sessionStorage.getItem('searched'));


    const cleaner = () => {
        sessionStorage.clear();
        window.location.reload()
    }


    return (
        <div>
            <img style={{ zIndex: '-1', opacity: '0.5', position: 'fixed', width: '100%', height:'100%'}} src="https://whimsical-faloodeh-ffce3d.netlify.app/black.jpg " alt="" />
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ width: '80%' }}>
                    <li className='li'><Link className='link' to='/update_profile' >Update-Account</Link></li>
                    <li className='li'><Link className='link' to='/' >Profile-Page</Link></li>
                    <li className='li'><Link className='link' to='/posts' >Posts</Link></li>
                    <li className='li'><Link className='link' to='/friendreq' >Friend-Requests</Link></li>
                    <li className='li'><Link className='link' to='/friend_list' >Friend-List</Link></li>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '20%' }}>
                    <li className='li'><Link className='link' to='/' onClick={() => { localStorage.clear(); navigate('/'); window.location.reload() }}>Logout</Link></li>
                </div>
            </div>
            <center>
                <div style={{ display: 'block' }}>
                    <input style={{ marginRight: '5px', width: '300px', height: '25px', fontSize: '20px', marginTop: '40px' }}
                        type="text" placeholder='Search friends' onChange={(e) => setFriendSearch(e.target.value)} />
                    <button style={{ height: '31px', fontSize: '20px' }} onClick={searchFriend} >Search</button>
                </div>
                {
                    (auth1) ? (
                        <div>
                            {
                                data.map(e => {
                                    if (e.profilepic.img.data) {
                                        const base64string = btoa(String.fromCharCode(...new Uint8Array(e.profilepic.img.data.data)))
                                        return (<div style={{ display: 'flex', justifyContent: 'center', maxWidth: '800px' }}>
                                            <div>
                                                <img id="propicpro" style={{ width: '30px', maxHeight: '30px', border: 'solid 1px white' }} src={`data:img/png;base64,${base64string}`} alt="profile picture" />
                                            </div>
                                            <div>
                                                <p className="found-friends" id={e.username} style={{ color: 'white', display: 'inline', fontSize: '23px' }}
                                                > Name: {e.name}</p><p style={{ display: 'inline', color: 'white', border: 'solid white 1px', margin: '0px 10px' }}> username: {e.username} </p>
                                                <button style={{ height: '22px' }} className="sendReqButton" onClick={
                                                    async () => {
                                                        const foundFriend = (e.username)
                                                        const usernameee = JSON.parse(localStorage.getItem('user'))
                                                        const username = usernameee.username;
                                                        let result = await fetch('https://picbook-testing-tryone.onrender.com/sendfreq', {
                                                            method: 'post',
                                                            body: JSON.stringify({ foundFriend, username }),
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            }
                                                        }); let result1 = await result.json();
                                                        alert(JSON.stringify(result1))
                                                    }
                                                }>Send Friend Request</button><br />
                                            </div>
                                        </div>)
                                    } else {
                                        return (<><p className="found-friends" id={e.username} style={{ color: 'white', display: 'inline', fontSize: '23px' }}
                                            onClick={async () => { const asd = await document.getElementById(`${e.username}`); alert(asd.getAttribute('id')) }}
                                        > Name: {e.name} </p><p style={{ display: 'inline', color: 'white', border: 'solid white 1px', margin: '0px 10px' }}> username: {e.username} </p>
                                            <button className="sendReqButton" onClick={
                                                async () => {
                                                    const foundFriend = (e.username)
                                                    const usernameee = JSON.parse(localStorage.getItem('user'))
                                                    const username = usernameee.username;
                                                    let result = await fetch('https://picbook-testing-tryone.onrender.com/sendfreq', {
                                                        method: 'post',
                                                        body: JSON.stringify({ foundFriend, username }),
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        }
                                                    }); let result1 = await result.json();
                                                    alert(JSON.stringify(result1))
                                                }
                                            }>Send Friend Request</button><br /></>)
                                    }
                                })
                            }
                            <button style={{ height: '40px', marginTop: '10px', width: '300px', fontSize: '25px' }} onClick={cleaner}>Clear Search Results</button>
                        </div>
                    ) : (<div style={{ color: "white" }}>No results found. Search above to get results.</div>)
                }
            </center>
            <div style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                <p style={{ textShadow: '0px 0px 20px black', marginLeft: '45%', zIndex: '-1', color: 'white', position: 'fixed', bottom: '10px', fontWeight: 'bolder', fontSize: '30px' }}>PicBook</p>
            </div>
        </div>)
};

export default Searchfriends;