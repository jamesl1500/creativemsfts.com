const Footer = () => {
    return (
        <footer className="footer-main">
            
            <div className="inner-footer container">
                <div className="footer-large-text">
                    <h2>Get in Touch</h2>
                    <p>Have a question or want to work together? Send us a message and we'll get back to you as soon as possible.</p>
                </div>
                <div className="footer-row row">
                    <div className="footer-copyright col-lg-6">
                        <div className="footer-copyright-inner">
                            <h3>© Creative MSFTS 2025</h3>
                            <p>All rights reserved.</p>
                        </div>
                    </div>
                    <div className="footer-contact col-lg-6">
                        <div className="footer-contact-inner row">
                            <div className="footer-contact-item col-lg-6">
                                <h3>Message</h3>
                                <ul>
                                    <li><a href="mailto:hello@creativemsfts.com">hello@creativemsfts.com</a></li>
                                </ul><br />
                                <a href="mailto:hello@creativemsfts.com" className="btn btn-solid">Send a message</a>
                            </div>

                            <div className="footer-contact-item col-lg-6">
                                <h3>Social</h3>
                                <ul>
                                    <li><a href="mailto:hello@creativemsfts.com">Linkedin</a></li>
                                    <li><a href="">Twitter</a></li>
                                    <li><a href="">Instagram</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;