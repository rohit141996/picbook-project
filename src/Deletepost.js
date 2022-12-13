import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './App.css';

const Deletepost = () => {
    const [postFile, setPostFile] = useState();
    const navigate = useNavigate();

    const username = (JSON.parse(localStorage.getItem('user'))).username

    /////////////////////////////////////////////////////////////////////////////
    const postUploader = async () => {
        ///////////////////////////// THIS ROUTE IS FOR UPLOADING PICTURES ///////
        const formdata = new FormData();
        formdata.append('username', username);
        formdata.append('postupload', postFile)
        let result = await fetch('https://picbook-testing-tryone.onrender.com/postupload', {
            method: 'post',
            body: formdata
        })
        const result1 = await result.json();
        const result2 = JSON.stringify(result1)
        alert(`${result2}`)
        //////////////////////////// THIS ROUTE IS FOR LOADING THE UPLOADED PICTURES /////
        let data = await fetch('https://picbook-testing-tryone.onrender.com/loadposts', {
            method: 'post',
            body: JSON.stringify({ username }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data1 = await data.json();
        let data2 = JSON.stringify(data1);
        localStorage.removeItem('posts')
        localStorage.setItem('posts', data2)
        window.location.reload()
    }
    ////////////////////////////////////////////////////////////////////////////////////////////

    const data = localStorage.getItem('posts');
    const data1 = JSON.parse(data);
    ///////////////////////////////////////////////////////// FOR DELETING IMAGES //////////////

    return (
        <div>
            <img style={{ zIndex: '-1', opacity: '0.5', position: 'fixed', width: '100%', height:'100%'}} src="https://whimsical-faloodeh-ffce3d.netlify.app/black.jpg " alt="" />
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ width: '80%' }}>
                    <li className='li'><Link className='link' to='/update_profile' >Update-Profile</Link></li>
                    <li className='li'><Link className='link' to='/' >Profile-Page</Link></li>
                    <li className='li'><Link className='link' to='/friendreq' >Friend-Requests</Link></li>
                    <li className='li'><Link className='link' to='/friend_list' >Friend-List</Link></li>
                    <li className='li'><Link className='link' to='/search_friends' >Search-Friends</Link></li>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '20%' }}>
                    <li className='li'><Link className='link' to='/' onClick={() => { localStorage.clear(); navigate('/'); window.location.reload() }}>Logout</Link></li>
                </div>
            </div>
            <center>
                <button onClick={() => { navigate('/posts') }} style={{ width: '250px', height: '50px', fontSize: '30px', color: 'white', marginBottom: '10px', marginTop: '30px', border: '4px white solid', backgroundColor: 'black', borderRadius: '5px', padding: '0px', fontWeight: 'bold' }}>Back to Posts</button>
                <div style={{ marginTop: '10px', maxWidth: '900px' }}>
                    {
                        data1.map(e => {
                            const base64string = btoa(String.fromCharCode(...new Uint8Array(e.img.data.data)))
                            return (
                                <img id={e.name} className='posts' src={`data:img/png;base64,${base64string}`} alt="image"
                                    style={{ width: '200px', height: '170px', margin: '5px', border: '7px red solid' }}
                                    onClick={async () => {
                                        const chosenToDelete = document.getElementById(`${e.name}`);
                                        const name = chosenToDelete.getAttribute(`id`)
                                        const result = await fetch('https://picbook-testing-tryone.onrender.com/deletepost', {
                                            method: 'post',
                                            body: JSON.stringify({ name, username }),
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        });
                                        const result1 = await result.json();
                                        const result2 = JSON.stringify(result1);
                                        localStorage.removeItem('posts');
                                        localStorage.setItem('posts', result2);
                                        window.location.reload();
                                    }} />
                            )
                        })
                    }
                </div>
            </center>
            <div style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                <p style={{ textShadow: '0px 0px 20px black', marginLeft: '45%', zIndex: '-1', color: 'white', position: 'fixed', bottom: '10px', fontWeight: 'bolder', fontSize: '30px' }}>PicBook</p>
            </div>
        </div>
    )
}

export default Deletepost;