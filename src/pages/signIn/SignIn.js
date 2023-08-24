import axios from 'axios';
import './SignIn.css';
import React from 'react';
import {useState} from 'react';

function SignIn() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');

    const postData = async (e) => {
        e.preventDefault();

        const data = {
            login: login,
            password: password,
            email: email,
            phoneNumber: phoneNumber,
            fullName: fullName,
        };
        const url = 'http://cepbep.ddns.net:2500/api/users/register';
        try {
            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='main'>
            <form className='form'>
                <input
                    value={login}
                    onChange={(event) => setLogin(event.target.value)}
                    placeholder='Enter your login...'
                    type='text'
                    name='login'
                />
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder='Enter your password...'
                    type='password'
                    name='password'
                />
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder='example@gmail.com'
                    type='text'
                    name='email'
                />
                <input
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    placeholder='Your phone number...'
                    type='number'
                    name='phoneNumber'
                />
                <input
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder='Enter your full name...'
                    type='text'
                    name='fullName'
                />
                <button className='submit-btn' onClick={postData}>
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default SignIn;