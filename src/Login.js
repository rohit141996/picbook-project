import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate, useRouteLoaderData } from 'react-router-dom'
import './App.css';

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loaderrr, setLoaderrr] = useState('')

    const loginn = async () => {
        setLoaderrr('Loading profile...please wait')

        ///////////////////////////////////////// FOR SAVING THE LOGIN INFORMATION IN THE LOCALSTORAGE //
        const result = await fetch('https://picbook-testing-tryone.onrender.com/login', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result1 = await result.json();
        const result2 = JSON.stringify(result1);
        
        
        ///////////////////////////////////////// FOR STORING THE POSTS DATA IN THE SESSIONSTORAGE // 
        let data = await fetch('https://picbook-testing-tryone.onrender.com/loadposts',{
            method:'post',
            body:JSON.stringify({username}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        let data1 =await data.json();
        let data2 =JSON.stringify(data1);
        localStorage.setItem('posts', data2)

        //////////////////////////////////////////////////////
        if ((result1.username)) {
            localStorage.setItem('user', result2);
            navigate('/');
            window.location.reload();
        } else {
            setLoaderrr('')
            localStorage.clear();
            alert(result2)
        }
    }

    return (
        <>
            <li className='li'><Link className='link' to='/create_account' >Create-Account</Link></li>
            <center>
                <h1 style={{ textShadow: '0px 0px 20px black', color: 'white', marginTop: '0px' }}>Login to</h1>
                <h1 style={{ textShadow: '0px 0px 20px black', color: 'white', fontSize: '40px' }}
                    onClick={()=>navigate('/')}>PicBook</h1>
                <input type="text" name='username' placeholder='enter username'
                    onChange={(e) => { setUsername(e.target.value) }} 
                    style={{border:'2px black solid', borderRadius:'5px', width:'250px', textAlign:'center', fontSize:'17px', marginBottom:'3px', height:'30px'}}/><br />
                <input type="password" name='password' placeholder='enter password'
                    onChange={(e) => { setPassword(e.target.value) }} 
                    style={{border:'2px black solid', borderRadius:'5px', width:'250px', textAlign:'center', fontSize:'17px', marginBottom:'3px', height:'30px'}}/><br />
                <button type='submit' onClick={loginn}
                style={{width:'250px', fontSize:'20px', border:'solid black 2px'}}>Login</button><br/>
                <h3 style={{color:'white'}}>{loaderrr}</h3>
            </center>
        </>
    )
}

export default Login;
