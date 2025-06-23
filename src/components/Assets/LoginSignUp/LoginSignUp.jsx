import React, { useState, useEffect } from 'react';
import './LoginSignUp.css';

const LoginSignUp = () => {
    const [action, setAction] = useState("Log In");

    
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: ''
    });

  
    useEffect(() => {
        setFormValues({
            username: '',
            email: '',
            password: ''
        });
    }, [action]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Log In" ? <div></div> :
                    <div className="input">
                        <input
                            type='text'
                            name="username"
                            placeholder='Username'
                            value={formValues.username}
                            onChange={handleInputChange}
                        />
                    </div>
                }

                <div className="input">
                    <input
                        type='email'
                        name="email"
                        placeholder='Email'
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input">
                    <input
                        type='password'
                        name="password"
                        placeholder='Password'
                        value={formValues.password}
                        onChange={handleInputChange}
                    />
                </div>

                {action === "Sign Up" ? <div></div> :
                    <div className="forget-password">
                        Lost Password? <a href='#'>Click here</a>
                    </div>
                }

                <div className="submit-button">
                    <div
                        className={action === "Log In" ? "submit gray" : "submit"}
                        onClick={() => setAction("Sign Up")}
                    >
                        Sign Up
                    </div>

                    <div
                        className={action === "Sign Up" ? "submit gray" : "submit"}
                        onClick={() => setAction("Log In")}
                    >
                        Log In
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignUp;
