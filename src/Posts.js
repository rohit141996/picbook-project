import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './App.css';

const Posts = () => {
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
            <div style={{ display: 'flex', width:'100%' }}>
                <div style={{width:'80%'}}>
                    <li className='li'><Link className='link' to='/update_profile' >Update-Profile</Link></li>
                    <li className='li'><Link className='link' to='/' >Profile-Page</Link></li>
                    <li className='li'><Link className='link' to='/friendreq' >Friend-Requests</Link></li>
                    <li className='li'><Link className='link' to='/friend_list' >Friend-List</Link></li>
                    <li className='li'><Link className='link' to='/search_friends' >Search-Friends</Link></li>
               </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width:'20%'}}>
                    <li className='li'><Link className='link' to='/' onClick={() => { localStorage.clear(); navigate('/'); window.location.reload() }}>Logout</Link></li>
                </div>
            </div>
            <center>
                <h1 style={{ color: 'white' }}>...moments pass, MEMORIES stay!</h1>
                <p style={{ margin: '0px', color: 'white' }}>(upload image below or equal to 100kb)</p>
                <p style={{ margin: '0px', color: 'white' }}>for compressing images, <a style={{ margin: '0px', color: 'white' }} href="https://compressjpeg.online/compress-jpeg-to-100kb" target="_blank" rel="noopener noreferrer">Click Here</a></p>
                <input id="postupload" type="file" name="postupload" onChange={(e) => setPostFile(e.target.files[0])} style={{ backgroundColor: 'white' }} /><br />
                <button style={{ width: '150px', height: '30px', marginTop: '5px' }} onClick={postUploader}>Upload-new-Pic</button>
                <div style={{ marginTop: '10px', maxWidth: '856px' }}>
                    {
                        data1.map(e => {
                            const base64string = btoa(String.fromCharCode(...new Uint8Array(e.img.data.data)))
                            return (
                                <img id={e.img.name} className='posts' src={`data:img/png;base64,${base64string}`} alt="image"
                                    style={{ width: '200px', height: '170px', margin: '5px', border: '2px white solid', borderRadius: '5px' }} />
                            )
                        })
                    }<br />
                    <button onClick={() => { navigate('/deletepost') }} style={{ width: '200px', height: '40px', fontSize: '30px', color: 'red', marginBottom: '10px', border: '4px white solid', backgroundColor: 'black', borderRadius: '5px', padding: '0px', fontWeight: 'bold' }}>Delete Posts</button>
                </div>
            </center>
            <div style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                <p style={{ textShadow: '0px 0px 20px black', marginLeft: '45%', zIndex: '-1', color: 'white', position: 'fixed', bottom: '10px', fontWeight: 'bolder', fontSize: '30px' }}>PicBook</p>
            </div>
        </div>
    )
}

export default Posts;