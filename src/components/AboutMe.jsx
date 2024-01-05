import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>A Software Engineer</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span>In India</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                Subject: Application for the position of software developer
                Dear Sir/Madam,
                I am writing to express my interest in the software developer position that you have advertised on your website. I have recently graduated from the Feroze Gandhi Institute of Technology with a bachelor’s degree in Electronics and  communication engineering. I have a strong passion for coding and developing innovative solutions for various problems.
                During my academic projects, I have gained hands-on experience in using various programming languages, frameworks, and tools, such as Java, C++, HTML, CSS, JavaScript, React,  Git, and SQL, MYSQL,Nodejs, postgresql, MongoDB, PHP. I have also developed several web and mobile applications, such as a social media platform, a movie application, a Todo app, and a weather app, Medical health care. You can find the links to my portfolio and GitHub profile in my resume.
                I am eager to join your team and contribute to your projects. I am confident that I have the skills, knowledge, and attitude that you are looking for in a software developer. I am also willing to learn new technologies and methodologies to enhance my performance and deliver quality results.
                I would love to discuss this opportunity with you in more detail. Please let me know if you are available for an interview. You can reach me at +919639328205 or pashaturki19081@gmail.com
                Thank you for your consideration.
                Sincerely, Mohammad Imran
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I'm interested in your Software  role

                Hi Hiring team,

                I hope you're doing well! I'm interested in the 
                role you posted: Software developer. Based on my
                experience as Web developer Internship in Smartodise.in
                I believe I could be a good fit.
                Are you open to a quick chat to discuss the 
                position? I'd love to learn more about it, and 
                share more about my own qualification. I look
                forward to hearing from you.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                To obtain a challenging position that will allow me to utilizes my education, strong organisational skills and ability in a 
                fast-paced environment.I am willing to learn new concepts which would help the company to excel as the person. being an enthusiastic
                fresher, highly motivated and eager to contribute to team success through hard work and excellent organisational skills with strong 
                communication. having a good academic background of electronic and communication engineering. Good analytical 
                thinking with a practical approach to problem solving.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
