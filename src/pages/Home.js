import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import image from "../images/profile-image.png"
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <section className='mt-10 space-y-10'>
            <article>
                <h1 className="text-[57px] uppercase font-main-header-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1">hi, i am Babalola victor</h1>
                <p className="text-3 font-small-text-font dark:text-dark-theme-textColor-2 text-light-theme-textColor-2">A passionate Nigerian front-end developer transforming ideas into sleek, functional, and user-friendly websites.</p>
               <div className='flex items-center gap-4 mt-5'>
                    <button className='pl-[16px] pr-[5px] font-button-font uppercase flex items-center gap-[12px] justify-center py-[3px] rounded-3xl dark:bg-dark-mode-accent text-[14px] bg-light-mode-accent'>
                        contact me <span><FontAwesomeIcon icon={faArrowRight} className='-rotate-45 text-white p-2 text-4 bg-dark-bg rounded-full' /></span>
                    </button>
                    <Link to="https://linkedin.com/in/victor-babalola-875a1030b" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='  text-3 bg-light-theme-textColor-2 p-3 rounded-full dark:text-dark-mode-accent text-light-mode-accent'/>
                    </Link>
                    <Link to="https://github.com/ZHADOW999" target='_blank'>
                        <FontAwesomeIcon icon={faGithub}   className='text-3 bg-light-theme-textColor-2 p-3 rounded-full dark:text-dark-mode-accent text-light-mode-accent'/>
                    </Link>
               </div>
            </article>
            <img src={image} alt="my profile" />
        </section>
    );
}

export default Home;