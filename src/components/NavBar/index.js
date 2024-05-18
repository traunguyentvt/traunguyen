import React, { useEffect } from "react";
import $ from "jquery";

const Navbar = () => {
    const togglerHandle = () => {
        const mainNav = $("#mainNav");

        if (!mainNav.hasClass("navbar-reduce")) {
            mainNav.addClass("navbar-reduce");
        } else {
            mainNav.removeClass("navbar-reduce");
        }
    };

    useEffect(() => {
        const nav = $("nav");
        let navHeight = nav.outerHeight();

        $(".navbar-toggler").on("click", togglerHandle);

        $("body").scrollspy({
            target: "#mainNav",
            offset: navHeight,
        });

        $(".js-scroll").on("click", () => {
            $(".navbar-collapse").collapse("hide");
        });

        $(window).on("scroll", () => {
            const scrollOffset = window.pageYOffset;
            const navbarExpandMd = document.querySelector(".navbar-expand-md");

            if (scrollOffset > 50) {
                navbarExpandMd.classList.add("navbar-reduce");
                navbarExpandMd.classList.remove("navbar-trans");
            } else {
                navbarExpandMd.classList.add("navbar-trans");
                navbarExpandMd.classList.remove("navbar-reduce");
            }
        });

        $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
            const target = $($(this).attr("href"));
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - navHeight + 5,
                    },
                    1000,
                    "easeInExpo"
                );
                return false;
            }
        });

        $(".js-scroll").on("click", () => {
            $(".navbar-collapse").collapse("hide");
        });

        return () => {
            $(".navbar-toggler").off("click", togglerHandle);
            $("body").off("scroll", togglerHandle);
            $('a.js-scroll[href*="#"]:not([href="#"])').off("click");
            $(".js-scroll").off("click");
        };
    }, []);

    return (
        <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
            <div className="container">
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarDefault"
                    aria-controls="navbarDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                    <ul className="navbar-nav">
                        <NavItem target="home" label="Home" />
                        <NavItem target="about" label="About Me" />
                        <NavItem target="workExperience" label="Work Experience" />
                        <NavItem target="skills" label="Skills" />
                        <NavItem target="education" label="Education" />
                        <NavItem target="blogs" label="Blogs" />
                        <NavItem target="contact" label="Contact Me" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ target, label }) => (
    <li className="nav-item">
        <a className="nav-link js-scroll" href={`#${target}`}>
            {label}
        </a>
    </li>
);

export default Navbar;
