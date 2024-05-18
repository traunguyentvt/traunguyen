import React, { useEffect } from "react";

import { Account } from './components/Account';
import Navbar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Contact from './components/Contact';
import SkillsAndExperience from './components/SkillsAndExperience';
import WorkExperience from './components/WorkExperience';
import Blogs from './components/Blogs';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import Timeline from './components/Timeline';
import Utils from './common/Utils';
import StaticData from './common/StaticData';

import "./styles/common.scss";

const App = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const params = hash.split("&");
            const tokens = params.filter(s => s.includes("id_token"));
            if (tokens && tokens.length > 0) {
                const idToken = tokens[0].split("=")[1];

                if (idToken) {
                    const expires = params.filter(s => s.includes("expires_in"));
                    const options = {
                        path: "/",
                        domain: Utils.getSubDomain(),
                        expires: expires ? expires[0] : 3600
                    }
                    Utils.saveCookie('idToken', idToken, options);
                    window.location.href = "/";
                }
            }
        }
    }, []);

    return (
        <Account>
            <Navbar />
            <Intro />
            <About />
            <WorkExperience />
            <SkillsAndExperience />
            <Timeline
                id="education"
                setions={StaticData.getEducations()}
                sectionName="Education"
            />
            <Blogs />
            <Contact />
            <BackToTop />
            <Preloader />
        </Account>
    );
}

export default App;
