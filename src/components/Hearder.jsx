import { useEffect, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";


function Header({ toAboutMe, toPorjects, toSkills, toContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

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

  return (
    <header
      className={
        mobileMenuOpen
          ? "z-999 fixed left-0 top-0 bg-transparent"
          : `fixed left-0 top-0 z-50 w-full transition-colors duration-500 ease-in-out ${isScroll ? "bg-[#171C22] shadow-md" : "bg-transparent"}`
      }
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5">
            <span className="sr-only">Your Company</span>
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
          <a
            href="#"
            className="text-lg font-semibold text-[#ca721f] transition-transform duration-300 will-change-transform hover:scale-110"
          >
            Home
          </a>
          <a
            onClick={toAboutMe}
            href="#!"
            className="text-lg font-semibold text-[#ca721f] transition-transform duration-300 will-change-transform hover:scale-110"
          >
            About me
          </a>
          <a
            onClick={toPorjects}
            href="#!"
            className="text-lg font-semibold text-[#ca721f] transition-transform duration-300 will-change-transform hover:scale-110"
          >
            Projects
          </a>
          <a
            onClick={toSkills}
            href="#!"
            className="text-lg font-semibold text-[#ca721f] transition-transform duration-300 will-change-transform hover:scale-110"
          >
            Skills
          </a>
          <a
            onClick={toContact}
            href="#!"
            className="text-lg font-semibold text-[#ca721f] transition-transform duration-300 will-change-transform hover:scale-110"
          >
            Contact
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 h-72 w-full overflow-y-auto bg-[#20272F] px-9 py-5 pl-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="" src={logo} className="h-10 w-auto" />
            </a>
            <button
              className="-m-2.5 rounded-md text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div onClick={() => setMobileMenuOpen(false)}>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#ca721f] hover:bg-[#171C22]"
                >
                  Home
                </a>
                <a
                  onClick={toAboutMe}
                  href="#!"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#ca721f] hover:bg-[#171C22]"
                >
                  About me
                </a>
                <a
                  onClick={toPorjects}
                  href="#!"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#ca721f] hover:bg-[#171C22]"
                >
                  Project
                </a>
                <a
                  onClick={toSkills}
                  href="#!"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#ca721f] hover:bg-[#171C22]"
                >
                  Skills
                </a>
                <a
                  onClick={toContact}
                  href="#!"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#ca721f] hover:bg-[#171C22]"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
