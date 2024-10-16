'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AiFillHome } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { FaUser, FaTools, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import Logo from '../assets/icons/Damia-logo.svg';
import Link from 'next/link';

export default function Sidebar() {
  const [theme, setTheme] = useState('light');
  const isActive = usePathname();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <aside className="h-screen bg-background text-primary-text flex flex-col items-center py-6 shadow-lg transition-all duration-300 ease-in-out sidebar">
      <div className="mb-8">
        <Image
          src={Logo}
          alt="Next.js logo"
          width={100}
          height={38}
          priority
        />
      </div>

      <nav className="space-y-6 flex flex-col gap-3">
        <Link href="/" className="group relative text-2xl hover:text-primary transition-transform duration-300 transform hover:scale-110">
          <AiFillHome className={`w-8 h-8 text-foreground ${isActive === '/' ? 'active' : ''}`} />
        </Link>
        <Link href="about" className="group relative text-2xl hover:text-primary transition-transform duration-300 transform hover:scale-110">
          <FaUser className={`w-8 h-8 text-foreground ${isActive === '/about' ? 'active' : ''}`}  />
        </Link>
        <Link href="skills" className="group relative text-2xl hover:text-primary transition-transform duration-300 transform hover:scale-110">
          <FaTools className={`w-8 h-8 text-foreground ${isActive === '/skills' ? 'active' : ''}`}  />
        </Link>
        <Link href="work" className="group relative text-2xl hover:text-primary transition-transform duration-300 transform hover:scale-110">
          <MdWork className={`w-8 h-8 text-foreground ${isActive === '/work' ? 'active' : ''}`}  />
        </Link>
        <Link href="contact" className="group relative text-2xl hover:text-primary transition-transform duration-300 transform hover:scale-110">
          <FaEnvelope className={`w-8 h-8 text-foreground ${isActive === '/contact' ? 'active' : ''}`}  />
        </Link>
      </nav>

      <div className="mt-auto">
        <div className="text-sm text-gray-900 dark:text-white">
          <div
            onClick={toggleTheme}
            className={`relative inline-flex items-center h-6 w-11 cursor-pointer transition-colors ${theme === 'dark' ? "bg-yellow-500" : "bg-gray-200"} rounded-full`}
          >
            <span className={`inline-block h-4 w-4 transform bg-white rounded-full transition-transform ${theme === 'dark' ? "translate-x-6" : "translate-x-1"}`} />
            <FaMoon className={`absolute left-1 text-gray-400 transition-opacity ${theme === 'dark' ? "opacity-100" : "opacity-0"}`} />
            <FaSun className={`absolute right-1 text-gray-400 transition-opacity ${theme === 'dark' ? "opacity-0" : "opacity-100"}`} />
          </div>
        </div>
      </div>
    </aside>
  );
}
