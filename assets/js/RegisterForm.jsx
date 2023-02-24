import React, { useState } from "react";

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const validateForm = () => {
        const usernameRegex = /^\w{6,}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return (
            usernameRegex.test(username) && passwordRegex.test(password)
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            setMessage(
                "Invalid username or password. Username must be at least 6 characters and password must be at least 6 characters and contain at least 1 digit."
            );
            return;
        }
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                if (response.ok) {
                    setMessage("User registered successfully!");
                } else {
                    setMessage("Registration failed!");
                }
            })
            .catch((error) => {
                console.error(error);
                setMessage("Registration failed!");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <button type="submit">Register</button>
            <p>{message}</p>
        </form>
    );
}

export default RegisterForm;