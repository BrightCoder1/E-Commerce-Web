const Login = () => {
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
                    <h2>Login</h2>
                    <br />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />

                    <button type="submit" className="submit-btn">Sign Up</button>
                    <p className="signin-link">
                        Already have an account? <a href="/register">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
