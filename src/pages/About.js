import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { downloadFile } from '../components/downloadResme';

const About = () => {
    const handleDownloadResume = (e)=>{
        e.preventDefault();
        downloadFile('/resume.pdf', 'resume.pdf')
    }

    return ( <>
        <section id="about" className='mt-20 mb-10 justify-between 3xl:w-[90%] w-[95%] m-auto sm:w-[90] flex flex-col md:flex-row '>
                <h2 className='leading-none text-[57px]  sm:text-[101px] uppercase font-main-header-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1'>
                    about me
                </h2>
                <article className='space-y-5 w-full md:w-[60%]'>
                    <h3 className='hidden sm:block sm:text-[32px] text-[24px] font-sub-header-text-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1'>I am a frontend developer based in Nigeria, currently pursuing a degree in Computer Science.</h3>

                    <p className='font-small-text-font text-2 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2 ' >As a frontend developer currently pursuing a degree, I specialize in building responsive, user-centered web applications. My experience includes creating personal projects using HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS. I focus on crafting scalable components, optimizing performance, and delivering intuitive user experiences. I am passionate about leveraging modern web technologies and continuously expanding my skill set to create visually appealing, functional web solutions.</p>
                    
                    <div className='flex items-center gap-4 mt-5'>
                        {/* <button onClick={handleDownloadResume} className='hover:scale-110 transition-all duration-300 ease pl-[16px] pr-[5px] font-button-font uppercase flex items-center gap-[12px] justify-center py-[3px] rounded-3xl dark:bg-dark-mode-accent text-[14px] bg-light-mode-accent'>
                            download resume <span><FontAwesomeIcon icon={faArrowRight} className='-rotate-45 text-white p-2 bg-dark-bg rounded-full' /></span>
                        </button> */}
                          <button onClick={handleDownloadResume} className=' hover:scale-110 transition-all duration-300 ease px-5 dark:text-dark-bg   font-button-font uppercase flex items-center gap-[12px] justify-center py-[10px] rounded-3xl dark:bg-dark-mode-accent text-[14px] bg-light-mode-accent'>
                            download resume <span><FontAwesomeIcon icon={faCircle} className='-rotate-45 text-black ' /></span>
                        </button>
                        {/* <Link to="https://linkedin.com/in/victor-babalola-875a1030b" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedinIn} className='hover:scale-110 transition-all duration-300 ease  text-3 bg-light-theme-textColor-2 p-3 rounded-full dark:text-dark-mode-accent text-light-mode-accent' />
                        </Link> */}
                        <Link to="https://linkedin.com/in/victor-babalola-875a1030b" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedinIn} className='hover:scale-110 transition-all duration-300 ease  text-3 text-dark-bg p-3 rounded-full dark:bg-dark-mode-accent bg-light-mode-accent' />
                        </Link>
                        <Link to="https://github.com/ZHADOW999" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className='hover:scale-110 transition-all duration-300 ease text-3 text-light-theme-textColor-2 p-3 rounded-full dark:bg-dark-mode-accent bg-light-mode-accent' />
                        </Link>
                        {/* <Link to="https://github.com/ZHADOW999" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className='hover:scale-110 transition-all duration-300 ease text-3 bg-light-theme-textColor-2 p-3 rounded-full dark:text-dark-mode-accent text-light-mode-accent' />
                        </Link> */}
                    </div>
                </article>
                            
            </section>
            
    </> );
}
 
export default About;