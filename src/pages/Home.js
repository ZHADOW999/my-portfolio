import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import image from "../images/profile-image.png"
import { Link } from 'react-router-dom';
import ProjectCard from '../components/project card';
import project1 from "../images/project1.jpg"
import project2 from "../images/project2.jpg"
import project3 from "../images/project3.jpg"


const Home = () => {
    // Define an array of project objects
    const projects = [
        {
            type:"challenge",
            image: project1,
            title: "Space Tourism Experience",
            description: "A modern and responsive React website showcasing space destinations, crew members, and advanced technology. The site features interactive tabs and is styled with Tailwind CSS to ensure a seamless user experience across devices.",
            year: "2023",
            role: "Front-end Developer",
            live: "https://live-demo-link1.com",
            github: "https://github.com/ZHADOW999/space-tourism-website-main-react"
        },
        {
            type:"challenge",
            image: project2,
            title: "Todo List with Theme Switcher",
            description: "A responsive and dynamic to-do list web app built with JavaScript and Tailwind CSS. It features a sleek theme switcher for a personalized user experience and local storage integration to save tasks for future sessions.",
            year: "2023",
            role: "Front-end Developer",
            live: "https://zhadow999.github.io/todo-web-app",
            github: "https://github.com/ZHADOW999/todo-web-app2"
        },
        {   
            type:"challenge",
            image: project3,
            title: " Bookmark Manager Landing Page",
            description: "A modern and clean landing page design for a bookmark manager application. Featuring a user-friendly layout, it highlights core functionalities such as simple bookmarking, speedy searching, and easy sharing. Includes extension download options, a FAQ section, and a newsletter subscription form to engage users.",
            year: "2023",
            role: "Front-end Developer",
            live: "https://zhadow999.github.io/Bookmark-Landing-Page",
            github: "https://github.com/ZHADOW999/Bookmark-Landing-Page"
        }
    ];

    return (
        <>
        {/*                                               HERO SECTION                              */}
            <section id="" className='pb-20 mt-10 space-y-10 md:flex md:items-center md:justify-between md:space-y-0  w-[95%] sm:w-[90] m-auto'>
                <article>
                    <h1 className="leading-none text-[57px] uppercase font-main-header-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1 md:text-[100px]   2xl:w-[77%]">hi, i am Babalola victor</h1>
                    <p className="3xl:text-3 text-2 font-small-text-font w-[100%] dark:text-dark-theme-textColor-2 text-light-theme-textColor-2 sm:w-[60%] lg:w-[80%]">A passionate Nigerian front-end developer transforming ideas into sleek, functional, and user-friendly websites.</p>
                   <div className='flex items-center gap-4 mt-5'>
                        <button className='pl-[16px] pr-[5px] font-button-font uppercase flex items-center gap-[12px] justify-center py-[3px] rounded-3xl dark:bg-dark-mode-accent text-[14px] bg-light-mode-accent'>
                            contact me <span><FontAwesomeIcon icon={faArrowRight} className='-rotate-45 text-white p-2 bg-dark-bg rounded-full' /></span>
                        </button>
                        <Link to="https://linkedin.com/in/victor-babalola-875a1030b" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedinIn} className='  text-3 bg-light-theme-textColor-2 p-3 rounded-full dark:text-dark-mode-accent text-light-mode-accent'/>
                        </Link>
                        <Link to="https://github.com/ZHADOW999" target='_blank'>
                            <FontAwesomeIcon icon={faGithub}   className='text-3 bg-light-theme-textColor-2 p-3 rounded-full dark:text-dark-mode-accent text-light-mode-accent'/>
                        </Link>
                   </div>
                </article>
                <div className="w-full h-full sm:w-[100%]  sm:h-[auto] md:w-[500px] md:h-[auto]"><img src={image} className='w-full h-full ' alt="my profile" /></div>
            </section>


            <div className='h-[1px] w-full bg-light-theme-textColor-2' ></div>


            {/*                                    FEATURED PROJECT SECTION                              */}
            <section id="work" className='w-[95%] sm:w-[90] m-auto mt-5 pb-20'>
                <h2 className='text-[76px] uppercase font-main-header-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1'>featured projects</h2>
                <p className='text-2 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2 w-[40%]'>Here are some of the selected projects that showcase my passion for front-end development.</p>
                <div className='flex flex-col '>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>


            <div className='h-[1px] w-full bg-light-theme-textColor-2' ></div>


            {/*                                         ABOUT SECTIOM                                */}
            <section id="about">

            </section>
    
        </>    );
}

export default Home;