import { useState } from 'react';
import Button from './Button';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  NewspaperIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

import { NavLink } from 'react-router';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <div className="bg-black text-white text-center py-2">
        Template still in progress...
      </div>

      <div className="flex items-center justify-between px-4 md:px-12 py-4">

        {/* LOGO */}
        <NavLink to="/" className="flex gap-3 items-center">
          <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-green-500 flex items-center justify-center">
            <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-black" />
          </div>

          <h3 className="text-white font-medium">
            Optometry <span className="text-green-500">Clinic</span>
          </h3>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2">

          <NavLink to="/"><Button variant="tertiary">Home</Button></NavLink>
          <NavLink to="/services"><Button variant="tertiary">Services</Button></NavLink>
          <NavLink to="/about"><Button variant="tertiary">About</Button></NavLink>
          <NavLink to="/contact"><Button variant="tertiary">Contact</Button></NavLink>

          {/* MORE */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="px-3 py-2 text-sm text-white/80 hover:text-white cursor-pointer"
            >
              More ▾
            </button>

            {moreOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-black/90 border border-white/10 rounded-xl overflow-hidden">
                <NavLink to="/ourteam" className="block px-4 py-2 hover:bg-white/10">Our Team</NavLink>
                <NavLink to="/blog" className="block px-4 py-2 hover:bg-white/10">Blog</NavLink>
                <NavLink to="/testimonials" className="block px-4 py-2 hover:bg-white/10">Testimonials</NavLink>
                <NavLink to="/faq" className="block px-4 py-2 hover:bg-white/10">FAQ</NavLink>
                <NavLink to="/medicalaid" className="block px-4 py-2 hover:bg-white/10">Medical Aid</NavLink>
              </div>
            )}
          </div>

          {/* CTA */}
          <NavLink to="/booking">
            <button className="ml-4 bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-2 rounded-lg">
              Book Appointment
            </button>
          </NavLink>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden p-2 border border-white/10 rounded-lg cursor-pointer"
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>

      </div>


      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-300 z-50 
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >

        {/* HEADER */}
        <div className="flex bg-black items-center justify-between p-6 border-b border-white/10">
          <h3 className="text-white font-medium">Menu</h3>

          <button className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* NAV LINKS */}
        <div className="flex bg-black flex-col gap-2 p-6">

          <NavLink to="/" onClick={() => setMenuOpen(false)} className="mobile-link flex items-center gap-3">
            <HomeIcon className="h-5 w-5 text-green-500" />
            Home
          </NavLink>

          <NavLink to="/services" onClick={() => setMenuOpen(false)} className="mobile-link flex items-center gap-3">
            <WrenchScrewdriverIcon className="h-5 w-5 text-green-500" />
            Services
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="mobile-link flex items-center gap-3">
            <InformationCircleIcon className="h-5 w-5 text-green-500" />
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="mobile-link flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 text-green-500" />
            Contact
          </NavLink>

          {/* DIVIDER */}
          <div className="border-t border-white/10 my-4" />

          <NavLink to="/ourteam" onClick={() => setMenuOpen(false)} className="mobile-link flex items-center gap-3">
            <UserGroupIcon className="h-5 w-5 text-green-500" />
            Our Team
          </NavLink>

          <NavLink to="/blog" onClick={() => setMenuOpen(false)} className="mobile-link flex items-center gap-3">
            <NewspaperIcon className="h-5 w-5 text-green-500" />
            Blog
          </NavLink>

          <NavLink to="/testimonials" onClick={() => setMenuOpen(false)} className="mobile-link flex items-center gap-3">
            <ChatBubbleLeftRightIcon className="h-5 w-5 text-green-500" />
            Testimonials
          </NavLink>

          <NavLink to="/faq" onClick={() => setMenuOpen(false)} className="mobile-link flex items-center gap-3">
            <QuestionMarkCircleIcon className="h-5 w-5 text-green-500" />
            FAQ
          </NavLink>

          <NavLink to="/medicalaid" onClick={() => setMenuOpen(false)} className="mobile-link flex items-center gap-3">
            <ShieldCheckIcon className="h-5 w-5 text-green-500" />
            Medical Aid
          </NavLink>

        </div>

        {/* CTA */}
        <div className="p-6 mt-auto">
          <NavLink to="/booking" onClick={() => setMenuOpen(false)}>
            <button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg">
              <CalendarDaysIcon className="h-5 w-5" />
              Book Appointment
            </button>
          </NavLink>
        </div>

      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

    </header>
  );
}

export default Header;