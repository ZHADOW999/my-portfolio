import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { downloadFile } from '../components/downloadResme';
import SkillList from '../components/skillList';
import Contact from '../components/contact';

const About = () => {
    const skills=[
        {skills: 'html'},
        {skills: 'css'},
        {skills: 'javascript'},
        {skills: 'accessibility'},
        {skills: 'git'},
        {skills: 'react'},
        {skills: 'tailwindcss'},
        {skills: 'figma'},
        
    ]

    const handleDownloadResume = (e)=>{
        e.preventDefault();
        downloadFile('/resume.pdf', 'resume.pdf')
    }

    return ( <main>
        <section id="about" className='mt-20 mb-10 justify-between 3xl:w-[90%] w-[95%] m-auto sm:w-[90] flex flex-col md:flex-row '>
                <h2 className='leading-none text-[57px]  sm:text-[101px] uppercase font-main-header-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1'>
                    about me
                </h2>
                <article className=' w-full md:w-[60%]'>
                    <h3 className='mb-5 sm:text-[32px] text-[24px] font-sub-header-text-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1'>I am a frontend developer based in Nigeria, currently pursuing a degree in Computer Science.</h3>

                    <p className='3xl:text-3 font-small-text-font text-2 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2 ' >As a frontend developer currently pursuing a degree, I specialize in building responsive, user-centered web applications. My experience includes creating personal projects using HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS. I focus on crafting scalable components, optimizing performance, and delivering intuitive user experiences. I am passionate about leveraging modern web technologies and continuously expanding my skill set to create visually appealing, functional web solutions.</p>
                    
                    <div className='flex items-center gap-4 mt-5'>
                        <button onClick={handleDownloadResume} className='hover:scale-110 transition-all duration-300 ease pl-[16px] pr-[5px] font-button-font uppercase flex items-center gap-[12px] justify-center py-[3px] rounded-3xl dark:bg-dark-mode-accent text-[14px] bg-light-mode-accent'>
                            download resume <span><FontAwesomeIcon icon={faArrowRight} className='-rotate-45 text-white p-2 bg-dark-bg rounded-full' /></span>
                        </button>
                        <Link to="https://linkedin.com/in/victor-babalola-875a1030b" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedinIn} className='hover:scale-110 transition-all duration-300 ease  text-3 bg-light-theme-textColor-2 p-3 rounded-full dark:text-dark-mode-accent text-light-mode-accent' />
                        </Link>
                        <Link to="https://github.com/ZHADOW999" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className='hover:scale-110 transition-all duration-300 ease text-3 bg-light-theme-textColor-2 p-3 rounded-full dark:text-dark-mode-accent text-light-mode-accent' />
                        </Link>
                    </div>
                </article>
            </section>


            <div className='h-[1px] w-full bg-light-theme-textColor-2' ></div>


            {/*                               MY CAPABILITIES                           */}
            <section className=' my-14 justify-between 3xl:w-[90%] w-[95%] m-auto sm:w-[90] flex flex-col md:flex-row '>
            <h2 className='leading-none text-[43px]  sm:text-[76px] uppercase font-main-header-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1'>
                    My Capabilities
                </h2>
                <article className='w-full md:w-[50%] space-y-5'>
                    <p className='3xl:text-3 font-small-text-font text-2 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2 '>
                    I am always eager to learn and grow, continuously expanding my expertise to stay at the forefront of frontend development.
                    </p>
                       <div className='flex flex-row  gap-3 flex-wrap'>
                            {skills.map((skill,index)=>(
                                <SkillList key={index} skills={skill.skills}/>
                            ))}
                       </div>
                </article>
            </section>


            <div className='h-[1px] w-full bg-light-theme-textColor-2' ></div>


            <section className=' mt-20 mb-10 justify-between 3xl:w-[90%] w-[95%] m-auto sm:w-[90] flex flex-col md:flex-row '>
            <h2 className='leading-none text-[43px]  sm:text-[76px] uppercase font-main-header-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1'>
                    My experience
                </h2>
                <article className='w-full md:w-[50%] space-y-3'>
                    <h3 className='capitalize w-full flex items-center justify-between sm:text-4 text-3 font-sub-header-text-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1'>technical developer<span className="ml-auto font-small-text-font text-2 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2">Oct 2024-Present</span></h3>
                    <p className='dark:text-dark-mode-accent text-light-mode-accent font-projetInfo-font'>Skilful Online</p>
                    <p className='font-small-text-font text-2 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2 3xl:text-3'>Responsible for designing and implementing responsive user interfaces, optimizing web performance, and ensuring seamless functionality for Skillful Online’s platform."</p>
                </article>

            </section>


            <div className='h-[1px] w-full bg-light-theme-textColor-2' ></div>


            {/*                                  CONTACT ME PAGE                                */}
            <section id="contact" className='3xl:w-[90%] w-[95%] sm:w-[90] m-auto my-10 '>
                <Contact />
            </section>
            
    </main> );
}
 
export default About;