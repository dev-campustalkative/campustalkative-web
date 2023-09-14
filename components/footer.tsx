'use client';

import Image from 'next/image';
import Contact from '@/containers/contact';
import Container from '@/components/container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mx-6">
      <Container>
        <Contact />
      </Container>
      <Container>
        <div className="py-24 sm:py-12">
          <div className="flex justify-center items-center gap-4 my-4 sm:flex-col sm:justify-center sm:items-center">
            <div className="w-full flex items-end justify-end sm:items-center sm:justify-center">
              <Image
                src="/assets/images/--ct-logo.png"
                alt="campustalkative logo"
                className="sm:w-[150px]"
                width={212}
                height={50}
              />
            </div>
            <div className="w-full sm:text-center">
              <span className="sm:text-center ">
                © 2023. All rights reserved.
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 my-4">
            <Link
              href="/terms-of-use"
              className="w-full flex items-end justify-end capitalize  text-sm cursor-pointer hover:text-orange-400 transition"
            >
              TERMS OF USE
            </Link>
            <Link
              href="/privacy-policy"
              className="w-full capitalize  text-sm cursor-pointer hover:text-orange-400 transition"
            >
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
