const BottomFooter = () => {
    return (
        <div className="bottom-footer">
            <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Our Services</li>
                    <li>Privacy Policy</li>
                    <li>Contact us</li>
                    <li>Support</li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Services</h3>
                <ul>
                    <li>Cloths</li>
                    <li>Toys</li>
                    <li>Games</li>
                    <li>Books</li>
                    <li>Electronic Items</li>
                    <li>Home Items</li>
                </ul>
            </div>

            <div className="footer-column copyright">
                <p>© Copyright 2025 Bright Coder.</p>
                <p>Developed by Vishal Kumar</p>
                <p>
                    Youtube Link : <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Bright Coder</a>
                </p>
            </div>
        </div>
    );
};

export default BottomFooter;
