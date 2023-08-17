import React from "react";
import Authentication from "../Authentication";
import { useEffect,useState } from "react";


export default function AuthPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async  () => {
        const token = await Authentication.login(email, password);
        if (token) {
            localStorage.setItem('token', token);
        }
    };

    const handleRegistration = async () => {
        // Call the authentication component with registration details
        Authentication.register(email, password);
    };

    return (
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegistration}>Register</button>
        </div>
    );

}