
import React from 'react';

function Content() {
    return (
        <div className="content-container">
            <div className="icon-container">
                <div className="left-container">
                    <div className="lil-child">
                        <img className="icon-sizing" src="images/icon-access-anywhere.svg" alt="" />
                        <h2 className="icon-heading header-font">Access your files, anywhere</h2>
                        <p className="icon-detail text-font">The ability to use a smartphone, tablet, or computer <br /> to access your account means your
                            files follow you <br /> everywhere.</p>
                    </div>
                    <div className="lil-child">
                        <img className="icon-sizing" src="images/icon-security.svg" alt="" />
                        <h2 className="icon-heading">Security you can trust</h2>
                        <p className="icon-detail">2-factor authentication and user-controlled encryption are just a couple of the security
                            features we allow to help secure your files.
                        </p>
                    </div>
                </div>

                <div className="right-container">
                    <div className="lil-child">
                        <img className="icon-sizing" src="images/icon-collaboration.svg" alt="" />
                        <h2 className="icon-heading">Real-time collaboration</h2>
                        <p className="icon-detail">Securely share files and folders with friends, family and colleagues for live collaboration.
                            No email attachments required.
                        </p>
                    </div>
                    <div className="lil-child">
                        <img className="icon-sizing" src="images/icon-any-file.svg" alt="" />
                        <h2 className="icon-heading">Store any type of file</h2>
                        <p className="icon-detail">Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all
                            file types to be securely stored and shared.
                        </p>
                    </div>
                </div>
            </div>

            <div className="productiveContainer">
                <div>
                    <img className="productive-img" src="images/illustration-stay-productive.png" alt="" />
                </div>
                <div className="productive-text-child-container">
                    <h2 className="productive-heading">Stay productive, <br /> wherever you are</h2>
                    <p className="productive-detail">Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                        storage needs.</p>

                    <p className="productive-detail">Securely share files and folders with friends, family and colleagues for live collaboration. No email
                        attachments required.</p>
                    <a href="">See how Fylo works <img src="images/icon-arrow.svg" alt="arrow" /></a>
                </div>
            </div>

            <div className="big-quotes-container">
            <img className="quote-img" src="images/bg-quotes.png" alt="quote-logo" />
            <div className="quotes-container">
                <div className="quote-child">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                        become a well-oiled collaboration machine.</p>
                    <div className="account-container">
                        <img className="account-img" src="images/profile-1.jpg" alt="profile1" />
                        <div className="name-container">
                            <p className="header-font detail">Satish Patel</p>
                            <p className="account-title detail">Founder & CEO, Huddle </p>
                        </div>
                    </div>
                </div>

                <div className="quote-child">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                        become a well-oiled collaboration machine.</p>
                    <div className="account-container">
                        <img className="account-img" src="images/profile-2.jpg" alt="profile2" />
                        <div className="name-container">
                            <p className="header-font detail">Bruce McKenzie</p>
                            <p className="account-title detail">Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>

                <div className="quote-child">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                        become a well-oiled collaboration machine.</p>
                    <div className="account-container">
                        <img className="account-img" src="images/profile-3.jpg" alt="profile3" />
                        <div className="name-container">
                            <p className="header-font detail">Iva Boyd</p>
                            <p className="account-title detail">Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="access-container">
                <div>
                    <p className="access-header header-font">Get early access today</p>
                    <p className="text-font">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                        questions, our support team would be happy to help you.</p>
                </div>
                <div className="input-access-container">
                    <input className="access-input" type="text" />
                    <button className="btn btn-access ">Get Started For Free</button>
                </div>
            </div>
        </div>
    );
}

export default Content;


