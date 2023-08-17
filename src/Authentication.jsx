import React from "react";

const auth_API = "https://localhost:7121/api/User/";

const Authentication = {
    login: async (email, password) => {
        try {
            const response = await fetch(auth_API + "loginWithEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);
                
                localStorage.setItem('token', token);
            } else {
                const errorText = await response.text();
                console.error("Login error:", errorText);
                // Handle login error
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    },

    register: async (email, password) => {
        try {
            const response = await fetch(auth_API + "register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                console.log("Registration successful");
                // Handle successful registration logic
            } else {
                const errorText = await response.text();
                console.error("Registration error:", errorText);
                // Handle registration error
            }
        } catch (error) {
            console.error("Registration error:", error);
        }
    },
};

export default Authentication;