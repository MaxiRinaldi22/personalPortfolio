import { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { HOME_PARTS } from "../util/constants";
import { gsap } from "gsap";

function Header({ refs }) {
  const { aboutRef, projectsRef, skillsRef, contactRef } = refs;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const mobileProject = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const location = useLocation().pathname;

  const handleScrol = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = (e) => {
    if (location === "home") {
      e.preventDefault();
    }
    setIsMenuOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScroll(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      menuRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    if (isMenuOpen) {
      gsap.fromTo(
        mobileProject.current,
        {
          marginTop: 0,
        },
        {
          marginTop: "170px",
          duration: 1,
          ease: "power3.out",
        },
      );
    } else {
      gsap.fromTo(
        mobileProject.current,
        {
          marginTop: "170px",
        },
        {
          marginTop: 0,
          duration: 1,
          ease: "power3.out",
        },
      );
    }
  }, [isMenuOpen]);

  return (
    <header
      className={
        mobileMenuOpen
          ? "z-999 fixed left-0 top-0 bg-transparent"
          : `fixed left-0 top-0 z-50 w-full pl-5 transition-colors duration-500 ease-in-out md:px-44 ${isScroll ? "bg-[#171C22] shadow-md" : "bg-transparent"}`
      }
    >
      <nav className="mx-auto flex w-full items-center justify-between py-5 pr-7 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#">
            <img alt="" src={logo} className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <ul className="hidden lg:flex lg:gap-x-12">
            <li className={`flex items-center ${location === "/projects" ? "pr-8" : ""}`}>
              <Link to="/" onClick={handleHomeClick}>
                <p className="text-xl font-semibold text-[#CB7220]">Home</p>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex h-full w-full items-center justify-center"
                disabled={location === "/projects"}
              >
                <svg
                  className={`pt-1 transition duration-[800ms] ${isMenuOpen ? "-rotate-90" : "rotate-90"} ${location === "/projects" ? "hidden" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={33}
                  height={33}
                  fill="rgba(202,114,31,1)"
                >
                  <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                </svg>
              </button>

              {isMenuOpen && (
                <ul
                  ref={menuRef}
                  className="absolute left-[1490px] top-12 mt-2 w-24 rounded-md bg-[#171C22] text-[#CB7220] focus:outline-none"
                >
                  {HOME_PARTS.map((item) => (
                    <li key={item.title}>
                      <button
                        className="text-md block px-4 py-2 font-[500]"
                        onClick={() => {
                          if (item.title === "About") {
                            handleScrol(aboutRef);
                            setIsMenuOpen(false);
                          } else if (item.title === "Projects") {
                            handleScrol(projectsRef);
                            setIsMenuOpen(false);
                          } else if (item.title === "Skills") {
                            handleScrol(skillsRef);
                            setIsMenuOpen(false);
                          } else if (item.title === "Contact") {
                            handleScrol(contactRef);
                            setIsMenuOpen(false);
                          }
                        }}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="flex items-center">
              <Link to="/projects">
                <p className="text-xl font-semibold text-[#CB7220]">Projects</p>
              </Link>
            </li>
          </ul>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex h-80 w-full flex-col gap-6 overflow-y-auto bg-[#20272F] py-5 pl-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between pr-9">
            <a href="#">
              <img alt="" src={logo} className="h-10 w-auto" />
            </a>
            <button
              className="-m-2.5 rounded-md text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div>
                <ul className="pr-5">
                  <li className="flex items-center">
                    <Link to="/" className="w-full" onClick={handleHomeClick}>
                      <p className="text-xl font-semibold text-[#CB7220]">
                        Home
                      </p>
                    </Link>
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="flex h-full w-full items-center justify-end"
                    >
                      <svg
                        className={`pt-1 transition duration-[800ms] ${isMenuOpen ? "-rotate-90" : "rotate-90"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={30}
                        height={30}
                        fill="rgba(202,114,31,1)"
                      >
                        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                      </svg>
                    </button>
                    {isMenuOpen && (
                      <ul
                        ref={menuRef}
                        className="absolute top-28 mt-2 w-24 rounded-md text-[#CB7220]"
                      >
                        {HOME_PARTS.map((item) => (
                          <li key={item.title}>
                            <button
                              className="text-md justyfy-center flex items-center py-2 font-[400] text-white"
                              onClick={() => {
                                if (item.title === "About") {
                                  handleScrol(aboutRef);
                                  setMobileMenuOpen(false);
                                  setIsMenuOpen(false);
                                } else if (item.title === "Projects") {
                                  handleScrol(projectsRef);
                                  setMobileMenuOpen(false);
                                  setIsMenuOpen(false);
                                } else if (item.title === "Skills") {
                                  handleScrol(skillsRef);
                                  setMobileMenuOpen(false);
                                  setIsMenuOpen(false);
                                } else if (item.title === "Contact") {
                                  handleScrol(contactRef);
                                  setMobileMenuOpen(false);
                                  setIsMenuOpen(false);
                                }
                              }}
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li
                    ref={mobileProject}
                    // className={`${isMenuOpen ? "mt-[170px]" : ""}`}
                  >
                    <Link to="/projects">
                      <p className="text-xl font-semibold text-[#CB7220]">
                        Projects
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
