import React from "react";

const linksData = [
    {
        href: "https://github.com/traunguyentvt",
        target: "_blank",
        rel: "noopener noreferrer",
        icon: "ion-social-github",
        label: "GitHub"
    },
    {
        href: "https://www.facebook.com/nguyenvanngoc.trau",
        target: "_blank",
        rel: "noopener noreferrer",
        icon: "fa-brands fa-facebook",
        label: "Facebook"
    },
    {
        href: "https://www.linkedin.com/in/trau-nguyen",
        target: "_blank",
        rel: "noopener noreferrer",
        icon: "ion-social-linkedin",
        label: "LinkedIn"
    },
];

const Links = () => (
    <div className="socials">
        <ul>
            {linksData.map((link, index) => (
                <li key={index}>
                    <a
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
                        aria-label={link.label}
                    >
                        <span className="social ico-circle">
                            <i className={link.icon}></i>
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default Links;
