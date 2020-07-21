import React from 'react'

const Skills = () => {
    return (
        <div className="skills py-4 py-md-5" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col skills--top d-flex flex-column align-items-center">
                        <h3>Skills</h3>
                        <div className="divider mb-4"></div>
                        <p className="w-75 text-center">Thanks to previous work assignments and self-study of software applications. I have already built up extensive knowledge.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="skills--bottom col-6 text-center">
                        <div className="skills--bottom__content">
                            <h4>Graphics & Design</h4>
                            <div className="skills-progress-bars--left">
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--80" role="progressbar">Adobe XD</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">90%</div>
                                </div>
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--65" role="progressbar">Photoshop</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">75%</div>
                                </div>
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--60" role="progressbar">Premiere Pro</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">70%</div>
                                </div>
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--50" role="progressbar">After Effects</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">60%</div>
                                </div>
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--50" role="progressbar">Illustrator</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">60%</div>
                                </div>
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--45" role="progressbar">Animate</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">55%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills--bottom col-6 text-center">
                        <div className="skills--bottom__content">
                            <h4>Development</h4>
                            <div className="skills-progress-bars--right">
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--80" role="progressbar">HTMLS & CSS</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">90%</div>
                                </div>
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--65" role="progressbar">WordPress</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">75%</div>
                                </div>
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--65" role="progressbar">PHP</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">75%</div>
                                </div>
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--60" role="progressbar">Bootstrap</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">70%</div>
                                </div>
                                <div className="progress my-3">
                                    <div className="progress-bar progress-bar--55" role="progressbar">C#</div>
                                    <div className="progress-bar progress-bar--10" role="progressbar">65%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills