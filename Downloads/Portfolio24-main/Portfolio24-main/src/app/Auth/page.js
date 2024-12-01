"use client"

import React, { useState, useEffect } from 'react';
import { auth } from '../API/firebase.config';
import "../globals.css"
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from '@firebase/auth';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email, password);
        } catch (error) {
            setError(error.message);
        }
    };
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                router.push('/addProj'); // Redirect to addproj page if user is logged in
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-400" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-400" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Login;
