import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css';

const Home = () => {
    useEffect(()=>{
        
    },[])

    return (
        <div style={{ height: '100%' }}>
            <div>
                <li className='li'><Link className='link' to='/create_account' >Create-Account</Link></li>
                <li className='li'><Link className='link' to='/login'>Login</Link></li>
            </div>

            <center>
                <h1 style={{ textShadow: '0px 0px 20px black', color: 'white', marginTop: '100px' }}>welcome</h1>
                <h1 style={{ textShadow: '0px 0px 20px black', color: 'white' }}>to</h1>
                <h1 id='titleee' style={{ textShadow: '0px 0px 20px black', color: 'white', fontSize: '100px', marginTop: '110px' }}>PicBook</h1>
                <h3 style={{ textShadow: '0px 0px 20px black', color: 'white' }}>...moments pass, MEMORIES stay!</h3>
            </center>
            
        </div>

    )
}
export default Home;

