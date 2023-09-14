'use client';

import Link from 'next/link';
import Button from '@/components/button';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { links } from '@/data/links';
import { Menu } from 'iconsax-react';

const Join = () => {
  const [navShow, setNavShow] = useState(false);

  const toggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };
  return (
    <div className="w-full  items-center justify-end flex">
      <div className="hidden mmd:block">
        <Button onClick={() => toggleNav}>Join community</Button>
      </div>
      <div className="block mmd:hidden">
        {!navShow && (
          <Menu
            size="24"
            onClick={() => toggleNav()}
            aria-label="Toggle Menu"
          />
        )}

        <div
          className={`fixed top-0 left-0 z-10 h-full w-full transform bg-orange-100 bg-opacity-80 duration-300 ease-in-out dark:bg-gray-800 ${
            navShow ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end">
            <AiOutlineClose
              className=" mr-8 mt-11 h-8 "
              size={24}
              onClick={toggleNav}
            />
          </div>
          <nav className="fixed mt-8 h-full z-20">
            <div className="px-12 py-4">
              {links.map((link) => (
                <div key={link.title} className="px-12 py-4">
                  <Link
                    href={link.href}
                    className=" text-2xl font-semibold tracking-widest text-gray-900 capitalize"
                    onClick={toggleNav}
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
              <div className="px-12">
                <Button onClick={() => {}}>Join Community</Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Join;
