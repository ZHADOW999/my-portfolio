import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ProjectCard = ({project}) => {
    return ( 
        <div className='flex flex-col md:flex-row md:items-center md:justify-center  gap-10 mt-20 '> 
        
            <div className="dark:border-none bg-none border border-dark-bg md:w-[50%] md:py-14  md:px-7 dark:bg-dark-theme-element-color py-14  px-7 h-auto  rounded-lg relative sm:py-24 sm:px-12 lg:py-24 lg:px-12 ">
            <p className="absolute top-3 left-1 h-8 grid place-items-center rounded-[30px] text-white w-24 bg-dark-bg">{project.type}</p>
                <img src={project.image} className='w-full rounded-lg dark:border-none border border-dark-bg' alt="project" /></div>
            <div className='md:w-1/2'>
                <h3 className= "mb-5 lg:text-[32px] text-[24px] font-sub-header-text-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1">{project.title}</h3>
                <p className="3xl:text-3 font-small-text-font dark:text-dark-theme-textColor-2  text-light-theme-textColor-2">{project.description}</p>
                <p className="font-projetInfo-font border-b-[1px] mt-5 pb-4 dark:border-light-theme-textColor-2 border-light-theme-textColor-1 uppercase text-3 dark:text-dark-theme-textColor-1 text-light-theme-textColor-1">project info</p>
                <p className="flex items-center justify-between border-b-[1px] py-4 dark:border-light-theme-textColor-2 border-light-theme-textColor-1 font-small-text-font dark:text-dark-theme-textColor-2 text-light-theme-textColor-2"><span className=" dark:text-dark-theme-textColor-1 text-light-theme-textColor-1">Year</span>{project.year}</p>
                <p className="flex items-center justify-between border-b-[1px] py-4 dark:border-light-theme-textColor-2 border-light-theme-textColor-1 font-small-text-font dark:text-dark-theme-textColor-2 text-light-theme-textColor-2"><span className="dark:text-dark-theme-textColor-1 text-light-theme-textColor-1">Role</span>{project.role}</p>
                <div className="space-x-5 mt-5">
                    {/* <button className="font-button-font dark:text-dark-mode-accent text-light-mode-accent text-1.5 border-b-2 dark:border-dark-mode-accent border-light-mode-accent pb-0.5 uppercase"><a className='' href={project.live} target="_blank" rel="noreferrer">live demo<FontAwesomeIcon className='ml-2 dark:text-dark-mode-accent -rotate-45 text-3 text-light-mode-accent' icon={faArrowRight}/></a></button> */}
                    <button className="font-button-font relative dark:text-dark-mode-accent text-light-mode-accent text-1.5 uppercase hover:after:w-full after:content-[''] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:h-0.5 after:block after:-bottom-1 after:absolute after:bg-light-mode-accent dark:after:bg-dark-mode-accent "><a className='' href={project.live} target="_blank" rel="noreferrer">live demo<FontAwesomeIcon className='ml-2 dark:text-dark-mode-accent -rotate-45 text-3 text-light-mode-accent' icon={faArrowRight}/></a></button>
                    
                    <button className="font-button-font relative dark:text-dark-mode-accent text-light-mode-accent text-1.5 uppercase hover:after:w-full after:content-[''] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:h-0.5 after:block after:-bottom-1 after:absolute after:bg-light-mode-accent dark:after:bg-dark-mode-accent"><a className='' href={project.github} target="_blank" rel="noreferrer">see on github
                    <FontAwesomeIcon className='ml-2 text-3 dark:text-dark-mode-accent  text-light-mode-accent' icon={faGithub}/></a></button>
                </div>
               
            </div>
        </div>
     );
}
 
export default ProjectCard;