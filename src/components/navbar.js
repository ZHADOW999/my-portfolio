import { DarkThemeToggle } from "flowbite-react";
//import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css"
const NavBar = () => {
    const [isActive, setIsActive]= useState(false)
    const handleToggle = () => {
        setIsActive((prevState) => !prevState);
    };

    return ( 
        <header className="dark:bg-dark-bg bg-Light-bg mt-2">
            <nav className=" relative flex justify-between items-center dark:text-dark-theme-textColor-2 text-light-theme-textColor-2">
                <p className=" uppercase font-main-header-font text-[28px]">Babalola Victor</p>
                <div
                    className={` sm:hidden ham-menu z-[50] ${isActive ? "active" : ""}`}
                    onClick={handleToggle}
                    aria-label="Menu button"
                >
                    <button aria-label="Toggle Menu">
                        <span className={`span-1 ${isActive? "top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45":""}`}></span>
                        {/* <span className="span-2"></span> */}
                        <span className={`span-3 ${isActive ? "-rotate-45 opacity-100 top-1/2 -translate-x-1/2 -translate-y-1/2":""}`}></span>
                    </button>
                </div>
              <div className={` nav  flex-col justify-between flex items-center sm:w-[58%] -right-[0%] border-[1px] dark:border-dark-theme-textColor-2 border-light-theme-textColor-2 transition-all duration-300 ease-in-out w-[25%] dark:bg-dark-bg bg-Light-bg absolute -bottom-[155px] sm:relative sm:flex-row sm:translate-x-[0%] sm:bottom-auto sm:right-auto opacity-100 z-50 sm:border-none sm:bg-none sm:dark:bg-none  ${isActive ? "translate-x-0" : "translate-x-[130%]"}`}>
                    <ul className="sm:flex-row justify-center gap-5 items-center flex flex-col font-small-text-font ">
                        <a className="capitalize" href="#work" >work</a>
                        <a className="capitalize" href="#about">about</a>
                        <a className="capitalize" href="#contact">contact</a>
                    </ul>
                    <DarkThemeToggle/>
              </div>
            </nav>
        </header>
     );
}
 
export default NavBar;
