import React from 'react'

const Footer = () => {
    return (
        <>
            <section id="footer">
                <div className="footer container">
                    <div className="brand">
                        <h1><span>B</span>anti <span>K</span>umar <span>S</span>ingh</h1>
                    </div>
                    <h2>Your Complete Web Solution</h2>
                    <div className="social-icon">
                        <div className="social-item">
                            <a href="https://www.linkedin.com/in/banti-kr-singh/"><img src="./assets/icons/linkedin.png" /></a>
                        </div>
                        <div className="social-item">
                            <a href="https://github.com/BunniSingh"><img src="./assets/icons/github.png" /></a>
                        </div>
                        <div className="social-item">
                            <a href="https://x.com/JaikyYadav16/status/1837377102552735983"><img src="./assets/icons/twitter.png" /></a>
                        </div>
                        <div className="social-item">
                            <a href="#"><img src="./assets/icons/youtube.png" /></a>
                        </div>
                    </div>
                    <p>Copyright © 2024 BUnny. All rights reserved</p>
                </div>
            </section>
        </>
    )
}

export default Footer