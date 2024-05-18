import React from "react";
import StaticData from "../../common/StaticData";
import { layout } from "../style";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";

const Content = ({ text, link }) => (
    <div key={text}>
        <p className="font-poppins font-normal text-[14px] text-dimblack mt-2">
            • {text}{" "}
            {link && (
                <a href={link} target="_blank">
                    <BsLink45Deg
                        size="1rem"
                        className="inline hover:text-teal-200"
                    ></BsLink45Deg>
                </a>
            )}
        </p>
    </div>
);

const ExperienceCard = ({ link, logo, organisation, positions }) => (
    <motion.div
        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
    >
        <div className="flex flex-row items-center mb-6">
            <a href={link} target="_blank">
                <img
                    src={logo}
                    alt={organisation}
                    className="w-[52px] h-[52px] rounded-full z-[2]"
                />
            </a>
            <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2">
                {organisation}
            </h4>
        </div>
        <ol className="relative border-l line ml-6">
            {positions.map((position, index) => (
                <li
                    key={index}
                    className={`${
                        index === positions.length - 1 ? "mb-0" : "mb-4"
                    } ml-4`}
                >
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
                        {position.title}
                    </h3>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {position.duration}
                    </time>
                    {position.content.map((info, index) => (
                        <Content key={index} index={index} {...info} />
                    ))}
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
                </li>
            ))}
        </ol>
    </motion.div>
);

const SkillsAndExperience = () => (
    <section id="skills" className="mb-12">
        <div className="container">
            <div className="box-shadow-full">
                <div className="title-box-2">
                    <h5 className="title title-left">Skills</h5>
                </div>
                <div className={layout.section}>
                    <div>
                        Objective-C, Swift, Swift-UI, JavaScript, JQuery, Java, Kotlin, SpringBoot, Hibernate, GPS - Location - Map, Core Animation, Combine Framework, REST API, CocoaPods, Socket, Firebase, AWSS3, Push Notification, Keychain Sharing, Multiple Languages, Realm, SQL, SQLite, CoreData, FacebookSDK, Alamofire/AFNetworking, Image Loader, QR Code, Printer Bluetooth, Youtube/Vimeo, Charts, Third-Party Libraries, HTML, CSS, Algorithms, Design Patterns.
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SkillsAndExperience;
