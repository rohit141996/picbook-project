import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const Friendprofile = () => {
    const friendProfile = JSON.parse(sessionStorage.getItem('friendposts'))
    const postschecker = (friendProfile.data.length !== 0)
    let posts;
    if (friendProfile.data.length !== 0) {
        posts = friendProfile.data
    }

    const navigate = useNavigate();
    return (
        <div>
            <img style={{ zIndex: '-1', opacity: '0.5', position: 'fixed', width: '100%' }} src="https://whimsical-faloodeh-ffce3d.netlify.app/black.jpg " alt="" />
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ width: '80%' }}>
                    <li className='li'><Link className='link' to='/update_profile' >Update-Account</Link></li>
                    <li className='li'><Link className='link' to='/posts' >Posts</Link></li>
                    <li className='li'><Link className='link' to='/friendreq' >Friend-Requests</Link></li>
                    <li className='li'><Link className='link' to='/' >Profile-Page</Link></li>
                    <li className='li'><Link className='link' to='/friend_list' >Friend-List</Link></li>
                    <li className='li'><Link className='link' to='/search_friends' >Search-Friends</Link></li>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '20%' }}>
                    <li className='li'><Link className='link' to='/' onClick={() => { localStorage.clear(); navigate('/'); window.location.reload() }}>Logout</Link></li>
                </div>
            </div>
            <center>
                <h1 style={{ color: 'white' }}>"{friendProfile.details.name}'s" Profile</h1>
                {
                    postschecker ?
                        (<div style={{ maxWidth: '856px' }}>
                            {
                                posts.map(e => {
                                    const base64string = btoa(String.fromCharCode(...new Uint8Array(e.img.data.data)))
                                    return <img src={`data:img/png;base64,${base64string}`} alt="image posts"
                                        style={{ width: '200px', height: '170px', margin: '5px', border: '2px white solid', borderRadius: '5px' }}
                                        className='posts' />
                                })
                            }
                        </div>)
                        :
                        (<div style={{ color: 'white' }}>
                            your friend hasn't uploaded any posts yet.
                        </div>)
                }
            </center>
            <div style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                <p style={{ textShadow: '0px 0px 20px black', marginLeft: '45%', zIndex: '-1', color: 'white', position: 'fixed', bottom: '10px', fontWeight: 'bolder', fontSize: '30px' }}>PicBook</p>
            </div>
        </div>
    )
}
export default Friendprofile;
