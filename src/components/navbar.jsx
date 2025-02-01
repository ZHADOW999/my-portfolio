import { DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState,useEffect,useCallback } from "react";
import "../index.css"
const NavBar = () => {
    const [isActive, setIsActive]= useState(false)
    const [showNavBar,setShowNavBar] = useState(false);
    const [lastScrollY,setLastScrollY] = useState(false);


    const handleToggleScroll = useCallback( () => {
        if (typeof window !== "undefined") {
            const currentScrollY = window.scrollY;
            setShowNavBar(currentScrollY < lastScrollY || currentScrollY < 500); // Show navbar when scrolling up or at the top
            setLastScrollY(currentScrollY); // Update last scroll position
        }
    },[lastScrollY])

    useEffect(() => {
        window.addEventListener("scroll",handleToggleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleToggleScroll);
        }
    },[lastScrollY,handleToggleScroll])


    const handleToggle = () => {
        setIsActive((prevState) => !prevState);
    };
    

    return ( 
        <header className={`transition-transform duration-300 ease-in-out z-50 dark:bg-dark-bg bg-Light-bg py-5  fixed top-0 left-0 right-0 ${showNavBar ? 'translate-y-0' : '-translate-y-[150%]'}`}>
            <nav className="  3xl:w-[90%] w-[95%] sm:w-[90] m-auto flex  z-50 justify-between items-center dark:text-dark-theme-textColor-2 text-light-theme-textColor-2 ">
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
              <div className={` nav  flex-col justify-between flex items-center sm:w-[58%] px-8 -right-[0%] border-[1px] dark:border-dark-theme-textColor-2 border-light-theme-textColor-2 transition-all duration-300 ease-in-out w-[25%] dark:bg-dark-bg bg-Light-bg absolute -bottom-[160px] sm:relative sm:flex-row sm:translate-x-[0%] sm:bottom-auto sm:right-auto opacity-100 z-50 sm:border-none sm:bg-none sm:dark:bg-none  ${isActive ? "translate-x-0" : "translate-x-[130%]"}`}>
                    <ul className="sm:flex-row justify-center gap-5 items-center flex flex-col font-small-text-font ">
                        <li><a className="capitalize hover:dark:text-dark-theme-textColor-1 hover:text-light-theme-textColor-1 transition-all duration-300 ease-in"  href="#work" >work</a></li>
                        <li>
                            <Link target="_blank" rel="noreferrer" to="/About" className="capitalize hover:dark:text-dark-theme-textColor-1 hover:text-light-theme-textColor-1 transition-all duration-300 ease-in" href="#about">about</Link>
    
                        </li>             
                        <li><a className="capitalize hover:dark:text-dark-theme-textColor-1 hover:text-light-theme-textColor-1 transition-all duration-300 ease-in" href="#contact">contact</a></li>
                    </ul>
                    <DarkThemeToggle/>
              </div>
            </nav>
        </header>
     );
}
 
export default NavBar;
