import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import './SignUp.css';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }
    const handleConfirmPass = e => {
        setConfirmPass(e.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const submitUser = e => {
        e.preventDeafult()
        if (pass !== confirmPass) {
            setError('your password doesnt match')
            return;
        }
        if (pass.length < 6) {
            setError('you must be should be 6 charekter')
        }

        createUserWithEmailAndPassword(email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    return (
        <div>
            <div className='login'>
                <div>
                    <h2 className='title'>Sign Up</h2>
                    <form onSubmit={submitUser}>
                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input onBlur={handleEmail} type="email" name="" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Password</label>
                            <input onBlur={handlePass} type="password" name="" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Confirm-Password</label>
                            <input onBlur={handleConfirmPass} type="confirm-password" name="" id="" required />
                        </div>
                        <input className='submit' type="submit" value="Login" />
                    </form>
                    <p className='p'>If you have already an account -- <Link to='/login' element={<Login />}>Go to Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;