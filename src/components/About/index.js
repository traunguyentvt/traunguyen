import React from "react";
import avatar from "../../img/traunguyen.jpg";
import StaticData from "../../common/StaticData";
import { info } from "../Contact";

class About extends React.Component {
    state = {
        about_me: StaticData.getAboutMe(),
    };

    render() {
        const { about_me } = this.state;
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row about-me">
                                    <div className="col-md-12">
                                        <div className="pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title title-left">About Me</h5>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 text-center">
                                                    <img
                                                        src={avatar}
                                                        alt="TrauNguyen's Avatar"
                                                        className="avatar"
                                                    />
                                                </div>
                                                <div className="col-md-8">
                                                    {about_me.map((content) => (
                                                        <p className="lead" key={content.id}>
                                                            {content.content}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row profile">
                                    <div className="col-md-12">
                                        <ul className="info-list">
                                            <li>
                                                <strong>Full Name:</strong>
                                                <span>{info.fullName}</span>
                                            </li>
                                            <li>
                                                <strong>PhoneNumber:</strong>
                                                <span>{info.phone}</span>
                                            </li>
                                            <li>
                                                <strong>Major:</strong>
                                                <span>{info.jobTitle}</span>
                                            </li>
                                            <li>
                                                <strong>Email:</strong>
                                                <span>{info.email}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="button-holder">
                                        <a
                                            className="btn-shutter-out-horizontal "
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://docs.google.com/document/d/1NF64CsAxdG9pzasgfnSGeHJv8ZpQRxYzRXcEOUoyLk0/view"
                                        >
                                            My Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
