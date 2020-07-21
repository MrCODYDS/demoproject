import React from 'react'

const Banner = () => {
    return (
        <div className="banner py-4 py-md-5">
            <div className="container">
                <div className="row">
                    <div className="banner__content col d-flex flex-column justify-content-center">
                        <div className="sub-text mb-4">Welcome</div>
                        <div className="divider mb-4"></div>
                        <div className="main-text mb-4">Yarne De Smet</div>
                        <div className="info-text mb-4">Passionate about Web Design, Photo & Video Editing and Web Development</div>
                        <a href="/" className="main-btn">Get to know me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner