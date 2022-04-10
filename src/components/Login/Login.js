import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state.from.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePass = event => {
        setPass(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleSignIn = event => {
        signInWithEmailAndPassword(email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    return (
        <div className='login'>
            <div>
                <h2 className='title'>Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input onBlur={handleEmail} type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePass} type="password" name="" id="" required />
                    </div>
                    <p>{error?.message}</p>
                    {
                        loading && <p>loading..........</p>
                    }
                    <input className='submit' type="submit" value="Login" />
                </form>
                <p className='p'>If you new Click here -- <Link to='/signup' element={<SignUp />}>Create an account</Link> </p>
            </div>
        </div>
    );
};

export default Login;