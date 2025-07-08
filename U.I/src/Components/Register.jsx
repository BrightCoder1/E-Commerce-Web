import React from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const Register = () => {
    return (
        <div className="signup-container">
            <div className="signup-left">
                <h2>Fast, Efficient and Productive</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <div className="bottom-links">
                    <div className="lang-select">
                        <img src="https://flagcdn.com/w40/us.png" alt="US Flag" />
                        <span>English</span>
                    </div>
                    <div className="footer-links">
                        <a href="#">Terms</a>
                        <a href="#">Plans</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>

            <div className="signup-right">
                <form className="signup-form">
                    <h2>Sign Up</h2>
                    <p className="form-subtext">Fill All Information for create new Account</p>

                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Enter OTP" required name='otp' />

                    <input type="password" placeholder="Password" required />
                    <small className="note">Use 8 or more characters with a mix of letters, numbers & symbols.</small>
                    <input type="password" placeholder="Repeat Password" required />

                   

                    <button type="submit" className="submit-btn">Sign Up</button>
                    <p className="signin-link">
                        Already have an account? <a href="/login">Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
