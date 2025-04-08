import { DarkThemeToggle } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "../index.css"

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const [showNavBar, setShowNavBar] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleToggleScroll = useCallback(() => {
        if (typeof window !== "undefined") {
            const currentScrollY = window.scrollY;
            setShowNavBar(currentScrollY < lastScrollY || currentScrollY < 500);
            setLastScrollY(currentScrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleToggleScroll);
        return () => {
            window.removeEventListener("scroll", handleToggleScroll);
        }
    }, [lastScrollY, handleToggleScroll]);

    const handleToggle = () => {
        setIsActive((prevState) => !prevState);
    };

    const handleSectionClick = (sectionId) => (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            // If on home page, scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on another page, navigate to home and then scroll
            navigate('/', { state: { scrollTo: sectionId } });
        }
        setIsActive(false);
    };

    return (
        <header className={`transition-transform duration-300 ease-in-out z-50 dark:bg-dark-bg bg-Light-bg py-5  fixed top-0 left-0 right-0 ${showNavBar ? 'translate-y-0' : '-translate-y-[150%]'}`}>
            <nav className="3xl:w-[90%] w-[95%] sm:w-[90] m-auto flex z-50 justify-between items-center dark:text-dark-theme-textColor-2 text-light-theme-textColor-2">
                <Link to='/'><p className="uppercase font-main-header-font text-[28px]">Babalola Victor</p></Link>
                <div
                    className={`sm:hidden ham-menu z-[50] ${isActive ? "active" : ""}`}
                    onClick={handleToggle}
                    aria-label="Menu button"
                >
                    <button aria-label="Toggle Menu">
                        <span className={`span-1 ${isActive ? "top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" : ""}`}></span>
                        <span className={`span-3 ${isActive ? "-rotate-45 opacity-100 top-1/2 -translate-x-1/2 -translate-y-1/2" : ""}`}></span>
                    </button>
                </div>
                <div className={`nav flex-col justify-between flex items-center sm:w-[58%] px-8 -right-[0%] border-[1px] dark:border-dark-theme-textColor-2 border-light-theme-textColor-2 transition-all duration-300 ease-in-out w-[25%] dark:bg-dark-bg bg-Light-bg absolute -bottom-[160px] sm:relative sm:flex-row sm:translate-x-[0%] sm:bottom-auto sm:right-auto opacity-100 z-50 sm:border-none sm:bg-none sm:dark:bg-none ${isActive ? "translate-x-0" : "translate-x-[130%]"}`}>
                    <ul className="sm:flex-row justify-center gap-5 items-center flex flex-col font-small-text-font">
                        <li><a onClick={handleSectionClick('work')} className="capitalize hover:dark:text-dark-theme-textColor-1 hover:text-light-theme-textColor-1 transition-all duration-300 ease-in cursor-pointer">work</a></li>
                        <li>
                            <Link to="/About" className="capitalize hover:dark:text-dark-theme-textColor-1 hover:text-light-theme-textColor-1 transition-all duration-300 ease-in">about</Link>
                        </li>
                        <li><a href="#contact"  className="capitalize hover:dark:text-dark-theme-textColor-1 hover:text-light-theme-textColor-1 transition-all duration-300 ease-in cursor-pointer">contact</a></li>
                    </ul>
                    <DarkThemeToggle />
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
