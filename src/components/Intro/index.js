import React from "react";
import Typed from "react-typed";
import Links from "../Links";

class Intro extends React.Component {
    render() {
        return (
            <div id="home" className="intro route bg-image footer-paralax-bg">
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="intro-title mb-4">I'm Van Ngoc Trau Nguyen</h1>
                            <h3 className="intro-title mb-4">A Senior iOS Developer</h3>
                            <h3 className="intro-title mb-4">A Senior Software Developer </h3>
                            <h3 className="intro-title mb-4">with 8+ years of experience.</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
