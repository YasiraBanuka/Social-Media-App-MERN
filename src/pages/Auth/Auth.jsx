import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

        {/* <Signup/> */}
        <Login/>
    </div>
  )
}

function Login() {
    return (
        <div className="a-right">
            <form action="" className="infoForm authForm">

                <h3>Sign In</h3>

                <div>
                    <input type="text" className="infoInput"
                    placeholder='Username' name='username' />
                </div>

                <div>
                    <input type="password" className="infoInput"
                    placeholder='Password' name='password' />
                </div>

                <div>
                    <span style={{fontSize: "12px"}}>Don't have an account. Sign Up!</span>
                    <button className="button infoButton">Sign In</button>
                </div>

            </form>
        </div>
    )
}

function Signup() {
    return (
        <div className="a-right">
            <form action="" className="infoForm authForm">

                <h3>Sign Up</h3>

                <div>
                    <input type="text" placeholder='First Name' 
                    className='infoInput' name='firstname' />
                    <input type="text" placeholder='Last Name' 
                    className='infoInput' name='lastname' />
                </div>

                <div>
                    <input type="text" className="infoInput" 
                    placeholder='Username' name='username'/>
                </div>

                <div>
                    <input type="text" className="infoInput"
                    placeholder='Password' name='password' />
                    <input type="text" className="infoInput"
                    placeholder='Confirm Password' name='confirmpass' />
                </div>

                <div>
                    <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
                </div>
                <button className="button infoButton" type='submit'>Sign In</button>

            </form>
        </div>
    )
}

export default Auth