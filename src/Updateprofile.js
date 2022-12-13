import React, { useEffect, useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import './App.css';

const Updateprofile = () => {
    const data = localStorage.getItem('user');
    const data1 = JSON.parse(data);

    const navigate = useNavigate()

    const [username, setUsername] = useState((data1.username))
    const [password, setPassword] = useState('')
    const [name, setName] = useState((data1.name));
    const [email, setEmail] = useState((data1.email))

    const [profilePic, setProfilePic] = useState()

    const updateprofile = async () => {
        let result = await fetch('https://picbook-testing-tryone.onrender.com/update_profile', {
            method: 'post',
            body: JSON.stringify({ username, password, email, name }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let result1 = await result.json();
        if ((result1.name)) {
            alert(`name is updated to: ${(result1.name)}. email is updated to: ${(result1.email)}. password is updated.`)
            localStorage.clear();
            localStorage.setItem('user', (JSON.stringify(result1)))
        } else {
            alert(JSON.stringify(result1))
        }
    }

    const propicupload = async () => {
        const formdata = new FormData();
        await formdata.append('username', (data1.username));
        await formdata.append('profilepic', profilePic);
        let result = await fetch('https://picbook-testing-tryone.onrender.com/profilepic', {
            method: 'post',
            body: formdata
        })
        const result1 = await result.json()
        if (result1[0]) {
            const result2 = result1[0];
            localStorage.setItem('user', (JSON.stringify(result2)))
            window.location.reload();
            alert('profile picture is changed. go to profile and check once.')
        } else {
            alert(JSON.stringify(result1))
        }
    }

    return (
        <div>
            <img style={{ zIndex: '-1', opacity: '0.5', position: 'fixed', width: '100%', height:'100%'}} src="https://whimsical-faloodeh-ffce3d.netlify.app/black.jpg " alt="" />
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ width: '80%' }}>
                    <li className='li'><Link className='link' to='/' >Profile-Page</Link></li>
                    <li className='li'><Link className='link' to='/posts' >Posts</Link></li>
                    <li className='li'><Link className='link' to='/friend_list' >Friend-List</Link></li>
                    <li className='li'><Link className='link' to='/friendreq' >Friend-Requests</Link></li>
                    <li className='li'><Link className='link' to='/search_friends' >Search-Friends</Link></li>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '20%' }}>
                    <li className='li'><Link className='link' to='/' onClick={() => { localStorage.clear(); navigate('/'); window.location.reload() }}>Logout</Link></li>
                </div>
            </div>
            <center>
                <h1 style={{ textShadow: '0px 0px 20px black', color: 'white', marginTop: '40px' }}>Update profile details</h1>
            </center>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'inline-block', marginRight: '10px', padding: '10px', border: '2px white solid', borderRadius: '5px' }}>
                    <center>
                        <p style={{ margin: '0px', color: 'white' }}>(upload image below or equal to 100kb)</p>
                        <p style={{ margin: '0px', color: 'white' }}>for compressing images, <a style={{ margin: '0px', color: 'white' }} href="https://compressjpeg.online/compress-jpeg-to-100kb" target="_blank" rel="noopener noreferrer">Click Here</a></p><br/>
                        <input type="file" name='profilepic' onChange={(e) => setProfilePic(e.target.files[0])} style={{ width: '200px', backgroundColor: 'white' }} /><br />
                        <button className='submitter' style={{
                            width: '160px', height: '166px',
                            border: '2px solid black', fontSize: '15px', fontWeight: '600', borderRadius: '10px'
                        }}
                            onClick={propicupload}>
                            <p>Upload</p>
                            <p>Profile-Picture</p>
                        </button>
                    </center>
                </div>
                <div style={{ display: 'inline-block' }}>
                    <center>
                        <input style={{ width: '300px', textAlign: 'center', height: '25px', margin: '2px', border: '2px solid black', borderRadius: '4px' }} type="text" name='name' placeholder='enter first & last name'
                            value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                        <input style={{ width: '300px', textAlign: 'center', height: '25px', margin: '2px', border: '2px solid black', borderRadius: '4px' }} type="text" name='username' placeholder='username' value={username} /><br />
                        <input style={{ width: '300px', textAlign: 'center', height: '25px', margin: '2px', border: '2px solid black', borderRadius: '4px' }} type="text" name='email' placeholder='enter email'
                            value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                        <input style={{ width: '300px', textAlign: 'center', height: '25px', margin: '2px', border: '2px solid black', borderRadius: '4px' }} type="password" name='password' placeholder='enter password'
                            onChange={(e) => { setPassword(e.target.value) }} /><br />
                        <button className='submitter' style={{ height: '30px', width: '150px', fontWeight: '700', border: '2px solid black' }} type='submit' onClick={updateprofile}>Update-Profile</button>
                    </center>
                </div>
            </div>
            <div style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                <p style={{ textShadow: '0px 0px 20px black', marginLeft: '45%', zIndex: '-1', color: 'white', position: 'fixed', bottom: '10px', fontWeight: 'bolder', fontSize: '30px' }}>PicBook</p>
            </div>
        </div>
    )
}
export default Updateprofile;
