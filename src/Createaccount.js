import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css';

const Createaccount = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')

    const createaccount = async () => {
        let result = await fetch('https://picbook-testing-tryone.onrender.com/create_account', {
            method: 'post',
            body: JSON.stringify({ username, password, email, name }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result1 = await result.json()
        const result2 = JSON.stringify(result1)
        if((result1.message)){
            alert(result2)
            navigate('/login')
        }else{
            alert(result2)
        }
    }

    return (
        <div style={{alignItems:'center', alignContent:'center'}}>
            <li className='li'><Link className='link' to='/login' >Login</Link></li>
            <center>
                <h1 style={{ textShadow: '0px 0px 20px black', color: 'white', marginTop: '0px' }}>Create account on</h1>
                <h1 style={{ textShadow: '0px 0px 20px black', color: 'white', fontSize: '40px' }}
                    onClick={()=>navigate('/')}>PicBook</h1>
                <input type="text" name='name' placeholder='enter first & last name'
                    onChange={(e) => { setName(e.target.value) }} 
                    style={{border:'2px black solid', borderRadius:'5px', width:'250px', textAlign:'center', fontSize:'17px', marginBottom:'3px', height:'30px'}}/><br />
                <input type="text" name='username' placeholder='enter username'
                    onChange={(e) => { setUsername(e.target.value) }}
                    style={{border:'2px black solid', borderRadius:'5px', width:'250px', textAlign:'center', fontSize:'17px', marginBottom:'3px', height:'30px'}}/><br />                
                <input type="text" name='email' placeholder='enter email'
                    onChange={(e) => { setEmail(e.target.value) }}
                    style={{border:'2px black solid', borderRadius:'5px', width:'250px', textAlign:'center', fontSize:'17px', marginBottom:'3px', height:'30px'}}/><br />
                <input type="password" name='password' placeholder='enter password'
                    onChange={(e) => { setPassword(e.target.value) }}
                    style={{border:'2px black solid', borderRadius:'5px', width:'250px', textAlign:'center', fontSize:'17px', marginBottom:'3px', height:'30px'}}/><br />                
                <button type='submit' onClick={createaccount}
                    style={{width:'250px', fontSize:'20px', border:'solid black 2px'}}>Create-Account</button>
            </center>
        </div>
    )

}

export default Createaccount;