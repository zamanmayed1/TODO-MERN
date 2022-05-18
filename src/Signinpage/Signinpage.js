import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';


const SgninPage = () => {
    const [signInWithgoogle, guser, loading, error] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth)
    let navigate = useNavigate();

    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <div class="lds-circle"><div></div></div>
    }


    return (
        <div className='signin'>
            <div className='header'>
                <img src="https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU" alt="" />
                <h2>To Do List</h2>
            </div>
            <button onClick={() => signInWithgoogle()} className='signinbtn'>
                <img src="https://img.icons8.com/fluency/344/google-logo.png" alt="" />
                Continue With Google
            </button>

        </div>
    );
};

export default SgninPage;