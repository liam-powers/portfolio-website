'use client';

import { HomeIcon, FilmIcon, Cog6ToothIcon, UserPlusIcon, FolderOpenIcon } from '@heroicons/react/24/solid';
import { FaDumbbell } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Skills', href: '#skills', icon: Cog6ToothIcon },
  { name: 'Projects', href: '#projects', icon: FolderOpenIcon },
  { name: 'Contact', href: '#contact', icon: UserPlusIcon },
  { name: 'Film', href: '/film', icon: FilmIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex justify-center items-center bg-mocha/[.85] text-4xl text-white font-bold py-1 gap-40 m-auto scroll-smooth">
      {links.map((link) => (
        <div key={link.name}>
          <a href={link.href} className="hover:fill-[#569A86] hover:text-[#569A86]">
            <link.icon className="w-10 h-auto m-auto" href={link.href}/>
            <p>{link.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
