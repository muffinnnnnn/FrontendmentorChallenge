import React from 'react';

function Intro() {
    return (
        <div className="intro">
            <img className="curvy-background" src="" alt="" />
            <img className="index-setting" src="images/illustration-intro.png" alt="intro-img" />

            <h1 className="index-setting intro-heading header-font">All your files in one secure location, <br /> accessible anywhere.</h1>
            <p className="index-setting intro-detail text-font">Fylo stores all your most important files in one secure location. <br /> Access them wherever
            you need, share and collaborate with <br /> friends, family, and co-workers.</p>
            <button className="index-setting btn btn-start">Get Started</button>
        </div>
    );
}

export default Intro;
