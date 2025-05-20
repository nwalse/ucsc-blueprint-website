import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#262829] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/">
              <img src="blueprint/blueprint-logo.svg" alt="Blueprint Logo" className="h-8 mb-6" />
            </Link>
            <p className="text-sm mb-2">Technology for nonprofits</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">General</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline text-sm" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/projects" className="hover:underline text-sm" onClick={() => window.scrollTo(0, 0)}>Projects</Link></li>
              <li><Link to="/team" className="hover:underline text-sm" onClick={() => window.scrollTo(0, 0)}>Team</Link></li>
              <li><Link to="/contact" className="hover:underline text-sm" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Students</h3>
            <ul className="space-y-2">
              <li><Link to="/students" className="hover:underline text-sm" onClick={() => window.scrollTo(200, 200)}>Applications</Link></li>
              <li><Link to="/students" className="hover:underline text-sm" onClick={() => window.scrollTo(1300, 1300)}>Process</Link></li>
              <li><Link to="/students" className="hover:underline text-sm" onClick={() => window.scrollTo(2000, 2000)}>FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Nonprofits</h3>
            <ul className="space-y-2">
              <li><Link to="/nonprofits" className="hover:underline text-sm" onClick={() => window.scrollTo(200, 200)}>Applications</Link></li>
              <li><Link to="/nonprofits" className="hover:underline text-sm" onClick={() => window.scrollTo(1300, 1300)}>Process</Link></li>
              <li><Link to="/nonprofits" className="hover:underline text-sm" onClick={() => window.scrollTo(2000, 2000)}>FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2024 UCSC Blueprint. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/ucscblueprint/" className="social-icon" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://github.com/ucsc-blueprint" className="social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://medium.com/@ucscblueprint" className="social-icon" aria-label="Medium">
              <svg width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.9622 0.288975C7.43823 -0.0963249 10.9462 -0.0963249 14.4222 0.288975C16.3212 0.500975 17.8522 1.99597 18.0752 3.90197C18.4874 7.42663 18.4874 10.9873 18.0752 14.512C17.8522 16.418 16.3212 17.913 14.4232 18.126C10.9469 18.5114 7.43855 18.5114 3.9622 18.126C2.0632 17.913 0.532204 16.418 0.309204 14.513C-0.103068 10.988 -0.103068 7.42696 0.309204 3.90197C0.532204 1.99597 2.0632 0.500975 3.9622 0.288975ZM13.6022 6.18697L14.4422 5.38397V5.20697H11.5402L9.4712 10.367L7.1192 5.20697H4.0752V5.38397L5.0552 6.56397C5.10281 6.60664 5.13967 6.65994 5.16278 6.71955C5.18589 6.77915 5.1946 6.84337 5.1882 6.90697V11.548C5.2022 11.6304 5.19665 11.715 5.17198 11.7949C5.14732 11.8748 5.10424 11.9478 5.0462 12.008L3.9422 13.348V13.523H7.0692V13.347L5.9662 12.009C5.90762 11.9489 5.86349 11.8762 5.83715 11.7965C5.81081 11.7168 5.80297 11.6322 5.8142 11.549V7.53497L8.5592 13.524H8.8792L11.2362 7.53497V12.308C11.2362 12.435 11.2362 12.459 11.1522 12.543L10.3042 13.366V13.542H14.4212V13.366L13.6032 12.562C13.5676 12.5351 13.5401 12.499 13.5235 12.4576C13.5069 12.4161 13.502 12.371 13.5092 12.327V6.42197C13.502 6.37796 13.5069 6.33281 13.5235 6.2914C13.5401 6.24998 13.5666 6.21388 13.6022 6.18697Z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/ucsc-blueprint/posts/?feedView=all" className="social-icon" aria-label="LinkedIn">
              <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
