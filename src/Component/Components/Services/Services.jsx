import React from 'react'

const Services = () => {
    return (
        <>
            <section id="services">
                <div className="services container">
                    <div className="service-top">
                        <h1 className="section-title">Serv<span>i</span>ces</h1>
                        <p>
                            I specialize in creating responsive, user-friendly websites and web applications using modern technologies like HTML, CSS, and JavaScript. My expertise includes custom web development, ensuring seamless functionality across all devices and browsers, as well as optimizing performance for faster load times and improved SEO. I design intuitive UI/UX, enhance websites with smooth animations and interactions, and integrate third-party APIs for added functionality such as real-time data and payment gateways. My focus is on delivering scalable, visually appealing, and high-performing solutions that meet your unique business needs.
                        </p>
                    </div>
                    <div className="service-bottom">
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Responsive Web Design</h2>
                            <p>I create responsive and mobile-friendly websites that provide an optimal user experience across all devices, ensuring your site looks great on desktops, tablets, and smartphones.</p>
                        </div>
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Custom Web Development</h2>
                            <p>I build dynamic, interactive, and custom web applications tailored to your specific needs using the latest technologies like HTML5, CSS3, JavaScript, and frameworks like React.</p>
                        </div>
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>UI/UX Design</h2>
                            <p>I design intuitive and visually appealing user interfaces that not only look great but also offer seamless user experiences, keeping both aesthetics and functionality in mind.</p>
                        </div>
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Website Optimization</h2>
                            <p>I improve website performance through speed optimization, clean code structure, and SEO best practices, ensuring your website loads faster and ranks better on search engines.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services