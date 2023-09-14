'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { links } from '@/data/links';

const Menu = () => {
  const router = useRouter();
  return (
    <div className=" w-full hidden mmd:block">
      <div className="flex items-center justify-around">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="capitalize  text-sm cursor-pointer px-3 hover:text-orange-400 transition"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
