"use client"

import { useState } from "react";
import { loginUser } from "./actions";
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        console.log("clicked")
        e.preventDefault();
        
        const judge = await loginUser(username, password)
        console.log("username:", username)
        console.log("password:", password)

        if (judge){
            console.log("login success!")
            router.push("/")
        } else {
            console.log("login failure"!)
        }
    }

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>ログイン</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
