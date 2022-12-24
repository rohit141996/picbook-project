import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css';

const Home = () => {

    var asd = document.getElementById('titleee');
      asd.style.transition = '1000ms';
      var xyz = ()=>{
        setInterval(()=>{
          setTimeout(() => {
            asd.style.color = 'indigo';
              setTimeout(() => {
                asd.style.color = 'blue';
                  setTimeout(() => {
                    asd.style.color = 'green'
                      setTimeout(() => {
                        asd.style.color= 'yellow'
                          setTimeout(() => {
                            asd.style.color = 'orange'
                              setTimeout(() => {
                                asd.style.color = 'red'
                              }, 1000);
                          }, 1000);
                      }, 1000);
                  }, 1000);
              }, 1000);
          }, 1000);
        }, 7000)
      }
    asd.style.color = xyz();

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

