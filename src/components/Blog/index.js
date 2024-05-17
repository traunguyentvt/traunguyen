import React from "react";
import workflow from "../../img/workflow.png";

class Blog extends React.Component {
    render() {
        return (
            <section id="block" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row about-me">
                                    <div className="col-md-12">
                                        <div className="pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title title-left">
                                                    Cloud Computing Infrastructure
                                                </h5>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <img src={workflow} alt="Workflow Diagram" className="workflow" />
                                                </div>

                                                <div className="col-md-12 text-center">
                                                    <a
                                                        className="btn-shutter-out-horizontal "
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://github.com/traunguyentvt?tab=repositories"
                                                    >
                                                        GitHub
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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

export default Blog;
