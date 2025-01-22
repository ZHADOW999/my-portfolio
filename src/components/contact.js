import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { downloadFile } from "./downloadResme";

const Contact = () => {
    const [state, handleSubmit] = useForm("xdkopwdz");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    

    useEffect(() => {
        if (state.succeeded) {
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }
    }, [state.succeeded]);

    const handleDownloadResume = async (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        downloadFile('/resume.pdf','resume.pdf')
        
    };
    return (
        <div className="flex flex-col md:flex-row md:items-start  md:justify-between  my-20 space-y-10 md:space-y-0">
            <div className="flex flex-col justify-between h-full gap-[330px]">
                <article>
                    <h2 className='text-[43px]  sm:text-[76px] uppercase leading-none font-main-header-font dark:text-dark-theme-textColor-1 text-light-theme-textColor-1'>let's connect</h2>
                    <p className='font-small-text-font text-2 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2'>
                        Say hello at
                        <a href="mailto:babalolav9@gmail.com" className="ml-1 font-small-text-font relative dark:text-dark-theme-textColor-1 text-light-theme-textColor-1 text-2 after:left-0 hover:after:w-full after:content-[''] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:h-0.5 after:block after:-bottom-1 after:absolute after:bg-light-mode-accent dark:after:bg-dark-mode-accent">
                            babalolav9@gmail.com
                        </a>
                    </p>
                    <p className='mt-1 font-small-text-font text-2 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2'>
                        For more info, here's my
                        <a aria-label="Download my resume" href="/resume.pdf" onClick={handleDownloadResume} className="ml-1 font-small-text-font relative dark:text-dark-theme-textColor-1 text-light-theme-textColor-1 text-2 after:left-0 hover:after:w-full after:content-[''] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:h-0.5 after:block after:-bottom-1 after:absolute after:bg-light-mode-accent dark:after:bg-dark-mode-accent">
                            resume
                        </a>
                    </p>
                    <div className='flex items-center gap-5 mt-10'>
                        <Link aria-label='Link to my linkedin page' to="https://linkedin.com/in/victor-babalola-875a1030b" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedinIn} className='hover:scale-125 transition-all duration-400 ease  text-4  dark:text-dark-mode-accent text-light-mode-accent' />
                        </Link>
                        <Link aria-label='Link to my github page' to="https://github.com/ZHADOW999" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className='hover:scale-125 transition-all duration-400 ease  text-4 dark:text-dark-mode-accent text-light-mode-accent' />

                        </Link>
                        <Link aria-label='Link to my twitter page' to="https://x.com/victorBabalol16" target='_blank'>
                            <FontAwesomeIcon icon={faXTwitter} className='hover:scale-125 transition-all duration-400 ease  text-4  dark:text-dark-mode-accent text-light-mode-accent' />
                        </Link>
                        <Link aria-label='Link to my Instagram page' to="https://www.instagram.com/zhadow_999/" target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} className='hover:scale-125 transition-all duration-400 ease  text-4  dark:text-dark-mode-accent text-light-mode-accent' />
                        </Link>
                    </div>
                </article>
                <p className="hidden md:block text-1 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2">
                    &copy; {new Date().getFullYear()} Victor Babalola. All rights reserved.
                </p>
            </div>

            <div className="md:w-[50%] w-full">
                <form className="" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5">
                        <label className="font-sub-header-text-font text-1 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2" htmlFor="name">Name</label>
                        <input className="focus:ring-0 dark:bg-dark-theme-element-color focus:border-light-theme-textColor-1 outline-none right-0 dark:focus:border-dark-theme-textColor-2 rounded-md border-0 focus:border-[1px] dark:text-dark-theme-textColor-1 text-light-theme-textColor-1 p-4 indent-2 transition-all duration-100 ease-in-out" type="text" name="name" 
                        required
                        id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        <label className="font-sub-header-text-font text-1 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2" htmlFor="email">Email</label>
                        <input className="focus:ring-0 dark:bg-dark-theme-element-color focus:border-light-theme-textColor-1 outline-none right-0 dark:focus:border-dark-theme-textColor-2 rounded-md border-0 focus:border-[1px] dark:text-dark-theme-textColor-1 text-light-theme-textColor-1 p-4 indent-2 transition-all duration-100 ease-in-out" type="email" 
                        required
                        name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label className="font-sub-header-text-font text-1 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2" htmlFor="subject">Subject</label>
                        <input className="focus:ring-0 dark:bg-dark-theme-element-color focus:border-light-theme-textColor-1 outline-none right-0 dark:focus:border-dark-theme-textColor-2 rounded-md border-0 focus:border-[1px] dark:text-dark-theme-textColor-1 text-light-theme-textColor-1 p-4 indent-2 transition-all duration-100 ease-in-out" type="text" 
                        required
                        name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <ValidationError
                            prefix="Subject"
                            field="subject"
                            errors={state.errors}
                        />
                        <label className="font-sub-header-text-font text-1 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2" htmlFor="message">Message</label>
                        <textarea className="h-36 focus:ring-0 dark:bg-dark-theme-element-color focus:border-light-theme-textColor-1 outline-none right-0 dark:focus:border-dark-theme-textColor-2 rounded-md border-0 focus:border-[1px] dark:text-dark-theme-textColor-1 text-light-theme-textColor-1 p-4 indent-2 transition-all duration-100 ease-in-out" name="message" 
                        required
                        id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button disabled={state.submitting} className=" mt-5 bg-light-mode-accent dark:bg-dark-mode-accent text-light-dark-textColor-1 font-button-font dark:text-light-theme-textColor-1 py-3 px-5 hover:scale-110 transition-all duration-300 ease-in-out rounded-3xl" type="submit">Submit</button>
                </form>
                {state.succeeded && <p className="font-sub-header-text-font mt-5 text-2 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2">Thanks! I'll get back to you soon.</p>}
            </div>
            
            <p className="block md:hidden text-1 dark:text-dark-theme-textColor-2 text-light-theme-textColor-2">
                &copy; {new Date().getFullYear()} Victor Babalola. All rights reserved.
            </p>
            
        </div>

    );

};

export default Contact;