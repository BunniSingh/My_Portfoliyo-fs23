import React from 'react'

const About = () => {
    return (
        <>
            <section id="about">
                <div className="about container">
                    <div className="col-left">
                        <div className="about-img">
                            <img src="./assets/images/img-2.JPG" alt="img"/>
                        </div>
                    </div>
                    <div className="col-right">
                        <h1 className="section-title">About <span>me</span></h1>
                        <h2>Front End Developer</h2>
                        <p>
                            I am a passionate Frontend Developer with a strong focus on crafting intuitive and visually engaging user experiences using HTML, CSS, JavaScript, and modern frameworks like React. My positive mindset and problem-solving approach drive me to tackle challenges head-on, ensuring that every project I work on is not only functional but also optimized for performance and user satisfaction. <br/>
                                I pride myself on being honest and dedicated to my work, always striving to deliver clean, maintainable code that meets both client and user needs. I believe in continuous learning and improvement, and I'm committed to staying updated with the latest trends and best practices in web development.
                        </p>

                        <a href="./assets/my-cv.pdf" download className="cta">Download Resume</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About